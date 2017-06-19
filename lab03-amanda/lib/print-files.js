'use strict';

const fs = require('fs');

const printFiles = module.exports = {};

printFiles.readFile = function(arrayPaths, callback) {

  let dataArray = [];

  fs.readFile(arrayPaths[0],(err, data) => {
    console.log(arrayPaths);
    if(err)
      return callback(new Error('paths must be an array'));

    if(paths.length
      )
      dataArray.push(data.toString());

    fs.readFile(arrayPaths[1],(err, data) => {
      if(err)
        return callback(err);
      dataArray.push(data.toString());

      fs.readFile(arrayPaths[2],(err, data) => {
        if(err)
          return callback(err);
        dataArray.push(data.toString());

        callback(null, dataArray);
      });
    });
  });
};
