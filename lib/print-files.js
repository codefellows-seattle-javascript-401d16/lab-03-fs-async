'use strict';

let fs = require('fs');

const printFiles = module.exports = (paths,callback) => {
  fs.readFile('/randomfile/randomfiles',[0],(err,data) => {
    if (err) throw err;
    callback(data);
  });
  fs.readFile('/randomfile/randomfiles',[1], (err,data) => {
    if (err) throw err;
    callback(data);
  });
  fs.readFile('randomfile/randomfiles', [2], (err,data) => {
    if (err) throw err;
    callback(data);
  });
};
