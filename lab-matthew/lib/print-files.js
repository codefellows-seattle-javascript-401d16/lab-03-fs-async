'use strict';

const fs = require('fs');

// create module lib/print-files with a function that takes an array of three filepaths and a callback
// it should have a function signature (paths, callback) => undefined
// expect the callback function signature to be (err, data) => undefined
// read the three files in order
// on success pass an array of the contents of the files the data param of the callback callback(null, data)
// on failure pass and error in to the callback callback(err)
// create an index.js that calls your function with three paths from process.argv and then logs the contents of the three files to the screen
// (your console.log should be in the index.js file not in your print-files function)

module.exports = (paths, callback) => {

  let outputs = [];

  fs.readFile(paths[0], (err, data) => {
    if (err)
      return console.error(err);
    outputs.push(data.toString());

    fs.readFile(paths[1], (err, data) => {
      if (err)
        return console.error(err);
      outputs.push(data.toString());

      fs.readFile(paths[2], (err, data) => {
        if (err)
          return console.error(err);
        outputs.push(data.toString());
        callback(null, outputs);
      });
    });
  });
};
