'use strict';

const fs = require('fs');

const getFiles = module.exports = {};

getFiles.readFile = (paths, callback) => {
  var outputData = [];
  paths.forEach( (file,index) => fs.readFile(file, 'utf8', (err, data) => {
    if(err) return callback(err);

    outputData[index] = data;

    if(index === paths.length-1){
      console.log(outputData);
      callback(null, outputData);
    }

  }));
};
