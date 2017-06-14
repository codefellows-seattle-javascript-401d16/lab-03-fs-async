# print-files

A module that, given three paths, returns the text contents of three files.

## Usage

`print-files(paths, callback)`

`paths`: an array of three paths to files, no more, no less. Three shall be the number of paths thou shalt provide, and the number of the paths shall be three. Four shalt thou not provide, neither provide thou two, excepting that thou then proceed to three. Five is right out.

`callback`: a callback function of signature `(error, data)`. Errors are provided as strings. Data is provided as an array of three strings, each containing the text contents of one file, in the order that the paths were passed.

Return value: `undefined`

## Command Line Interface

`node index.js path/to/file1 path/to/file2 path/to/file3`: logs the contents of each file, in order, without separators, to the console.
