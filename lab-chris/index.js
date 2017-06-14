'use strict';

const pf = require('./lib/print-files.js');

// pf((results) => console.log(results));

pf(process.argv.slice(2), (err, data) => {
  if(err)
    return console.log(err);
  console.log(data);
});
