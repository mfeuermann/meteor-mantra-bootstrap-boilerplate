import winston from 'winston';
require('winston-loggly-bulk');

const transLoggly = new (winston.transports.Loggly)({
  subdomain: 'eon.loggly.com',
  token: '084c497c-0e61-4e39-b0ac-27264d9e6c7c',
  tags: [ 'Winston-NodeJS' ],
  json: true,
  level: 'silly'
});

export default transLoggly;
