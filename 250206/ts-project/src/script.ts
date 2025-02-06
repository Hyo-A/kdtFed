// let numA: 100 = 100;
// numA = 200; => 이거는 리터럴 타입이 100이기 때문에 오류

// let message: undefined = undefined;
// message = 1; => 이거는 재할당 오류

const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["Hellow", "World"];

let boolArr01: boolean[] = [true, false, true];
boolArr01 = [true, true];

const boolArr02: Array<boolean> = [true, false, true];
// 애는 제네릭 방법
const multiArr: (number | string)[] = [1, "hello"];
// 애는 합집합 방법
const doubleArr: (number | string)[][] = [[1, "2", 3], [4, 5], [6]];

const tup1: [number, number] = [1, 2];
// 얘는 튜플타입
// tup1 = [1, 2, 3];
let tup2: [number, string, boolean] = [1, "hello", true];
// tup2 = [2, 2];

let tup3: [number, number] = [1, 2];
tup3.push(1);
console.log(tup3);

const users: [string, number][] = [
  ["박세진", 0],
  ["강백호", 1],
  ["장효아", 2],
  ["헐랭이", 3],
  // [4, "물개"],
  // 얘는 튜플타입때문에 오류
];
