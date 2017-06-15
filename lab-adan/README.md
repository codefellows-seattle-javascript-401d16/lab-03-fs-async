##Description

1. created a module lib/print-files with a function that takes an array of three file paths and a callback.
2. On success, the function passes an array of the contents of the files. 
3. On failure pass an error into the callback callback.
4. created an index.js that calls my function with three paths from process.argv and then logs the contents of the three files to the screen.
