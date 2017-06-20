'use strict';

const fs = require('fs');

const pf = module.exports = {};

pf.print = (paths, callback) => {
  let files = [];
  fs.readFile(paths[0], (err,data) => {
    if (err)
      return callback(err);
    files.push(data.toString());

    fs.readFile(paths[1], (err,data) => {
      if (err)
        return callback(err);
      files.push(data.toString());

      fs.readFile(paths[2], (err,data) => {
        if (err)
          return callback(err);
        files.push(data.toString());
        callback(null, files);
      });
    });
  });
};
