//나의 리트라이!!!

const myYear = document.querySelector("#year");
const myMonth = document.querySelector("#month");
const myDate = document.querySelector("#date");

const btn = document.querySelector("#btn");

let now = new Date();
let nowYear = now.getFullYear();
let nowMonth = now.getMonth() + 1;
let nowDate = now.getDate();

const current = document.querySelector("#current");
current.innerText = `${nowYear}년 ${nowMonth}월 ${nowDate}일 현재😊`;

let result = (e) => {
  e.preventDefault();
  // 1000ms = 1s // 1000 * 60 = 1m // 1000 * 60 * 60 = 1h // 1000 * 60 * 60 * 24 = 1day // 1000 * 60 * 60 * 24 * 365 = 1year

  let myBirth = new Date(myYear.value, myMonth.value, myDate.value);

  let passed = now - myBirth;
};
btn.addEventListener("click", result);

//______________________________________

// const birthYear = document.querySelector("#year");
// const birthMonth = document.querySelector("#month");
// const birthDate = document.querySelector("#date");

// const btn = document.querySelector("#btn");

// const current = document.querySelector("#current");
// const resultDays = document.querySelector("#days");
// const resultHours = document.querySelector("#hours");
// const resultAge = document.querySelector("#age");

// const today = new Date();

// current.innerText = `${today.getFullYear()}년 ${
//   today.getMonth() + 1
// }월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재😚🤍🎀`;

// btn.addEventListener("click", (e) => {
//   e.preventDefault;

//   const birthDay = new Date(
//     birthYear.value,
//     birthMonth.value + 1,
//     birthDate.value
//   );

//   const passed = today.getTime() - birthDay.getTime();
//   const passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
//   const passedHours = Math.floor(passed / (60 * 60 * 1000));
//   const passedAges = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;

//   resultDays.innerText = `날짜로는 ${passedDays} 일이 흐르고,`;
//   resultHours.innerText = `시간으로는 ${passedHours} 시간이 흐르고,`;
//   resultAge.innerText = `제 나이는 ${passedAges} 세 입니다`;
// });
