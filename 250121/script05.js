// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br/>");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br/>");
// }

/* 일반 for문 */
// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br/>");
//   }
//   document.write("<br/>");
// }

// for() 보다 forEach()를 많이 씀

const marvels = ["ironman", "hulk", "captin", "stranger"];

// for (let i = 0; i <= marvels.length; i++) {
//   console.log(marvels[i]);
// }

// 콜백 = call back 함수

marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});
