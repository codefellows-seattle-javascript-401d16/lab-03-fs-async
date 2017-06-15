'use strict';

 let readFile = require('./lib/print-files.js');

  readFile(process.argv.slice(2), (err, data) => {
    if(err)
      return console.error(err);
    console.log(data);
  });
