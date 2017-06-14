'use strict';

const fs = require('fs');

let printFiles = module.exports = (paths, callback) => {

  fs.readFile(paths[0], (err, data) => {
    if(err) 
      return console.error(err);
    callback(data);

    fs.readFile(paths[1], (err, data) => {
      if(err) 
        return console.log(err);
      callback(data);

      fs.readFile(paths[2], (err, data) => {
        if(err) 
          return console.log(err);
        callback(data);
      });
    });
  });
};