'use strict';

const files = require('./lib/print-files.js');

let exportFiles = module.exports = () => {

  let results = files(process.argv.slice(2), (err, data) => {
    data.forEach((file) => {
      console.log(file);
    });
  });
  return results;
};

exportFiles();
