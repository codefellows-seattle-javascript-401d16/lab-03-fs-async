'use strict';

const fs = require('fs');

let print = module.exports = {};

print.files = (paths) => {
  paths.forEach( n => fs.readFile(n , (err, data) => {
    if(err)
      return console.error(err);
    console.log('data', data.toString());
  }));
};
