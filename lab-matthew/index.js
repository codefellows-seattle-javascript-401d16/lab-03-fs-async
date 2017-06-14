'use strict';

// create an index.js that calls your function with three paths from process.argv and then logs the contents of the three files to the screen
// (your console.log should be in the index.js file not in your print-files function)

const printFiles = require('./lib/print-files.js');

let fileContents = module.exports = () => {
  let results = printFiles(process.argv.slice(2), (err, data) => {
    data.forEach((file) => {
      console.log(file);
    });
  });
  return results;
};

fileContents();

// let toUpper = module.exports = () => {
//   let list = fp.splice(process.argv, [2]);
//   list = fp.map(list, word => word.toUpperCase());
//
//   let result = list.join(' ');
//   console.log(result);
//   return result;
// };
//
// toUpper();
