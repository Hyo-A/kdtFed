// 함수는? 선언 & 호출 필요

// function code() {
//   // 애는 code라는 이름의 함수를 선언한 함수선언식!
//   // {} 인에는 실행문이 들어감
//   console.log("오늘은 목요일 입니다");
// }

// code();
// 얘가 함수를 호출한거임

// const obj = {
//   title: "자바스크립트",
//   fnc: function () {
//     console.log("자바스크립트 짱");
//   },
// };

// obj.fnc();
// obj 안에 온점 표기법으로 fnc라는 키에 할당되어진 함수를 찾아옴
// 메서드이기도 함 / 메서드 : 방법론

// const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//     // 여기 이해안댐
//   }
//   // console.log(`1부터 10까지 더하면 ${sum}입니다.`);
//   return sum;
//   // sum이라는 변수를 반환함
//   // sum이라는 결과값을 밖에서도 쓰고싶다면? "반환" => return문
// }

// calcSum(10);
// console.log(`1부터 ${num}까지 더하면 ${calcSum(10)}입니다.`);
// ${calcSum(10)}은 보기에는 함수같아보이는데 위에서 sum을 변수로 반환했기 때문에 ${calcSum(10)} 안에 calcSun(10)은 변수임

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// const num = 5;
// 이녀석은 전역변수가 X script scope변수다
var num = 5;
// 이녀석은 전역변수다

console.log(`1부터 ${num}까지 더한 결과값은 ${calcSum(num)}입니다`);
// calcSum(10);

//

// 함수뒤의 ()에 매개체를 넣는거임
// 매개변수 => 선언부에서 써야함
// function sum(a, b) {
//   const result = a + b;
//   const resulta = a - b;
//   console.log(result);
//   console.log(resulta);
// }

// // 함수뒤의 ()에 인자깂(*인수)을 넣는거임
// sum(10, 20);

//

// function multiple(a, b, c = 10) {
//   // 여기서 c에서 값이 들어온다면 들어온 값으로 나올테고, 값이 들어오지 않는다면 10이 들어온다
//   // 이것은 기본매개변수라 부른다
//   return a + b + c;
// }

// console.log(multiple(2, 4, 8));
// // 얘는 14
// console.log(multiple(2, 4));
// // 얘는 NaN

//

// Scope = 범위
// 전역 스코프 = global scope

/*전역 스코프 사용사례1
var hi = "hello";

function greeting() {
  console.log(hi);
}
greeting();*/

/*전역 스코프 사용사례2
var hi = "hello";
console.log(hi);

function greeting() {
  hi = "bye";
  console.log(hi);
}
greeting();*/

/*전역 스코프 사용사례3(*위험)
function greeting() {
  hi = "hello";
}
greeting();
{
  console.log(hi);
}*/

// var를 사용하거나, 혹은 어떤 키워드도 존재하지 않는 경우 전역에서 사용가능한 변수가 된다 => 함수 내부에서도 어디에서도 사용 가능!

//

/*블록스코프
const factor = 5;

function calc() {
  return num * factor;
}

const num = 10;
let result = calc();
console.log(`result : ${result}`);*/
