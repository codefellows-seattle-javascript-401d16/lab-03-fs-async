const print = require('./lib/print-files');

let args = process.argv.slice(2, 5);

if (args.length !== 3) {
  args = ['./file1.txt', './file2.txt', './file3.txt'];
}

print(args, (data, err) => {
  if (err) return console.log(err);
  data.forEach(v => console.log(v.toString()));
});
