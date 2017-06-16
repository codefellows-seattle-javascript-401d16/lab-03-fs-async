Documentation

Write a description of your code in your readme

printFiles.readInOrder takes two arguments - an array of paths and a callback. It works asychronously to read 3 file paths passed in the process.argv array and passes their content in a callback as an array of strings.

index.js in outputData calls printFiles.readInOrder with the process.argv arguments and an anonymous function. The anonymous function takes err and data as parameters. When printFiles.readInOrder passes an err or data, outputData receives them in this anonymous function and console.logs the error or joins the data from the array and console.logs that. Lastly, index.js calls outputData.

print-files-test.js tests print-files.js. It has a before and after because I'm writing over process.argv and it's a global, so I would like to revert it to it's original state. It creates a new process.argv, slices it and assigns that value to a variable proc. It then calls printFiles.readInOrder with our new variable proc and an anonymous function which console.logs an error on reject, and on success does an expect comparison of the data vs our expected outcome!
