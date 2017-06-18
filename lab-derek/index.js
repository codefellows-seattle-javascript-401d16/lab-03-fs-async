'use strict';

const fs = require('fs');
const pf = require('./lib/print-files.js');
const index = module.exports = {};

index.main = () => {
  pf.printFiles(process.argv.slice(2), (err, data) => {
    if(err)
      console.log(err);
    data.forEach((item) => {
    console.log(item);
    });
  });
};

index.main();

main(process.argv.slice(2));
