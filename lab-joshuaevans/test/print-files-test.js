'use strict';

let expect = require('expect');
let pf = require('../lib/print-files.js');
let fs = require('fs');
let samplePaths = ['../data/1.txt', '../data/2.txt', '../data/3.txt'];

describe('testing to see if the files are printing in order', () => {
  it('should print all files in order', () => {
    pf(samplePaths[0], data)
    expect(data).toEqual('this is the first file')
  });
//   it('should print the second file', () => {
//     expect()
//   });
//   it('should print the third file', () => {
//
//   })
});
