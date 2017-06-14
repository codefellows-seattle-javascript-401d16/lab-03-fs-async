'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  // check for obvious error conditions
  if(!paths) {
    callback('print-files requires a paths parameter');
    return;
  }
  if(!(paths instanceof Array)) {
    callback('print-files requires an array as its first argument');
    return;
  }
  if(paths.length < 3) {
    callback('print-files requires an array of 3 elements as its first argument');
    return;
  }
  if(!paths.every(elem => typeof elem === 'string')) {
    callback('print-files requires each array element in its first argument to be a string');
    return;
  }
  if(!callback || typeof callback !== 'function') {
    callback('print-files requires a callback as its second argument');
    return;
  }

  // no obvious probelms yet, try to do work

  const returnArray = new Array(3);
  fs.readFile(paths[0], 'utf8', (err, data) => {
    if(err) {
      callback(err);
      return;
    }
    returnArray[0] = data;
    fs.readFile(paths[1], 'utf8', (err, data) => {
      if(err) {
        callback(err);
        return;
      }
      returnArray[1] = data;
      fs.readFile(paths[2], 'utf8', (err, data) => {
        if(err) {
          callback(err);
          return;
        }
        returnArray[2] = data;
        callback(null, returnArray);
        return;
      });
    });
  });
};
