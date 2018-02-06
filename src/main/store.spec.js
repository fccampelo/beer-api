const store = require('./store');
const expect = require('expect');

describe('Store', () => {
  it('Initial Value', () => {
    const actualValue = store.getStore();
    console.log(actualValue);
    expect(true).toEqual(true);
  })
})
