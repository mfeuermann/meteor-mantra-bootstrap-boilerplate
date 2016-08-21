import winston from 'winston';
require('winston-loggly-bulk');

const transLoggly = new (winston.transports.Loggly)({
  subdomain: '', // add loggly subdomain
  token: '', // add loggly access tokes
  tags: [ 'Winston-NodeJS' ],
  json: true,
  level: 'silly'
});


export default transLoggly;
