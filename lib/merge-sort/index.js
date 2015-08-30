export default function mergeSort(collection) {
  if (collection.length <= 1) { return collection; }

  let [a, b] = split(collection).map(mergeSort);

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
    let greater = a[0] > b[0] ? b : a;
    merged.push(greater.shift());
  }

  [a,b].forEach(x => { while (x.length) { merged.push(x.shift()); } });

  return merged;
}
