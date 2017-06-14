const fs = require('fs');

module.exports = (paths, cb) =>
  fs.readFile(paths[0], (err, data1) =>
    fs.readFile(paths[1], (err, data2) =>
      fs.readFile(paths[2], (err, data3) =>
        cb([data1, data2, data3].map(v => v.toString())))))
