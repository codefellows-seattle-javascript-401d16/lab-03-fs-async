'use strict';

const fs = require('fs');

module.exports = (callback) => {

  let filesArray = ['./data/file1.txt', './data/file2.txt', './data/file3.txt'];
  let filesData = [];

  fs.readFile(filesArray[0], (err, data) => {
    if(err)
      return console.error(err);
    filesData.push(data.toString());

    fs.readFile(filesArray[1], (err, data) => {
      if(err)
        return console.error(err);
      filesData.push(data.toString());

      fs.readFile(filesArray[2], (err,data) => {
        if(err)
          return console.error(err);
        filesData.push(data.toString());
        callback(filesData);
      });
    });
  });
};
