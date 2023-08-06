# Zepl Logging

This package let's you do logging just like a basic logging modeule but it is desiged specifically to work with zepl notebooks as those are containerized so all the logs are lost when the container is shut down.


## Installation

You can install the Real Python Feed Reader from [PyPI](https://pypi.org/project/zepl_logging/):

    pip install zepl_logging

The project is Suported with Python 3+

## How to use

    from zepl_logging import logging
    
    logger = logging.Logging()

    logger.base_config('your_zepl_token', notebook='notebook_name', organization='org_name')
    
    #now you can use this logger to log anything like 
    
    logger.info('Connected to Db!')
    logger.debug('This is a debug message!')

