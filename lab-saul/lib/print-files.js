'use strict';

// const Buffer = require('buffer').Buffer;
const fs = require('fs');
const paths  = ['../data/data.txt', '../data/data1.txt', '../data/data2.txt'];

//module.exports =

const that = module.exports = function (paths){
  let hexArray = [];

  fs.readFile(paths[0], function(err,data){
    if(err) throw err;

    let firstBuffer = data.toString('utf8', 0);
    hexArray.push(firstBuffer);

    fs.readFile(paths[1], function(err,data){
      if(err) throw err;

      let secondBuffer = data.toString('utf8', 0);
      hexArray.push(secondBuffer);


      fs.readFile(paths[2], function(err,data){
        if(err) throw err;

        let thirdBuffer = data.toString('utf8', 0);
        hexArray.push(thirdBuffer);
        console.log(hexArray);
        return hexArray;
      });
    });
  });
};
