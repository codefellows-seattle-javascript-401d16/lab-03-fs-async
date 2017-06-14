'use strict';

let pf = require('./print-files.js');

let printContents = module.exports = () => {
  let results = pf(process.argv.slice(2), (err, data) => {
    data.forEach((file) => {
      console.log(file);
    });
    return results;
  });
};

printContents();
