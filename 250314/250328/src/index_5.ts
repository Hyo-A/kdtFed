const func = (a: number, b: number): number => {
  // 이 함수는 두개의 숫자인 인자값을 받아서 숫자로 결과가 나오는 함수야
  return a + b;
};
// 위아래로 도찐개찐 함수
const func1 = (c: number, d: number): number => c + d;

// 매개변수 => 선택적 매개변수 // 값이 있을수도 있고 없을수도 있는 함수
// 항상 타입가드를 생각해

const introduce = (name: string, tall?: number) => {
  // console.log(`tall:${tall + 10}`); // 이건 선택적 프로퍼티이기때문에 오류 // 타입가드 필요 // if문으로 아래에 만듦 // 그리고 선택적 매개변수는 꼭!!!! 뒤에 와야한다!!!!
  if (typeof tall === "number") {
    console.log(`tall:${tall + 10}`);
  }
};

introduce("효아", 158);
introduce("효아");

const getSum1 = (...rest: number[]) => {
  // rest 안에 몇개가 들어올지는 모르는일 그리고 rest는 숫자이자 배열임
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
};

console.log(getSum1(1, 2, 3));
console.log(getSum1(1, 2, 3, 4));
console.log(getSum1(1, 2));

const getSum2 = (...rest: [number, number, number]) => {
  // rest 안에 몇개가 들어올지는 모르는일 그리고 rest는 숫자이자 배열임
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
};

console.log(getSum2(1, 2, 3));
// console.log(getSum2(1, 2, 3, 4)); // 이거는 number를 세개 쓴다고 확정해놧으므로 오류
// console.log(getSum2(1, 2)); // 이거는 number를 세개 쓴다고 확정해놧으므로 오류

// 타입별칭
type Add = (a: number, b: number) => number;
type Call = { (a: number, b: number): number }; // 얘를 객체안에 넣음

const add: Call = (a, b) => a + b;
const sub: Add = (a, b) => a - b;
const devide: Add = (a, b) => a / b;

// const test: Add = (a, b) => a * b;

const test: (a: number, b: number) => number = (a, b) => a * b;
