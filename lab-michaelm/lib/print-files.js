'use-strict';

const fs = require('fs');

const paths = ['./lib/file1','./lib/file2','./lib/file3'];

module.exports = (paths,callback) => {
  const fileContents = [];
  fs.readFile(paths[0], (err,data) => {
    if (err) {
      return callback(err);
    }
    fileContents.push(data.toString());
    fs.readFile(paths[1], (err,data) => {
      if (err) {
        return callback(err);
      }
      fileContents.push(data.toString());
      fs.readFile(paths[2], (err,data) => {
        if (err) {
          return callback(err);
        }
        fileContents.push(data.toString());
        console.log(fileContents);
        callback(null,fileContents);
        return fileContents;
      });
    });
  });
};
