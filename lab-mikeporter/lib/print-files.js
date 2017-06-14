'use strict';

// create module lib/print-files with a function that takes an array of three filepaths and a callback
// it should have a function signature (paths, callback) => undefined
// expect the callback function signature to be (err, data) => undefined
// read the three files in order
// on success pass an array of the contents of the files the data param of the callback callback(null, data)
// on failure pass and error in to the callback callback(err)

// A function signature (or type signature, or method signature) defines input and output of functions or methods.

const printFiles = module.exports = {};
const fs = require('fs');

printFiles.readInOrder = (paths, callback) => {
  var passedData = [];
  fs.readFile(paths[0], (err, data) => {
    if (err)
      return callback(err);
    passedData.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
      if (err)
        return callback(err);
      passedData.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
        if (err)
          return callback(err);
        passedData.push(data.toString());
        callback (null, passedData);
      });
    });
  });
};
