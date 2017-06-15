'use strict';


const fs = require('fs');


const that = module.exports = function (paths, callback){
  let hexArray = [];
  fs.readFile(paths[0], function(err,data){
    if(err) throw err;

    let firstBuffer = data.toString('utf8', 0);
    hexArray.push(firstBuffer);

    fs.readFile(paths[1], function(err,data){
      if (err) throw err;

      let secondBuffer = data.toString('utf8', 0);
      hexArray.push(secondBuffer);


      fs.readFile(paths[2], function(err,data){
        if(err) return callback(err);

        let thirdBuffer = data.toString('utf8', 0);
        hexArray.push(thirdBuffer);
        console.log(hexArray);

        // call the callback with null, hexArray
        // callback(null, hexArray);
      });
    });
  });
};
