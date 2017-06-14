# FS Async

# First I created module print-files.js, containing a function that takes an array of three filepaths and callback. I ensured that the files were all read in the order of [0], [1], [2] by nesting fs.readFile's inside of eachother. If the function read the files successfully, it passed the contents of the file into an empty array, as the data param of the callback. If the function did not properly read the files, it threw an error.
\n
# I created an index.js to call the function I created in print-files.js, WITH 3 paths from process.argv, and then logs the contents of the three files to the screen. 
