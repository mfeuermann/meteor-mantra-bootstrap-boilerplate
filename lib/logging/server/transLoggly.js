import winston from 'winston';
require('winston-loggly-bulk');

const transLoggly = new (winston.transports.Loggly)({
  subdomain: '',
  token: '',
  tags: [ 'Winston-NodeJS' ],
  json: true,
  level: 'silly'
});

export default transLoggly;
