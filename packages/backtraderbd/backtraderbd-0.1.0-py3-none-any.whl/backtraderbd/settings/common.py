# -*- coding: utf-8 -*-
PROJECT_NAME = 'backtraderbd'

# log setting
LOG_DIR = '/logs/'
LOG_LEVEL = 'DEBUG'

# database setting
MONGO_HOST = 'localhost'
BD_STOCK_LIBNAME = 'bds_his_lib'
DAILY_STOCK_ALERT_LIBNAME = 'daily_stock_alert'
STRATEGY_PARAMS_LIBNAME = 'strategy_params'
STRATEGY_PARAMS_RSI_SYMBOL = 'rsi_trend'
STRATEGY_PARAMS_SMAC_SYMBOL = 'smac_trend'
STRATEGY_PARAMS_MACD_SYMBOL = 'macd_trend'
STRATEGY_PARAMS_EMAC_SYMBOL = 'emac_trend'
LZ4_N_PARALLEL = 8

# Global arguments
DEFAULT_CASH = 100000.0
COMMISSION_PER_TRANSACTION = 0.004
EXECUTION_TYPE = 'close'
PERIODIC_LOGGING = False
TRANSACTION_LOGGING = True
BUY_PROP = 1
SELL_PROP = 1

# constant
HOLD_THRESHOLD = 1
LONG = 0
SHORT = 1
FLAT = 2