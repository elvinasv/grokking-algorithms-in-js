/**
 * Binary search - search algorithm.
 * Big O:  O(log N)
 * Its input is sorted list of elements. If an element you’re looking for is in that list,
 * binary search returns the position where it’s located.
 * Otherwise, binary search returns null
 */

function binarySearch(list = [], item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = list[middle];

    if (guess === item) {
      return middle;
    } else if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
}

const sortedList = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 22, 23, 29, 31, 33, 37, 41, 43, 44, 47];

console.log(`Index: `, binarySearch(sortedList, 7));
// -> Index: 5

console.log(`Index: `, binarySearch(sortedList, 22));
// -> Index: 10

console.log(`Index: `, binarySearch(sortedList, 44));
// -> Index: 18
