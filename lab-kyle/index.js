'use strict';

const printFiles = require('./lib/print-files.js');

let logPrintFiles = () => {
  let list = process.argv.slice(2);
  printFiles(list, (data) => {
    console.log(data.toString());
    return data.toString();
  });
};

logPrintFiles();