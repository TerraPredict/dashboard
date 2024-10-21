const winston = require('winston');
const chalk = require('chalk');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      const emoji = level === 'info' ? '✨' : level === 'warn' ? '⚠️' : '❌';
      const coloredLevel = level === 'info' 
        ? chalk.blue(level) 
        : level === 'warn' 
          ? chalk.yellow(level) 
          : chalk.red(level);
      return `${emoji} ${chalk.gray(timestamp)} ${coloredLevel}: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()]
});

module.exports = logger;