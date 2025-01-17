// 변수 안에 담을 수 있는 값 ⇒ 자료형

// 1) 원시타입 = Primitice type
// number = 숫자
// string = 문자열
// boolean = 논리형
// > Template Literal = 변수와 문자열을 동시에 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어 놓은 문법
// undefined = 미정
// null = 유효하지 않은 값
// symbol = 유일무이한 값

// 2) 참조타입 = Reference type
// array = 배열
// function = 함수
// object = 객체
// regexp = 정규표형식
// Map = 맵 데이터
// Set = 셋 데이터

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);
// consold로 확인해봤을 때에 age 값은 문자임
console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";

// const result =
//   userName + "배우가 출연한 최근 영화는 " + movieTitle + " 입니다.";
const result = `${userName} 배우가 출연한 최근 영화는 ${movieTitle} 입니다.`;

console.log(result);

let hobby;
console.log(hobby);
// hobby에 값이 들어오지않은 undifined 상태

let weekend = null;
console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();

const memeber365 = {
  name: "Jack",
  [id]: "ezen",
};

console.log(memeber365);
// id로 넣은 ezen을 보자 중복되는 값이 생기더라도 symbol로 인해서 다른 데이터로 인식

// const arr = [1, 2, 3];
let arr = [1, 2, 3];
const strArr = ["park", "kin", "lee"];
const boolArr = [true, false];

console.log(arr);
console.log(typeof arr);
console.log(`${arr[0]}은 arr 배열의 ${arr.length}번째 값입니다.`);

arr[3] = 7;

console.log(arr);

console.log(`${arr[3]}은 arr 배열의 ${arr.length}번째 값입니다.`);

// 자바스크립트의 중급자 실력을 갖추는데 있어서 요구조건
// => iterable 객채 & 반복문을 누가 더 자유자재로 사용하는가?

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

console.log(frontendClass.tutor);
console.log(frontendClass["students"]);

frontendClass.attitude = "the Best";

console.log(frontendClass);

function hello() {
  console.log("hello world");
}

console.log(typeof hello);
