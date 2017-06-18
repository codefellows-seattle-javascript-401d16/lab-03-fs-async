'use strict';

// TODO:  Write tests that guarantee that the files are logged in order.
// TODO:  You will also need to look up and implement async testing, making sure that you are not getting "false positives" (tests that are passing but shouldn't be).
//   TODO:  hint read mocha docs


const pf = require('../lib/print-files.js');
const expect = require('expect');

// describe('pf.printFiles', function() {
//   it("should return 'test1', 'test2', 'test3' in that order", function() {
//     let results = [];
//     let pfTest1 = pf.printFiles(['test1', 'test2', 'test3'], (err, data) => {
//       beforeEach(function(done){
//         results = data.toString();
//         expect(results).toEqual(data);
//         done();
//       });
//     return results;
//   });
//     expect(pfTest1).toEqual(['test1', 'test2', 'test3']);
//   });
// });

describe('testing printFiles', () =>{
  it('should resolve an array with ["one", "two", "three"]', (done) =>{
    let paths = [
      `${__dirname}/data/one.txt`,
      `${__dirname}/data/one.txt`,
      `${__dirname}/data/one.txt`,
    ];
    pf.printFiles(paths, (err, data) => {
      if (err) return done(err);
      expect(data).toEqual(['one', 'two', 'three']);
      done();
    });
  });
});
