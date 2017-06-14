'use strict';

const fs = require('fs');

const files = ['./data.txt','./extra-data.txt','./more-data.txt'];

const printFiles = module.exports = (paths, callback) => {

  let contents = [];

  fs.readFile(paths[0],(err, data) => {
    if (err) throw err;
    contents.push(data.toString());

    fs.readFile(paths[1], (err,data) => {
      if (err) throw err;
      contents.push(data.toString());

      fs.readFile(paths[2], (err,data) => {
        if (err) throw err;
        contents.push(data.toString());
        callback(null, contents)
      });
    });
  });
};

printFiles(files);
