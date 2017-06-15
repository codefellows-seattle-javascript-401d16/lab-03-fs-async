'use strict';

const fs = require('fs');



module.exports = (paths, callback) => {
  let files = [];
  paths = ['./file1.txt','./file2.txt','./file3.txt'];
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
