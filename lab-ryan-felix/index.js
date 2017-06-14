const printFiles = require('./lib/print-files.js');

function main(paths, output) {
  printFiles(paths, (err, data) => {
    if(err) {
      output(err);
    }
    if(data) {
      output(data);
    }
  });
}

const cliPaths = process.argv.slice(2);
console.log(cliPaths);
main(cliPaths, console.log);

module.exports = main;
