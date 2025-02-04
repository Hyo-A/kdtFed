const A = parseInt(prompt("첫번째 100 이하의 자연수를 입력하세요"));
const B = parseInt(prompt("두번째 100 이하의 자연수를 입력하세요"));
const C = parseInt(prompt("세번째 100 이하의 자연수를 입력하세요"));

if (A > 100 || B > 100 || C > 100) {
  alert(`100 이하의 값만 입력해 주세요`);
} else if (A < B && A < C) {
  alert(`가장 작은 값은 ${A}입니다!`);
} else if (B < A && B < C) {
  alert(`가장 작은 값은 ${B}입니다!`);
} else if (C < A && C < B) {
  alert(`가장 작은 값은 ${C}입니다!`);
} else if (A == B || B == C || C == A) {
  alert(`값을 겹치지 않게 입력해 주세요`);
  location.reload;
} else {
  alert(`값을 다시 입력해 주세요`);
  location.reload;
}
