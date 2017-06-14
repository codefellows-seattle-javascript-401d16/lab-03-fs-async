'use-strict';

const fs = require('fs');

module.exports = (path, callback) => {
  // const fileArray = ['file1', 'file2', 'file3'];
  const fileContents = [];
  fs.readFile(path[0], (err, data) => {
    if (err) {
      return callback(err);
    }
    fileContents.push(data.toString());
    fs.readFile(path[1], (err, data) => {
      if (err) {
        return callback(err);
      }
      fileContents.push(data.toString());
      fs.readFile(path[2], (err, data) => {
        if (err) {
          return callback(err);
        }
        fileContents.push(data.toString());
        callback(null, fileContents);
      });
    });
  });
};
