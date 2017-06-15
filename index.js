'use strict';

const print = require('./lib/print-files.js');

print(process.argv.splice(2), (err, data)=> {
  if(err)
    console.error(err);
  console.log(data);
});
