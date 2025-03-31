// 타입 변수가 2개 필요한 경우?

// const swap = <T, O>(a: T, b: O): (T | O)[] => {
//   return [b, a];
// };

// const swapItem = swap("1", 2);
// const [a, b] = swap("1", 2);
// console.log(a, b);

// const returnFirstValue = <T>(data: T[]) => {
//   return data[0];
// };

// let num = returnFirstValue([0, 1, 2]);

// let str = returnFirstValue([1, "Hello", "World"]);

// const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
//   return data[0]; // 이 리턴값으 type만 갖고오고 싶어..
//   // [T, ...unknown[]]를 데이터의 타입으로 지정해버림 댐
// };

// let str = returnFirstValue([1, "Hello", "World"]);

const getLength = <T extends { length: number }>(data: T) => {
  return data.length;
  // length는 이터러블한 객체에만 사용 가능하니깐 data는 이터러블함
  // 오류! //generic은 이터러블할지 안할지 모름
};

getLength("Hello");
getLength([1, 2, 3]);
getLength({ length: 1 });

// getLength(null); // 오류!
// getLength(undefined); // 오류!
