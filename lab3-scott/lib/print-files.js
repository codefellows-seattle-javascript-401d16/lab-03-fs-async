'use strict';

const fs = require('fs');

module.exports = (files, callback) => {
  let results = [];
  fs.readFile(files[0], (err, data) => {
    (err) ? console.log(err) : results.push(data.toString());
    fs.readFile(files[1], (err, data) => {
      (err) ? console.log(err) : results.push(data.toString());
      fs.readFile(files[2], (err, data) => {
        (err) ? console.log(err) : results.push(data.toString());
        callback(results);
      });
    });
  });
};
