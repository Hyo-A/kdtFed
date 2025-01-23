/*내장함수*/
// 시간과 관련있는 자바스크립트의 내장함수 시리즈

/*
일정시간마다 반복하는 함수 = setInterval()

const hello = () => {
  console.log("hello world");
};
setInterval(hello, 3000);

setInterval(() => {
  console.log("hello world");
}, 3000);
3초에 한번씩 얘를 실행해라

밀리초 => 1초 1000ms
*/

/*
반복적인 실행을 멈추게 하는 함수 = clearInterval()

let timer = setInterval(() => {
  console.log("Hello World");
  counter++;

  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);
//2초에 한번씩 얘를 실행해소 timer 안에 넣어라

let counter = 0;
*/

/*
특정 시간 경과 후 무언가를 실행시키게 하는 함수 = setTimeout()

setTimeout(() => {
  console.log("안녕하세요!");
}, 3000);
*/
