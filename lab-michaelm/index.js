'use-strict';

const printFile = require('./lib/print-files.js');

printFile(process.argv.slice(2), (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(...data);
});
