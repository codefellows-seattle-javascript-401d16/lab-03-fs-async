'use-strict';

const print = require('./lib/print-files.js');

print(process.argv.slice(2), (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data.toString());
});
