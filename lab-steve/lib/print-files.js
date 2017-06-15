'use strict';

const fs = require('fs');

module.exports = function(paths, callback) {
  if(!Array.isArray(paths))
    return callback(new Error('paths must be an array'));
  if(paths.length != 3)
    return callback(new Error('printFiles expects three paths only'));
  let fileData = [];
  fs.readFile(paths[0], (err, data) => {
    if (err) {
      return callback(err);
    }
    else {
      fileData.push(data.toString());
    }
    fs.readFile(paths[1], (err, data) => {
      if (err) {
        return callback(err);
      }
      else {
        fileData.push(data.toString());
      }
      fs.readFile(paths[2], (err, data) => {
        if (err) {
          return callback(err);
        }
        else {
          fileData.push(data.toString());
        }
        return callback(null, fileData);
      });
    });
  });
};
