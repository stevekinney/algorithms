export default function bubbleSort(numbers, currentIndex = 0) {

  if (currentIndex > numbers.length) { return numbers; }

  let nextIndex = currentIndex + 1;
  let currentNumber = numbers[currentIndex];
  let nextNumber = numbers[nextIndex];

  if (currentNumber > nextNumber) {
    numbers[currentIndex] = nextNumber;
    numbers[nextIndex] = currentNumber;
    return bubbleSort(numbers, 0);
  }

  return bubbleSort(numbers, nextIndex);
}
