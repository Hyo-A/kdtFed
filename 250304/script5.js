// /*
// https://jsonplaceholder.typicode.com/users
// 이름, 아이디, 이메일로 박스박스
// */

// const url = "https://jsonplaceholder.typicode.com/users";
// console.log(url);
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.send();

// const rederHtml = (contents) => {
//   const user = document.querySelector("#user");
//   contents.forEach((content) => {

//   });
// };

// xhr.addEventListener("readystatechange", () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const users = JSON.parse(xhr.responseText);
//     // console.log(user);
//     rederHtml(users);
//   }
// }); 여기까지 내가 쓴 답안

// 자바스크립트 프로그래밍 언어!!

// 객체지향 프로그래밍 언어 : 거의 대부분의 모든 자료를 객체구조로 생성해서 관리 & 운영

// 다중패러다임 언어 : 표현식문 & 실행문 방식의 모든 처리를 둘 다 겸용할 수 있기 때문에

// 싱글스레드 언어 : thread : 회차 // 차선 => 1차선을 가지고 있습니다. 차선이 1개다. 1개의 차선에서 만약 사고가 나거나, 신호로 인해서 정차중이야 => 뒤에서는 앞의 사고가 해결되거나 신호가 변경될때까지는 무기한 대기!!

// 비동기처리방식 & 싱글스레드 언어 모순성!!

// 자체적으로 멀티스레드의 성격을 갖도록 해주는 비동기적 함수를 가지고 있음!!
// setInterval(), setTimeout() & Callback함수 등

// 자바스크립트의 싱글스레드 성격을 여실히 보여주는 예시!!!

/*
const displayA = () => {
  console.log("A");
};

const displayB = () => {
  setTimeout(() => console.log("B"), 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB();
displayC();

// 이것은 싱글스레드 언어인 javascript의 순서를 위배한 코드를 만드는 코드임 A => C => B
// 멀티스레드 처럼 만들었다는거임

// 그렇다면 비동기방식으로 무언가를 처리할 수 있는 함수에는 무었이 존재할까?

1) Callback 함수 => 함수 내부에 또다른 함수를 사용 => 내부에 포함된 함수의 호출 타이밍을 외부함수가 관리를 하는 특징
2) Promise 객체
3) async 함수 & await 예약어


// Callback 함수

const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  callback();
  setTimeout(() => {
    console.log("B");
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
*/

const display = (result) => {
  console.log(`${result} 준비완료!`);
};

// order는 사용자로부터 어떤 커피메뉴를 주문했는지 "확인" 메세지 전달 > 3초 > 커피가 "준비완료" 메세지 전달
const order = (coffee, callback) => {
  console.log(`${coffee} 주문접수!`);
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

order("아메리카노", display);

// 자바스크립트에서 콜백함수를 사용할 수 있는 이유? : 함수가 1급 시민이기 때문에!
// 콜백지옥은 쓰지 말자
