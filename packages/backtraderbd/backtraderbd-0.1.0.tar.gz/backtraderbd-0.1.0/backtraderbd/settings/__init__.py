# -*- coding: utf-8 -*-
import os
import logging

from backtraderbd.settings import dev
from backtraderbd.settings import test
from backtraderbd.settings import prod


__all_ = ['settings']


settings = None

if os.environ.get('DEPLOY_ENV') == 'dev':
    settings = dev
elif os.environ.get('DEPLOY_ENV') == 'test':
    settings = test
elif os.environ.get('DEPLOY_ENV') == 'prod':
    settings = prod
else:
    # raise Exception('You must set the environment variable: `DEPLOY_ENV`'
    #                 'to one of ["dev", "test", "prod"]')

    log_format = '%(name)s:%(lineno)d %(levelname)s: %(message)s'
    logging.basicConfig(format=log_format)
    logger = logging.getLogger(__name__)
    logger.warning(
        'Do not set the environment variable: `DEPLOY_ENV`, '
        'using the default value: `dev`.'
    )
    settings = dev
