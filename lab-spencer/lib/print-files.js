'use strict';

let fs = require('fs');

module.exports = (paths, callback) => {
  let outputs = [];
  fs.readFile(paths[0], (err, data) => {
    if(err)
      return callback(err);
    outputs.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
      if(err)
        return callback(err);
      outputs.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
        if(err)
          return callback(err);
        outputs.push(data.toString());
        callback(null, outputs);
      });
    });
  });
};
