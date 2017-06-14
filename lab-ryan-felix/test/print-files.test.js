'use strict';

const expect = require('expect');
const printFiles = require('../lib/print-files.js');

describe('print-files module', () => {

  class TestTracker {
    constructor(maxTests, doneCallback) {
      this.maxTests = maxTests;
      this.numTests =  0;
      this.doneCallback = doneCallback;
    }

    didTest() {
      if(++this.numTests === this.maxTests) {
        this.doneCallback();
      }
    }

  }

  it('should have a function signature (paths, callback) => undefined', () => {
    expect(printFiles.length).toEqual(2);
    expect(printFiles(null, ()=>null)).toBe(undefined);
  });

  it('should invoke the callback with (err) when no paths are passed', (done) => {
    const callback = (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      done();
    };
    printFiles(undefined, callback);
  });

  it('should invoke the callback with (err) when the paths parameter is not an array of 3 strings', (done) => {

    const tracker = new TestTracker(6, done);

    const callback = (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      tracker.didTest();
    };

    printFiles(42, callback);
    printFiles('./no.such.file', callback);
    printFiles('./test/data/data1.txt', callback);
    printFiles(['./test/data/data1.txt'], callback);
    printFiles(['./test/data/data1.txt', './test/data/data2.txt'], callback);
    printFiles(['./test/data/data1.txt', false, './test/data/data3.txt'], callback);
  });

  it('should invoke the callback with (err) when paths are invalid', (done) => {

    const tracker = new TestTracker(3, done);

    const callback = (err, data) => {
      expect(err).toExist();
      expect(data).toNotExist();
      tracker.didTest();
    };

    printFiles(['./no.such.file', './no.such.file', './no.such.file'], callback);
    printFiles(['./test/data/data1.txt', './no.such.file', './no.such.file'], callback);
    printFiles(['./test/data/data1.txt', './test/data/data2.txt', './no.such.file'], callback);

  });

  it('should invoke the callback with (null, success) on success', (done) => {

    const callback = (err, data) => {
      expect(err).toBe(null);
      expect(data).toExist();
      done();
    };
    printFiles(['./test/data/data1.txt', './test/data/data2.txt', './test/data/data3.txt'], callback);
  });

  it('should return an array of the file contents, in the order the paths were passed, on success', (done) => {
    const callback = (err, data) => {
      expect(err).toBe(null);
      expect(data).toEqual(['data1\n', 'data2\n', 'data3\n']);
      done();
    };
    printFiles(['./test/data/data1.txt', './test/data/data2.txt', './test/data/data3.txt'], callback);
  });
});
