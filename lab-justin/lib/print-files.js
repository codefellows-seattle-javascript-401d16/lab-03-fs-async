'use strict';


const fs = require('fs');

module.exports = (paths, callback) => {

  let list = [];

  fs.readFile(paths[0], (err, data) => {
    if(err)
      return console.error(err);
    list.push(data.toString());

    fs.readFile(paths[1], (err, data) => {
      if(err)
        return console.error(err);
      list.push(data.toString());

      fs.readFile(paths[2], (err, data) => {
        if(err)
          return console.error(err);
        list.push(data.toString());
        callback(null, list);
      });
    });
  });

};
