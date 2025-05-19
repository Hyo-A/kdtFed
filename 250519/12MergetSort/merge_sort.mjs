let arr = [3, 5, 2, 4, 1, 7, 8, 6];

const merge = (arr, leftIndex, middleIndex, rightIndex) => {
  let tempArr = [];
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = middleIndex + 1;

  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);
  // fill이라는 메서드 함수는 이터러블한 객체에 값을 넣을건데
  // 1번 인자 어떤값을 넣을건지, 2번 인자값에 어디부터 3번 인자값에 어디까지 넣을건지 -1 이라네?

  let tempArrIndex = leftIndex;

  while (leftAreaIndex <= middleIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] < arr[rightAreaIndex]) {
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }
    tempArrIndex++;
  }

  if (leftAreaIndex > middleIndex) {
    for (let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for (let i = leftAreaIndex; i <= middleIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }

  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
};

const mergeSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let middleIndex = parseInt((leftIndex + rightIndex) / 2);
    mergeSort(arr, leftIndex, middleIndex);
    mergeSort(arr, middleIndex + 1, rightIndex);
    merge(arr, leftIndex, middleIndex, rightIndex);
  }
};

console.log("=== 정렬 전 ===");
console.log(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("=== 정렬 후 ===");
console.log(arr);
