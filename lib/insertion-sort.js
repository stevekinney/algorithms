export default function insertionSort(collection) {
  for (let index in collection) {
    let currentValue = collection[index];
    let activeIndex = index;

    while (activeIndex > 0 && currentValue < collection[activeIndex - 1]) {
      collection[activeIndex] = collection[--activeIndex];
    }

    collection[activeIndex] = currentValue;
  }

  return collection;
}
