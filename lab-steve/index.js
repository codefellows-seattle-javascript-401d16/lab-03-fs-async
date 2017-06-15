'use strict';

const print = require('./lib/print-files.js');

var paths = process.argv.splice(2);

print(paths);
