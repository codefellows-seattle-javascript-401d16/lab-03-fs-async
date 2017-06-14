'use strict';

let pf = require('./lib/print-files.js');

let samplePaths = ['./data/1.txt', './data/2.txt', './data/3.txt'];

let printArray = module.exports = () => {
  pf(process.argv.slice(2), (err, data) => {
    if (err) {
      console.log(err);
      // return (err);
    }
    data.forEach(text => {
      console.log(text);
    });
  });

};

// pf();
printArray();
