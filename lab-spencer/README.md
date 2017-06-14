# Node JS Read and Print File

## print-files.js
- This will export a function that takes in the parameters paths (Array with paths to files, length===3) and the parameter callback (function that accepts err (Error if fs.readFile fails, null otherwise) and data (optional String which is the content of the files read. Required if no error exists)).
- To ensure they finish and print in the correct order, I nested the fs.readFile calls within the callbacks of the others so that they will only run when the previous one is finished and has pushed to the contents Array.

## index.js
- This creates (and exports for testing) a function outputContents which calls the function printFiles which we created in print-files.js. It will grab the three arguments following the path to node and the path to the file, for the first argument and a callback function to print the error or data to the console.
