//TODO:  Write a description of your code in your readme

# lab-Derek

Package contains three test data files and two modules, index.js and print-files.js, intended as an exercise to test asynchronous callbacks.

## index.js

index.js consists of a single function, index.main, which calls pf.printFiles, passing in three file paths from the CLI. Run node index.js [file paths] from CLI to run. Any errors will be logged. If no errors exist, contents of files in question will be printed to the CLI.

## print-file.js

print-file.js consists of a single function, pf.printFile, which accepts an array of file paths and an anonymous callback function and returns an array of the contents of the files, in order of entry.
