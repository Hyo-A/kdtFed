// Iterable 객체 & 반복문을 지배하는 자가 JS의 중급단계를 지배한다!

// 반복하게 하려고 할 때,
// 자료구조 & 알고리즘 커리큘럼
// 어떤 경우에 배열
// 문법
// 어떤 자료구조가 현 문제를 해결하는데 가장 효율적?
// 시간복잡도 => 현 자료구조 및 알고리즘이 해당 문제를 해결하는데 걸리는 시간
// 빅오 // 빅세타 // 빅오메가

// 기본형의 반복문
// for문 (~동안에)
// 반드시 자바스크립트 내 Iterable(순회하다?!) 객체 사용 사능

// const students = ["Park", "Kim", "Lee"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// 초기값을 기준으로 조건식이 참이면 반복문을 실행후 초기값을 증감시키고 다시 조건식에 넣는것을 반복

// for(초기값; 조건식; 증감문) {
//   반복문 실행
// }

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}

const reds = document.querySelectorAll(".red");
console.log(reds);
reds.forEach((red) => {
  red.style.color = "red";
});
const greens = document.querySelectorAll(".green");
greens.forEach((green) => {
  green.style.color = "green";
});
const aquas = document.querySelectorAll(".aqua");
aquas.forEach((aqua) => {
  aqua.style.color = "aqua";
});
