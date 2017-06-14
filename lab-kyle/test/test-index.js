'use strict';

const expect = require('expect');
const index = require('../index.js');

let originalArgv;

describe('test logPrintFiles', () => {
  before(() => {
    originalArgv = process.argv;
    process.argv = ['node', 'index.js', './first.txt', './second.txt', './third.txt'];
  });

  it('should return first file. second file. third file.', () => {
    expect(index()).toEqual('something');
  });

  after(() => process.argv = originalArgv);
});