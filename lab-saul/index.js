'use strict';

const fileRead = require('./lib/print-files.js')

let main = module.exports = () => {
  let files = process.argv.slice(2);
  fileRead(files, (err, data) => {
    console.log(data);
  });
};
main();
