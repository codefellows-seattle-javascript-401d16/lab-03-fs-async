'use strict';


const fs = require('fs');


const that = module.exports = function (paths, callback){
  let hexArray = [];
  fs.readFile(paths[0], function(err,data){
    if(err) return callback(err);

    let firstBuffer = data.toString();
    hexArray.push(firstBuffer);

    fs.readFile(paths[1], function(err,data){
      if(err) return callback(err);

      let secondBuffer = data.toString();
      hexArray.push(secondBuffer);


      fs.readFile(paths[2], function(err,data){
        if(err) return callback(err);

        let thirdBuffer = data.toString();
        hexArray.push(thirdBuffer);
        console.log(hexArray);

        // call the callback with null, hexArray
        // callback(null, hexArray);
      });
    });
  });
};
