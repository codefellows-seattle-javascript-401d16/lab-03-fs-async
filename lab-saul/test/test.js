'use strict';

//this is not working yet
const reader = require('../lib/print-files.js');
const expect = require('expect');

let filePaths =['../data/data.txt',`../data/data1.txt`,`../data/data2.txt`];
let bufferData = [];

bufferData = reader(filePaths);

describe('index.js', function(){
  describe('hexArray', function(){
    it('the zero index should be the same as the data from first data file', function(){
      expect(bufferData[0],'WHATHERE').equal(['this is data text number one\n' ]);
    });
  });
});
