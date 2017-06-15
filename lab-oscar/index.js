'use strict';

const fs = require('./lib/print-files.js');

let printData = () => {
  fs.readFile(process.argv.slice(2), (err, data) => {
    (err) ? console.error(err) : console.log(data.join(''));
  });
};

printData();
