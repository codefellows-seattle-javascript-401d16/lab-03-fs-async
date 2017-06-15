'use strict';

let printFiles = require('../lib/print-files.js');

let seePrintFiles = () => {
  let files = process.argv.slice(2);
  printFiles(files, (data) => {
    if(err){
      console.log(err);
      return err;
    }else{
      console.log(data.toString());
      return data.toString();
    }
  });
};
