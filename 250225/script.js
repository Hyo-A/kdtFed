/*
// 함수 메개변수 정의 -1
const hello = (name, message) => {
  console.log(`${name}님, ${message}`);
};

hello("슛돌이", "반갑습니다.");

// 함수 매개변수 정의 - 2
// 기본 매개변수 값 정의!! // message = "안녕하세요!"로 지정하여 값이 안들어올때에 실행되게끔..
const hello01 = (name, message = "안녕하세요!") => {
  console.log(`${name}님, ${message}`);
};

hello01("슛돌이");

// 함수 메개변수 정의 - 3
// const addNum = (a, b) => {
//   const result = a + b;
//   return console.log(result);
// };
// addNum(1, 2, 3, 4, 5);
// 이럴때에는? ^

// 나머지 매개변수 정의 => ...변수명
const addNum = (...numbers) => {
  console.log(numbers);
  // 콘솔을 찍어보면 몇개가 들어오든 배열이 되어버리는데
};
addNum(1, 2, 3, 4, 5);
*/

// 객체에서 심벌 키 사용
// 심벌 => 유일무이한 값을 생성 및 관리. 사용하고자 할 때 생성하는 자료구조 형태 중 하나

// 심벌을 생성하는 방법
const mySymbol1 = Symbol();
const mySymbol2 = Symbol("something");

// console.log(mySymbol1 === mySymbol2);
// console.log(mySymbol1, mySymbol2);

// 심벌을 생성하는 또 다른 방법 => 전역심볼 레지스트리에 저장하는 방법
// 아무리 유일무이한 심볼값이 장점이라고 하지만, 심볼간 값을 공유하거나 논리적으로 비교해야하는 상황이 발생되는 경우에는 전역심볼 레지스트리에 저장을 하는 것이 좋음!
// Symbol()은 고유한 값을 가지고 있는 심벌을 생성 후 반환하지만, Symbol.for()는 전역적으로 존재하는 global symbol table(*전역심볼 레지스트리)에 저장 및 데이터를 찾아오는 역할!

const s1 = Symbol.for("foo");
const s2 = Symbol.for("foo");
// foo => Token String

console.log(s1 === s2);

const token = Symbol.for("tokenString");
console.log(Symbol.keyFor(token) === "tokenString");
// keyFor()는 찾아오고자 하는 값을 인자값으로 넣는것 여기선 tokenString을 찾아올것이다

// 심볼을 생성하는 일반적인 방법
const obj01 = {};
const v = "my";

obj01[v] = "myProps";
obj01[123] = 123;
obj01["props" + 123] = false;

console.log(obj01);

const obj02 = {};

const mySymbol3 = Symbol("mySymbol");
const mySymbol4 = Symbol("mySymbol");

obj02[mySymbol3] = 123;
obj02[mySymbol4] = 456;

console.log(obj02);

// 사용자 회원가입 시, 동명이인의 사용자를 독립적인 개체로 구분지어서 관리하고자 할 때 Symbol()을 이용하는 방법
// 제주 : 이효리
// 서울 : 이효리

// Class 선언시, Symbol()을 이용하는 방법

const count = Symbol();
// count를 동일한 값으로 만들었어도 유일무이 심볼로 정의하였기 때문에 메소드함수로 다시 정의하여도 오류가 뜨지 않게된다

class Counter {
  constructor() {
    this[count] = 0;
  }

  add() {
    return this.count++;
  }

  get() {
    return this[count];
  }
}

const test1 = new Counter();
test1.add();
console.log(test1.get());

class BetterCounter extends Counter {
  count() {
    return console.log("test");
  }
}

const test2 = new BetterCounter();
console.log(test2);
console.log(test2.count());
