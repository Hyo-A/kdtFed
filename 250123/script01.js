/*함수선언식
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20));*/

//

/*익명함수 표현식
const num = function (a, b) {
  return a + b;
};
// 함수의 이름은 num이다
console.log(num(10, 20));*/

//

//소괄호 나오면 짜피 함수임 그래서
/*화살표 함수 표현식으로
const num01 = (a, b) => {
  return a + b;
};
console.log(num(10, 20));*/

//

//선언 & 호출도 귀차나 선언후에 즉시실행
/*즉시실행함수
(function (a, b) {
  let result = a + b;
  console.log(`함수 실행결과값 : ${result}`);
})(100, 200);*/

//

// const hi = () => "안녕하세요!";
// 얘는 또 표현식문이라고 하네?

// call(*호출)의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수(*콜백함수)

const btn = document.querySelector("button");

// btn.addEventListener("click", function display() {
//   alert("클릭했습니다");
// });

// btn.addEventListener("click", () => {
//   console.log("클릭!");
//   return () => {
//     console.log("클릭클릭!");
//     return () => {
//       console.log("클릭클릭클릭!");
//       return () => {
//         console.log("이제그만!");
//       };
//     };
//   };
// });

//

/*콜백함수 예제*/
// const showData = (name, age) => {
//   alert(`안녕하세요! ${name}님 나이가 ${age}살 이시군요!`);
// };

// const getData = (show) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요!");
//   show(userName, userAge);
// };

// getData(showData);

/*자바스크립트라는 언어에서 함수는 다이나믹해
자바스크립트의 함수 => 1급 시민

1. 변수에 함수를 담을 수 있음 : 원래는 전통적으로 함수 선언식으로만 함수를 호출함, but 익명함수가 등장하면서 함수를 보다 편하게 작성 가능!

2. 다른 함수에 매개변수로 등장 가능 : 콜백함수라는 스타일 형식을 창조해낼 수 있게됨

3. 다른 함수에 반환값(*return)으로 함수가 등장 할 수 있다
*/
