'use strict';

let expect = require('expect');
let pf = require('../lib/print-files.js');
let fs = require('fs');

describe('testing to see if the files are printing in order', () => {
  it('should print the first file', () => {
    let result = fs.readFile('../data/1.txt');
    expect(result).toEqual('this is the first file')
  });
  it('should print the second file', () => {
    expect()
  });
  it('should print the third file', () => {

  })
});
