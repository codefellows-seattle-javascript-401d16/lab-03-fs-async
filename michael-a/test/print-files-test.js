'use strict';

let expect = require('expect');
let pf = require('../lib/print-files.js');

describe('testing print files...', (done) => {
  it('should resolve an array with ["boo","friggin","yeahhhh"]', () => {
    let paths = [
      `${__dirname}/lib/file1.txt`,
      `${__dirname}/lib/file2.txt`,
      `${__dirname}/lib/file3.txt`,
    ];
    pf(paths, (err, data) => {
      // this needs to include a done() function, in order to ensure these lines of codes
      expect(err).toEqual(null);
      expect(data).toEqual(['boo','friggin','yeahhhhhh']);
      done();
    });
  });
  it('should resolve an array with ["boo","friggin","yeahhhh"]', (done) => {
    let paths = [
      `${__dirname}/lib/fasdjfsdf1.txt`,
      `${__dirname}/lib/doesn't exist.txt`,
      `${__dirname}/lib/asdfsdfLSdhgl.txt`,
    ];
    pf(paths, (err, data) => {
      // this needs to include a done() function, in order to ensure these lines of codes
      expect(err).toExist();
      expect(data).toNotEqual();
      done();
    });
  });
});
