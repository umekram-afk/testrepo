const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console()
    ]
});
module.exports = logger;
// src/utils/errorHandler.js
const logger = require('./logger');
const errorHandler = (err, req, res, next) => {
    logger.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
};
module.exports = errorHandler;