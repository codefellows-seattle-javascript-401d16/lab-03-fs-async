'use strict';

let printFiles = require('./lib/print-files.js');

let outputContents = module.exports = () => {
  printFiles(process.argv.slice(2), (err, data) => {
    if(err)
      return console.error(err);
    data.forEach(fileContent => {
      console.log(fileContent);
    });
  });
};

outputContents();
