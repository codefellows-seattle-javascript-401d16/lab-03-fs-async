'use strict';

let expect = require('expect');
let pf = require('../lib/print-files.js');

describe('testing print files...', (done) => {
  it('should resolve an array with boo\nfriggin\nyeahhhhhh', () => {
    let paths = [
      `${__dirname}/lib/file1.txt`,
      `${__dirname}/lib/file2.txt`,
      `${__dirname}/lib/file3.txt`,
    ];
    pf.print(paths, (err, data) => {
      // this needs to include a done() function, in order to ensure these lines of codes
      expect(err).toEqual(null);
      console.log(data);
      expect(data).toEqual('boo\nfriggin\nyeahhhhhh');
      done();
    });
  });
  it('should be throwing errors...', (done) => {
    let paths = [
      `${__dirname}/lib/fasdjfsdf1.txt`,
      `${__dirname}/lib/doesn'texist.txt`,
      `${__dirname}/lib/asdfsdfLSdhgl.txt`,
    ];
    pf.print(paths, (err, data) => {
      // this needs to include a done() function, in order to ensure these lines of codes
      if (err)
        console.log(err);
      expect(data).toEqual(undefined);
      done();
    });
  });
});
