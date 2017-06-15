'use strict';

const fs = require('fs');

module.exports = function(paths) {
  // console.log('File paths: ' + paths);
  var fileData = [];
  fs.readFile(paths[0], (err, data) => {
    if (err) {
      // console.log(err);
      fileData.push(err);
    }
    else {
      // console.log(data.toString());
      fileData.push(data.toString());
    }
    fs.readFile(paths[0], (err, data) => {
      if (err) {
        // console.log(err);
        fileData.push(err);
      }
      else {
        // console.log(data.toString());
        fileData.push(data.toString());
      }
      fs.readFile(paths[0], (err, data) => {
        if (err) {
          // console.log(err);
          fileData.push(err);
        }
        else {
          // console.log(data.toString());
          fileData.push(data.toString());
        }
        console.log(fileData);
        return fileData;
      });
    });
  });
};
