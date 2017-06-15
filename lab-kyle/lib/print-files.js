'use strict';

const fs = require('fs');

let printFiles = module.exports = (paths, callback) => {
  let results = [];

  fs.readFile(paths[0], (err, data) => {
    if (err)
      return callback(err);
    results.push(data);

    fs.readFile(paths[1], (err, data) => {
      if (err)
        return callback(err);
      results.push(data);

      fs.readFile(paths[2], (err, data) => {
        if (err)
          return callback(err);
        results.push(data);
        callback(null, results);
      });
    });
  });
};