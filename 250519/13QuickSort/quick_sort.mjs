let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const divide = (arr, left, right) => {
  let pivot = arr[left];

  let leftStartIndex = left + 1;
  let rigthStartIndex = right;

  while (leftStartIndex <= rigthStartIndex) {
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    while (rigthStartIndex >= left + 1 && pivot <= arr[rigthStartIndex]) {
      rigthStartIndex--;
    }
    if (leftStartIndex <= rigthStartIndex) {
      swap(arr, leftStartIndex, rigthStartIndex);
    }
  }

  swap(arr, left, rigthStartIndex);
  return rigthStartIndex;
};

const quickSort = (arr, left, right) => {
  if (left <= right) {
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
};

console.log("=== 정렬 전 ===");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("=== 정렬 후 ===");
console.log(arr);
