'use strict';

let printFiles = require('../lib/print-files.js');
let expect = require('expect');

describe('File-Reader', () => {
  it('should return the contents of 1.txt, 2.js, 3.html in order', (done) => {
    let paths = ['./files-to-read/1.txt', './files-to-read/2.js', './files-to-read/3.html'];
    printFiles(paths, (err, data) => {
      if(err) {
        console.error(err);
        return err;
      }
      // this is the output of those three files in the right order
      expect(data).toEqual(['HEY THIS IS 1\ns\nd1as\ndsa\nd\n1\n 11111111111111111\n\n 111\n', '\'use strict\';\n\nconsole.log(\'This is 2!\');\nif(two) {\n  two();\n  console.error(\'This is not an error, it is 2!!!!!!!!!!\');\n}\n\nfunction two() {\n  console.log(\'2 yo\');\n}\n', '<html3>\n  <head3>\n    <title3>THis is 3</title3>\n  </head3>\n  <body3>\n    <p3>Hey this is 3</p>\n  </body3>\n</html>\n']);
      done();
    });
  });
});
