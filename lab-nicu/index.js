'use strict';

const pf = require('./lib/print-files.js');

const logFiles = module.exports = () => {
  pf(process.argv.slice(2), (err, data) => {
    if (!err) {
      console.log(data);
    }
  });
  
};
logFiles();