export default function mergeSort(collection) {
  if (collection.length <= 1) { return collection; }

  let [a, b] = split(collection);

  a = mergeSort(a);
  b = mergeSort(b);

  return merge(a, b);
}

export function split(collection) {
  let halfLength = collection.length / 2;
  let firstHalf = collection.slice(0, halfLength);
  let secondHalf = collection.slice(halfLength);

  return [firstHalf, secondHalf];
}

export function merge(a, b) {
  let merged = [];

  while (a.length && b.length) {
    if (a[0] > b[0]) {
      merged.push(b.shift());
    } else {
      merged.push(a.shift());
    }
  }

  while (a.length) {
    merged.push(a.shift());
  }

  while (b.length) {
    merged.push(b.shift());
  }

  return merged;
}
