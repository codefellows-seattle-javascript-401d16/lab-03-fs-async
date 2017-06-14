'use strict';

const fs = require('fs');

module.exports = (callback) => {
  let dataArray = [];
  let pathArray = ['./data/0.txt','./data/1.txt','./data/2.txt'];

  fs.readFile(pathArray[0], (err, data) => {
    if(err)
      return console.error(err);
    dataArray.push(data.toString());

    fs.readFile(pathArray[1], (err, data) => {
      if(err)
        return console.log(err);
      dataArray.push(data.toString());


      fs.readFile(pathArray[2], (err, data) => {
        if(err)
          return console.log(err);
        dataArray.push(data.toString());
        callback(dataArray);
      });
    });
  });
};
