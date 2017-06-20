'use strict';


const pf = require('./print-files.js');



let printFiles = module.exports = () => {
  pf.print(process.argv.slice(2), (err, data) => {
    if (err)
      console.log(err);
    data.forEach(file => {
      console.log(file + '\n');
    });
  });
};

printFiles();
