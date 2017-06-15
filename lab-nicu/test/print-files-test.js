'use strict';

const pf = require('../lib/print-files.js');
const expect = require('expect');
let oldArgs;
describe('testing index', () => {
  before(() => {
    oldArgs = process.argv;
    process.argv = ['node', 'index.js', './data/one.txt', './data/two.txt', './data/three.txt'];
  });

  after(() => {
    process.argv = oldArgs;
  });


  it(`should return return [ 'I'm number 1', 'I'm number 2', 'I'm number 3' ]`, (done) => {
    pf(process.argv.splice(2), (err, data) => {
      if (!err) {
        console.log(data);
        expect(data).toEqual(['I\'m number 1', 'I\'m number 2', 'I\'m number 3']);
        done();
      }
    });
  });
});