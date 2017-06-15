'use strict';

let arrayPaths = [process.argv[2],process.argv[3], process.argv[4]];
const printFiles = require ('./lib/print-files.js');

printFiles.readFile(arrayPaths, (err, data) => console.log(data));
