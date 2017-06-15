'use strict';

let paths = [
  './test/data/one.txt',
  './test/data/two.txt',
  './test/data/three.txt',
];

const expect = require('expect');
const main = require('../lib/print-files.js');

describe('testing main', () => {
  it('should resolve an array with ["one", "two", "three"]', (done) => {
    main(paths, (err, data) => {
      if (err) return done(err);
      expect(data).toEqual(['one\n', 'two\n', 'three\n']);
      done();
    });
  });
});
