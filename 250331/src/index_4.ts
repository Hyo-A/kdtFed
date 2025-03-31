// // const arr = [1, 2, 3];
// // const newArr = arr.map((it) => it * 2);

// const map = <T>(
//   arr: T[], // 1번> 어떤 배열이 들어온다
//   callback: (item: T) => T // 2번> 콜백함수가 들어옴
// ): T[] => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// const arr = [1, 2, 3];

// const arrN = map(arr, (it) => it * 2);
// console.log(arrN);

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
// 이거야말로 명령형 방식 => how
// 어떻게 간단하게 결과를 도출하지?

// 이제부터 forEach를 선언형 방식으로 바꾸어볼게 => what
const forEach = <T>(arr: T[], callback: (item: T) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};
//그냥 forEach를 어던 함수로 만들어버려
forEach(arr2, (item) => console.log(item));
