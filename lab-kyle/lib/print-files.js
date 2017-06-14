'use strict';

const fs = require('fs');

let printFiles = module.exports = (paths, callback) => {

  fs.readFile(paths[0], (err, data) => {
    callback(err, data);

    fs.readFile(paths[1], (err, data) => {
      callback(err, data);

      fs.readFile(paths[2], (err, data) => {
        callback(err, data);
      });
    });
  });
};