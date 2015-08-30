import assert from 'assert';
import mergeSort from '../lib/merge-sort';
import { split } from '../lib/merge-sort';

describe('mergeSort', () => {

  it('should return an array', () => {
    assert(Array.isArray(mergeSort([1])));
  });

  it('should return the original array if given 0 or 1 elements', () => {
    assert.deepEqual([], mergeSort([]));
    assert.deepEqual([1], mergeSort([1]));
  });

  it('should sort an even number of elements', () => {
    let sorted = mergeSort([8,7,6,5,4,3,2,1]);
    assert(Array.isArray(sorted));
    assert.deepEqual([1,2,3,4,5,6,7,8], sorted);
  });

  it('should sort an odd number of elements', () => {
    let sorted = mergeSort([7,6,5,4,3,2,1]);
    assert.deepEqual([1,2,3,4,5,6,7], sorted);
  });

  it('should sort an array with duplicate numbers', () => {
    let sorted = mergeSort([3,2,2,1]);
    assert.deepEqual([1,2,2,3], sorted);
  });

});

describe('split', () => {

  it('should return two arrays', () => {
    let splitCollection = split([1,2,3,4]);
    assert.deepEqual(splitCollection, [[1,2], [3,4]]);
  });

});
