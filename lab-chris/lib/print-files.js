'use strict';

const fs = require('fs');

module.exports = (callback) => {

  let pathArray = [];

  fs.readFile('./data/0.txt', (err, data) => {
    if(err)
      return console.error(err);
    pathArray.push(data.toString());

    fs.readFile('./data/1.txt', (err, data) => {
      if(err)
        return console.log(err);
      pathArray.push(data.toString());


      fs.readFile('./data/2.txt', (err, data) => {
        if(err)
          return console.log(err);
        pathArray.push(data.toString());
        callback(pathArray);
      });
    });
  });
};
