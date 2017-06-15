const fs = require('fs');



const fp = module.exports = (paths, callback) => {
  let files = [];
  paths = ['./file1.txt','./file2.txt','./file3.txt'];
  fs.readFile(paths[0], (err,data) => {
    if (err)
      return console.log(err);
    console.log(data.toString());
    files.push(data.toString());

    fs.readFile(paths[1], (err,data) => {
      if (err)
        return console.log(err);
      console.log(data.toString());
      files.push(data.toString());

      fs.readFile(paths[2], (err,data) => {
        if (err)
          return console.log(err);
        console.log(data.toString());
        files.push(data.toString());
        callback(null, files);
      });
    });
  });
};

fp();
