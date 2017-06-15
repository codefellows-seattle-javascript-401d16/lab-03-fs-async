'use strict';


const pf = require('./print-files.js');



let printFiles = module.exports = () => {
  let files = pf(process.argv.slice(2), (err, data) => {
    data.map = (file) => {
      console.log(file);
    };
  });
  console.log(files);
  let result = files.join(' ');
  console.log(result);
};


printFiles();
