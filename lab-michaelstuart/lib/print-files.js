const fs = require('fs');

module.exports = (paths, cb) =>
  fs.readFile(paths[0], (err1, data1) =>
    fs.readFile(paths[1], (err2, data2) =>
      fs.readFile(paths[2], (err3, data3) =>
        cb([data1, data2, data3], (err1 || err2 || err3)))));
