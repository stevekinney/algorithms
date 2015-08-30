import assert from 'assert';
import insertionSort from '../lib/insertion-sort';

it('should exist', () => {
  assert(insertionSort);
});

it('should accept numbers and return an array', () => {
  let sorted = insertionSort([3, 2, 1]);
  assert(Array.isArray(sorted));
});

it('should sort a set of numbers', () => {
  let sorted = insertionSort([3, 2, 1]);
  assert.deepEqual(sorted, [1, 2, 3]);
});
