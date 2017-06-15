## Lab-Steve Lab-03 Documentation
  * index.js takes up to three, and only three file paths as CLI parameters and logs their contents from an array by passing the parameters as an array to a print function located in ./lib/print-files.js.
  * ./lib/print-files.js takes a 'paths' array, which is spliced from process.argv: three CLI file path arguments, as well as (err, data) as a callback parameter.
    * Fs.readFile requests are nested to be synchronous.
    * If an error is thrown, the callback is immediately invoked with the error.  The function in index.js then console.errors the error message.
    * The content of each file is pushed to an array, fileData.
    * Once the third file is read and pushed to the array, the array is passed into the callback and subsequently logged when returned as 'data' to the index.js function and console.logged.
  * Tests
   * Added test for ./lib/print-files.js, which checks for errors in three separate file paths and makes sure the returned array is in order.
   * Added test for index.js, which checks that sample file paths can be passed into the CLI and return the file contents in order.
  * Project passes esLint.
