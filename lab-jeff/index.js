'use strict';

let printFiles = require('./lib/print-files.js');

printFiles(process.argv.slice(2), (err, data) => {
  if(err)
    return console.error(err);
  console.log(data);
});
