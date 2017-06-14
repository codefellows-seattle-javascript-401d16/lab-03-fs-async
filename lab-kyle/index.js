'use strict';

const printFiles = require('./lib/print-files.js');

let logPrintFiles = () => {
  let list = process.argv.slice(2);
  printFiles(list, (err, data) => {
    if(err) {
      console.log(err);
      return err;
    } else {
      console.log(data.toString());
      return data.toString();
    }
  });
};

logPrintFiles();