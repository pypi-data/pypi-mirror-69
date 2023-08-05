import logging
import sys
from logging.handlers import TimedRotatingFileHandler

FORMATTER = logging.Formatter(
    "%(asctime)s - %(name)s — %(levelname)s — %(message)s")

LOG_FILE = "opytimark.log"


def get_console_handler():
    """Gets a console handler to handle logging into console.

    Returns:
        A handler to output information into console.

    """

    # Creates a stream handler for the logger
    console_handler = logging.StreamHandler(sys.stdout)

    # Sets its formatting
    console_handler.setFormatter(FORMATTER)

    return console_handler


def get_timed_file_handler():
    """Gets a timed file handler to handle logging into files.

    Returns:
        A handler to output information into timed files.

    """

    # Creates a timed rotating file handler for logger
    file_handler = TimedRotatingFileHandler(LOG_FILE, when='midnight')

    # Sets its formatting
    file_handler.setFormatter(FORMATTER)

    return file_handler


def get_logger(logger_name):
    """Gets a log and make it avaliable for further use.

    Args:
        logger_name (str): The name of the logger.

    Returns:
        A handler to output information into the log.

    """

    # Creates a logger object
    logger = logging.getLogger(logger_name)

    # Sets an log level
    logger.setLevel(logging.DEBUG)

    # Adds the desired handlers
    logger.addHandler(get_console_handler())
    logger.addHandler(get_timed_file_handler())

    # Do not propagate the logs
    logger.propagate = False

    return logger
