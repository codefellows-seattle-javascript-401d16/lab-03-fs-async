'use strict';

const fs = require('fs');

module.exports = function(paths, callback) {
  var fileData = [];
  fs.readFile(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      fileData.push(data.toString());
    }
    fs.readFile(paths[1], (err, data) => {
      if (err) {
        callback(err);
      }
      else {
        fileData.push(data.toString());
      }
      fs.readFile(paths[2], (err, data) => {
        if (err) {
          callback(err);
        }
        else {
          fileData.push(data.toString());
        }
        callback(null, fileData);
      });
    });
  });
};
