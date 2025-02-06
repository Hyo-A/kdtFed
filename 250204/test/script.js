// // //완벽한 과제 결과물을 만들고 싶어라

// 사용자에게 어떤 숫자를 세번을 받을 예정입니다
// form태그 변수값으로 정의하여 가져올거임

// 숫자가 아닌숫자를 받으면 = 값을 다시 입력해 주세요 alert
// if (!isNaN(number)) {}

// 100 이상이나 1 이하면 = 100 이하의 자연수를 입력하세요 alert
// if (number > 100 || number < 1) {
//   alert(`100 이하의 자연수를 입력하세요 `);
// }

// 세개의 숫자중 겹치는 숫자가 있으면 = 값을 겹치지 않게 넣어주세요 alert
const n = 100;

number.forEach(() => {
  if (number < n) {
    n = number;
    if ((number = n)) {
      alert(`값을 겹치지 않게 넣어주세요`);
    }
  }
});

userNum.forEach((num) => {
  if (num.value < 100 && num.value >= 0) {
    numArr.push(num.value);
  }
});
numArr.forEach((min) => {
  if (min < n) {
    n = min;
  }
});

// 세개의 숫자중 가장 작은 숫자를 판단 후 = 가장 작은값은 ${min}입니다 alert

//

const number = parseInt(prompt("자연수를 입력하세요!"));
let isPrime;

if (!isNaN(number)) {
  //숫자가 아니지 아니어야 참이다 = 숫자여야 참이다
  if (number === 0 || number === 1) {
    alert(`${number}(은)는 소수도 합성수도 아닙니다`);
    location.reload();
  } else if (number === 2) {
    isPrime = true;
    alert(`${number}는 소수 입니다!`);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
  }
} else {
  alert("숫자가 아닙니다!");
  location.reload();
}

if (isPrime) {
  alert(`${number}는 소수입니다!`);
} else {
  alert(`${number}는 소수가 아닙니다!`);
}

//

// const A = parseInt(prompt("첫번째 100 이하의 자연수를 입력하세요"));
// const B = parseInt(prompt("두번째 100 이하의 자연수를 입력하세요"));
// const C = parseInt(prompt("세번째 100 이하의 자연수를 입력하세요"));

// if (A > 100 || B > 100 || C > 100) {
//   alert(`100 이하의 값만 입력해 주세요`);
// } else if (A < B && A < C) {
//   alert(`가장 작은 값은 ${A}입니다!`);
// } else if (B < A && B < C) {
//   alert(`가장 작은 값은 ${B}입니다!`);
// } else if (C < A && C < B) {
//   alert(`가장 작은 값은 ${C}입니다!`);
// } else if (A == B || B == C || C == A) {
//   alert(`값을 겹치지 않게 입력해 주세요`);
//   location.reload;
// } else {
//   alert(`값을 다시 입력해 주세요`);
//   location.reload;
// }

//

// const form = document.querySelector("form");
// const userNum = document.querySelectorAll(".number");
// let numArr = [];
// let n = 100;
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   userNum.forEach((num) => {
//     if (num.value < 100 && num.value >= 0) {
//       numArr.push(num.value);
//     }
//   });
//   numArr.forEach((min) => {
//     if (min < n) {
//       n = min;
//     }
//   });
//   alert(`${n}`);
// });
