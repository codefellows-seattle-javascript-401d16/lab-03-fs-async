'use strict';

const printFiles = require('./lib/print-files.js');

let logPrintFiles = module.exports = () => {
  let list = process.argv.slice(2);
  printFiles(list, (err, data) => {
    if(err) {
      console.log(err);
      return err;
    } else {
      let results = data.map(item => item.toString()).join(' ');
      console.log(results);
      return results;
    }
  });
};

logPrintFiles();