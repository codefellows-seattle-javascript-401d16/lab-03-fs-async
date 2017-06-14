'use strict';

// create module lib/print-files with a function that takes an array of three filepaths and a callback
// it should have a function signature (paths, callback) => undefined
// expect the callback function signature to be (err, data) => undefined
// read the three files in order
// on success pass an array of the contents of the files the data param of the callback callback(null, data)
// on failure pass and error in to the callback callback(err)

const fs = require('fs');
let arrayPaths = ['./file1.html','./file2.html', './file3.html'];

const printFiles = module.exports = {};
printFiles.readFile = function() {
  fs.readFile(arrayPaths[0],(err, data) => {
    if(err)
      throw(err);
    console.log(data);

    fs.readFile(arrayPaths[1],(err, data) => {
      if(err)
        throw(err);
      console.log(data);

      fs.readFile(arrayPaths[3],(err, data) => {
        if(err)
          throw(err);
        console.log(data);

      });
    });
  });
};

printFiles.readFile();
