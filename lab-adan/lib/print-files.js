'use strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  fs.readFile('./lib/file-1.txt', (err, data) => {
    if(err)
    return callback(err);
    console.log('hello', data.toString());

    fs.readFile('./lib/file-2.txt', (err, data) => {
      if(err)
      return callback(err);
      console.log('world', data.toString());

      fs.readFile('./lib/file-3.txt', (err, data) => {
        if(err)
        return callback(err);
        console.log('lolwut', data.toString());
      });
    });
  });
}
