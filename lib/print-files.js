'use strict';

const fs = require('fs');


module.exports = (data, callback) => {
  let dataArray = [];
  let pathArray = ['./file1.js', './file2.js', './file3.js'];
  fs.readFile(pathArray[0], (err, path) => {
    if(err) throw err;
    dataArray.push(path.toString());

    fs.readFile(pathArray[1], (err, path) => {
      if(err) throw err;
      dataArray.push(path.toString());

      fs.readFile(pathArray[2], (err, path) => {
        if(err) throw err;
        dataArray.push(path.toString());
        callback(null, dataArray);
      });
    });
  });
};
