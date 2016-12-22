'use strict';

const bunyan = require('bunyan');
const obj = {};

obj.log = bunyan.createLogger({name: 'node-boilerplate'});

module.exports = obj;
