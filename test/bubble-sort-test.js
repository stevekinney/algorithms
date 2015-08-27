import assert from 'assert';
import bubbleSort from '../lib/bubble-sort';

describe('bubbleSort', () => {

  it('should exist', () => {
    assert(bubbleSort);
  });

  it('should accept numbers and return an array', () => {
    let sorted = bubbleSort([3, 2, 1]);
    assert(Array.isArray(sorted));
  });

  it('should sort a set of numbers', () => {
    let sorted = bubbleSort([3, 2, 1]);
    assert.deepEqual(sorted, [1, 2, 3]);
  });

});
