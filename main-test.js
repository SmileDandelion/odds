'use strict';
const fn = require('./main');

describe('printOddsSum', () => {
  const inputs = [1,2,3,4,5];

  it('should print correct text', () => {
    spyOn(console, 'log');

    fn.printOddsSum(inputs);

    const expectText = 35;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

  it('buildOdds should print correct text', () => {
    const inputs=[1,2,3,4,5];
    const expectText = [1,3,5];
    const testResult = fn.buildOdds(inputs);
    expect(testResult).toEqual(expectText);
  });
  it('buildSquare should print correct text', () => {

    const inputs=[1,3,5];
    const expectText = [1,9,25];
    const testResult = fn.buildSquare(inputs);
    expect(testResult).toEqual(expectText);
  });
  it('buildSum should print correct text', () => {

    const inputs=[1,9,25];
    const expectText = 35;
    const testResult = fn.buildSum(inputs);
    expect(testResult).toEqual(expectText);
  });
});
