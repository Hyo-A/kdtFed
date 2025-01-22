// 구구단!
// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + a + "단" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(`${a} x ${b}=${a * b}`);
//     // document는 객체다 JS는 객체지향 언어이다
//     document.write("</br>");
//   }
// }

let num = 1;
let tag = "<table border=1>";

for (let i = 1; i <= 5; i++) {
  tag += "<tr>";
  for (let c = 1; c <= 5; c++) {
    tag += "<td>" + num + "</td>";
    num++;
  }
  tag += "</tr>";
}
tag += "</table>";

document.write(tag);
