'use strict';

let print = require('./lib/print-files.js');

process.argv = ['./lib/print-files.js','./lib/fp.js','index.js'];

console.log(print.files(process.argv));
