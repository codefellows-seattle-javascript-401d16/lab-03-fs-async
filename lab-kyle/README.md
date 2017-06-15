# Kyle Aardal - Lab 03

## print-files.js

### functions

printFiles(): Takes in an array of 3 file paths, reads the files, and returns the contents of the files in an array.

## index.js

logPrintFiles(): Gets a an array of file paths from process.argv. Calls the printFiles() function, passing in the array of file paths and a call back function. the call back function will either log the contents of the three files, or log an error if one is thrown.