'use-strict';

const fs = require('fs');

module.exports = (paths, callback) => {
  if (!Array.isArray(paths))
    return callback(new Error('Paths must be an array.'));
  if (paths.length != 3)
    return callback(new Error('printFiles expects three paths.'));

  const fileContents = [];
  fs.readFile(paths[0], (err, data) => {
    if (err) {
      return callback(err);
    }
    fileContents.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
      if (err) {
        return callback(err);
      }
      fileContents.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
        if (err) {
          return callback(err);
        }
        fileContents.push(data.toString());
        callback(null, fileContents);
      });
    });
  });
};
