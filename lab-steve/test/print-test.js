'use strict';

const expect = require('expect');
const printFiles = require('../lib/print-files.js');

describe('testing printFiles', () => {
  it('should resolve an array with ["one", "two", "three"]', (done) => {
    let paths = [
      './test/data/one.txt',
      './test/data/two.txt',
      './test/data/three.txt',
    ];
    printFiles(paths, (err, data) => {
      if (err) return done(err);
      expect(data).toEqual(['one\n', 'two\n', 'three\n']);
      done();
    });
  });
  it('should reject and error for one.txt', (done) => {
    let paths = [
      './test/data/notExist.txt',
      './test/data/two.txt',
      './test/data/three.txt',
    ];
    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    });
  });
  it('should reject and error for two.txt', (done) => {
    let paths = [
      './test/data/one.txt',
      './test/data/notExist.txt',
      './test/data/three.txt',
    ];
    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    });
  });
  it('should reject and error for three.txt', (done) => {
    let paths = [
      './test/data/one.txt',
      './test/data/two.txt',
      './test/data/notExist.txt',
    ];
    printFiles(paths, (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    });
  });
});
