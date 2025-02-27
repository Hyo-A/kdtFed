const mem1 = ["HTML", "CSS"];
const mem2 = ["CSS", "JAVASCRIPT", "React"];
const mem3 = ["JAVASCRIPT", "TYPESCRIPT"];

const subjects = [...mem1, ...mem2, ...mem3];
// console.log(subjects);
const resultList = new Set();
subjects.forEach((subject) => {
  resultList.add(subject); // 요러면 겹치는 subject를 다 통합시켜서 깔끔정리
});
console.log(resultList);
const result = document.querySelector("#result");

result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`; // join을 줘야지 문자를 기준으로 문자만 뽑아와주게 한다
