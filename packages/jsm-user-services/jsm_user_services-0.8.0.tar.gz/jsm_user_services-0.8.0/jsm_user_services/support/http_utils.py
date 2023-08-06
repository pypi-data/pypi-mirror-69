"""
HTTP utils module
"""
import functools
import logging
from contextlib import contextmanager
from typing import Any
from typing import Generator

from django.conf import settings
from requests import Response
from requests import Session
from requests.adapters import HTTPAdapter
from urllib3 import Retry

JSM_USER_SERVICE_HTTP_TIMEOUT = int(getattr(settings, "JSM_USER_SERVICE_HTTP_TIMEOUT", 30))


def _log_response(response: Response, *args: Any, **kwargs: Any) -> None:
    logging.debug("Request to %s returned status code %d", response.url, response.status_code)


def _check_for_errors(response: Response, *args: Any, **kwargs: Any) -> None:
    response.raise_for_status()


@contextmanager
def request(total: int = 3, backoff_factor: float = 0.1, **kwargs: Any) -> Generator[Session, None, None]:
    """
    Generate a requests session that allows retries and raises HTTP errors (status code >= 400).
    Uses the same arguments as the class Retry from urllib3
    """
    session = Session()
    session.hooks.update(response=[_log_response, _check_for_errors])
    max_retries = Retry(total=total, backoff_factor=backoff_factor, **kwargs)
    adapter = HTTPAdapter(max_retries=max_retries)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    session.request = functools.partial(session.request, timeout=JSM_USER_SERVICE_HTTP_TIMEOUT)
    try:
        yield session
    finally:
        session.close()


def get_response_body(response: Response) -> Any:
    """
    Deserialize response
    """
    try:
        response_body = response.json()
    except ValueError:
        response_body = response.text
    return response_body
