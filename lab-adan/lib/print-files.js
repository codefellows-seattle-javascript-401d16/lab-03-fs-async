'use strict';

const fs = require('fs');

module.exports = (path, callback) => {
  let results = [];
  fs.readFile(path[0], (err, data) => {
    if(err)
    return callback(err);
    results.push(data.toString());
    fs.readFile(path[1], (err, data) => {
      if(err)
      return callback(err);
      results.push(data.toString());
      fs.readFile(path[2], (err, data) => {
        if(err)
        return callback(err);
        results.push(data.toString());
        callback(results);
      });
    });
  });
};
