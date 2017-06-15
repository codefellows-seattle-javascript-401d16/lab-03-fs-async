'use strict';

const print = require('./lib/print-files.js');

let paths = process.argv.splice(2);

let main = module.exports = (paths, callback) => {
  print(paths, (err, data) => {
    if (err) {
      console.error(err);
    }
    let result = data.join('\n');
    console.log(result);
    if (callback) callback(null, result);
  });
};

main(paths);
