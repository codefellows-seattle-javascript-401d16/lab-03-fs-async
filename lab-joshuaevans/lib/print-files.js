'use strict';

let fs = require('fs');


module.exports = (path, callback) => {
  let arrayofOuts = [];
  fs.readFile(path[0], (err, data) => {
    if(err)
      return callback(err);
    arrayofOuts.push(data.toString());
    fs.readFile(path[1], (err, data) => {
      if(err)
        return callback(err);
      arrayofOuts.push(data.toString());
      fs.readFile(path[2], (err, data) => {
        if(err)
          return callback(err);
        arrayofOuts.push(data.toString());
        callback(null, arrayofOuts);
        console.log(arrayofOuts);
      });
    });
  });
};
