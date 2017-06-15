'use strict';

// Write tests that guarantee that the files are logged in order.
// You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
// hint read mocha docs

const printFiles = require('../lib/print-files.js');
const expect = require('expect');

describe('printFiles.js', () => {
  describe('prints files in order', () => {
    let oldArgv = [];
    before(() => {
      oldArgv = process.argv;
      process.argv = ['node', 'index', './to-read/first.js', './to-read/second.js', './to-read/third.js'];
    });
    after(() => {
      process.argv = oldArgv;
    });
    it('expect to be in order', (done) => {
      let proc = process.argv.slice(2);
      printFiles.readInOrder(proc, (err, data) => {
        if (err) {
          console.error(err);
          return err;
        }
        expect(data)
          .toEqual([ 'first file to read\n', 'second file to read\n', 'third file to read\n' ]);
        done();
      });
    });
  });
});
