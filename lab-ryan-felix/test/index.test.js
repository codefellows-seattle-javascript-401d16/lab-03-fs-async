const expect = require('expect');
const main = require('../index.js');

describe('main - index.js', () => {
  it('should log the files', (done) => {
    const logger = (input) => {
      expect(input).toEqual(['data1\n', 'data2\n', 'data3\n']);
      done();
    };

    main(['./test/data/data1.txt', './test/data/data2.txt', './test/data/data3.txt'], logger);
  });
});
