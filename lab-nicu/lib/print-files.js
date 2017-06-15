'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  let result = [];
  fs.readFile(paths[0], (err, data) => {
    if (err)
      callback(err);
    else {
      result[0] = data.toString();
      fs.readFile(paths[1], (err, data) => {
        if (err)
          callback(err);
        else
          result[1]= data.toString(); {
          fs.readFile(paths[2], (err, data) => {
            if (err)
              callback(err);
            else{
              result[2]= data.toString();
              callback(null, result);
            } 
          });
        }
      });
    }
  });

};