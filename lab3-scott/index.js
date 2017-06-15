'use strict';

const printFiles = require('./lib/print-files.js');

let filePaths = process.argv.splice(2);

// paths inputted in CLI that process.argv puts in to the printFileContent()
// ['./data/set1.txt', './data/set2.txt', './data/set3.txt'];

let printFileContent = () => {
  printFiles(filePaths, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
};
printFileContent();
