'use strict';

const fs = require('fs');

const pf = module.exports = {};

pf.printFiles = (paths, callback) => {
  if (!Array.isArray(paths)))
    new Error('paths must be an array');
  let results = [];
  fs.readFile(paths[0], (err, data) => {
      results.push(data.toString());
    fs.readFile(paths[1], (err, data) => {
        results.push(data.toString());
      fs.readFile(paths[2], (err, data) => {
          results.push(data.toString());
            callback(null, results);
      });
    });
  });
};
