tom# lab-03-fs-readfile

## First:
I built the following files:
* README.md
* .gitignore
* .eslint
* .eslintrc
* .package.json
* Add a test and lint script to your package.json

## Second:
I built the module `lib/print-files` with a function that takes an array of three filepaths and a callback that had a function signature (paths, callback) => undefined

## Third:
I created a module `lib/print-files` with a function that takes an array of three filepaths and a callback. It had a function signature (paths, callback) => undefined that expected the callback function signature to be (err, data) => undefined and read the three files in order.

A successful pass =  an array of the contents of the files the data param of the callback `callback(null, data)`  
A failure =  pass and error in to the callback `callback(err)`.

I created an `index.js` that calls the function with three paths from process.argv and then logs the contents of the three files to the screen (console.log is in the index.js file).
