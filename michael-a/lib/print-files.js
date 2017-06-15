//this is a function to take paths, callback as undefined

//it should have a function signature (paths, callback) => undefined
// expect the callback function signature to be (err, data) => undefined
// read the three files in order
// on success pass an array of the contents of the files the data param of the callback callback(null, data)
// on failure pass and error in to the callback callback(err)


const fs = require('fs');

const readingFiles = module.exports = (paths, callback) = {
  let files = [];
  fs.readfFile('./file1.txt', (err,data) => {
    if (err)
      return console.log(err);
    console.log(data.toString());
    files.push(data.toString());

    fs.readfFile('./file2.txt', (err,data) => {
      if (err)
        return console.log(err);
      console.log(data.toString());
      files.push(data.toString());

      fs.readfFile('./file3.txt', (err,data) => {
        if (err)
          return console.log(err);
        console.log(data.toString());
      });
