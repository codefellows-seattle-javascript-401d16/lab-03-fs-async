'use strict';

const fs = require('fs');


module.exports = (callback) => {
  let dataArray = [];
  let pathArray = ['./index.js', './file1.js', './file2.js'];
  fs.readFile(pathArray[0], (err, path) => {
    if(err) throw err;
    dataArray.push(path.toString());

    fs.readFile(pathArray[1], (err, path) => {
      if(err) throw err;
      dataArray.push(path.toString());

      fs.readFile(pathArray[2], (err, path) => {
        if(err) throw err;
        dataArray.push(path.toString());
        callback(dataArray);
      });
    });
  });
};
