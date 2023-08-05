"""Provides the abstract Task class."""
import datetime
import time
import logging
import typing
import traceback
import sys
from abc import ABC, abstractmethod

from fs import errors as fs_errors

from ..client import DBClient
from .. import config
from .. import errors
from .. import schemas as T
from .. import utils

log = logging.getLogger(__name__)


class Task(ABC):
    """Abstract ingest task interface"""

    # task can be retried or not in case of failure
    can_retry = False

    def __init__(
        self, db: DBClient, task: T.TaskOut, worker_config: config.WorkerConfig
    ):
        self.db = db  # pylint: disable=C0103
        self.task = task
        self.worker_config = worker_config
        self.ingest = self.db.ingest
        self.ingest_config = self.ingest.config
        self.strategy_config = self.ingest.strategy_config
        self.walker = None
        self.last_report = {
            "time": None,
            "completed": self.task.completed,
            "total": self.task.total,
        }

    @abstractmethod
    def _run(self):
        """Task specific implementation."""

    def _initialize(self):
        """Initialize the task before execution."""

    def _on_success(self):
        """Called when the task completed successfully"""

    def _on_error(self):
        """Called when the task ultimately failed"""

    def run(self):
        """Execute the task."""
        try:
            self.walker = self.ingest_config.create_walker()
            self._initialize()
            self._run()
            self.report_progress(force=True)
            self.db.update_task(self.task.id, status=T.TaskStatus.completed)
            self._on_success()
        except Exception as exc:  # pylint: disable=broad-except
            exc_type, _, exc_tb = sys.exc_info()
            filename, linenum, _, _ = traceback.extract_tb(exc_tb)[-1]
            exc_details = (
                f"filename: {filename}, "
                f"line number: {linenum}, "
                f"type: {exc_type.__qualname__}, "
                f"message: {str(exc)}, "
                f"timestamp: {datetime.datetime.utcnow().isoformat()}"
            )
            if self.can_retry and self.task.retries < self.ingest_config.max_retries:
                self.db.update_task(
                    self.task.id,
                    status=T.TaskStatus.pending,
                    retries=self.task.retries + 1,
                )
                exc_type = exc.__class__.__name__
                log.debug(
                    f"Task failed {exc_details}, retrying later ({self.task.retries + 1})",
                    exc_info=True,
                )
            else:
                log.debug("Task failed", exc_info=True)
                self.db.update_task(self.task.id, status=T.TaskStatus.failed)
                self.add_task_error(exc_details, exc)
                self._on_error()
        finally:
            # always close the walker to cleanup tempfolder
            # TODO: cache scanned files and reuse during upload
            if self.walker:
                # only close the walker if we could open it
                self.walker.close()

    def add_task_error(self, exc_details: str, exc: Exception):
        """Add task error"""
        if isinstance(exc, fs_errors.CreateFailed):
            error = errors.InvalidSourcePath
            msg = str(exc)
        else:
            error = errors.BaseIngestError
            msg = exc_details
        self.db.add(
            T.Error(
                task_id=self.task.id,
                item_id=self.task.item_id,
                code=error.code,
                message=msg,
            )
        )

    def report_progress(
        self,
        completed: typing.Optional[int] = None,
        total: typing.Optional[int] = None,
        force: typing.Optional[bool] = False,
    ):
        """Report task progress"""
        last_time = self.last_report["time"]
        last_completed = self.last_report["completed"]
        last_total = self.last_report["total"]
        if completed:
            self.task.completed += completed
        if total:
            self.task.total += total
        if self.task.completed > self.task.total:
            self.task.total = self.task.completed
        if self.task.completed == last_completed and self.task.total == last_total:
            # no update needed
            return
        if not last_time or time.time() - last_time > 1 or force:
            self.db.update_task(
                self.task.id, completed=self.task.completed, total=self.task.total
            )
            self.last_report.update(
                {
                    "time": time.time(),
                    "completed": self.task.completed,
                    "total": self.task.total,
                }
            )

    @property
    def fw(self):
        """Get flywheel SDK client"""
        return utils.get_sdk_client(self.db.api_key)
