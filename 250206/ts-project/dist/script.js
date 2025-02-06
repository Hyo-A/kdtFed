// let numA: 100 = 100;
// numA = 200; => 이거는 리터럴 타입이 100이기 때문에 오류
// let message: undefined = undefined;
// message = 1; => 이거는 재할당 오류
const numArr = [1, 2, 3];
const strArr = ["Hellow", "World"];
let boolArr01 = [true, false, true];
boolArr01 = [true, true];
const boolArr02 = [true, false, true];
// 애는 제네릭 방법
const multiArr = [1, "hello"];
// 애는 합집합 방법
const doubleArr = [[1, "2", 3], [4, 5], [6]];
const tup1 = [1, 2];
// 얘는 튜플타입
// tup1 = [1, 2, 3];
let tup2 = [1, "hello", true];
// tup2 = [2, 2];
let tup3 = [1, 2];
tup3.push(1);
console.log(tup3);
export {};
