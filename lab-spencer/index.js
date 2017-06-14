'use strict';

let printFiles = require('./lib/print-files.js');

let outputContents = module.exports = () => {
  printFiles(process.argv.slice(2), (err, data) => {
    if(err) {
      console.error(err);
      return err;
    }
    data.forEach(fileContent => {
      console.log(fileContent);
    });
  });
};

outputContents();
