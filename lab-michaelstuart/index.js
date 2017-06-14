const print = require('./lib/print-files')

let args = process.argv.slice(2);

// args = ['./file1.txt', './file2.txt', './file3.txt']

const callback = arr => arr.forEach(v => console.log(v));

print(args, callback);
