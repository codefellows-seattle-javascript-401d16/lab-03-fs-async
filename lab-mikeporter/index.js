// create an index.js that calls your function with three paths from process.argv and then logs the contents of the three files to the screen
// (your console.log should be in the index.js file not in your print-files function)

'use strict';

const printFiles = require('./lib/print-files.js');

let filePaths = process.argv.slice(2);

let outputData = () => {
  printFiles.readInOrder(filePaths, (err, data) => {
    if (err)
      console.error(err);
    console.log(data.join(''));
  });
};

outputData();
