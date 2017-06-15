'use strict';


const pf = require('.lib/print-files.js');

const printFiles = module.exports = () => {
  let files = pf(process.argv(2), (err, data) => {
    data.map= (file) => {
      console.log(file);
    };
  });
  return files;
};
