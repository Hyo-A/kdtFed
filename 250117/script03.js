// 변수 / 자료형

// 자동 형태 변환
// const one = "20";
// const two = 25;
// const result = one + two;
// const result = one - two;
// console.log(result);

// 수동 형태 변환
// 숫자로의 형변환 : Number / parseInt / parseFloat
// const str = parseFloat("20");
// console.log(typeof str);

// const num99 = "17.8";

// console.log(Number(num99));
// // =17.8
// console.log(parseInt(num99));
// // =17 정수로 나옴
// console.log(parseFloat(num99));
// // =17.8 소숫점까지 나옴

console.log(Number(true));
console.log(parseInt(true));

const num77 = 77;
console.log(typeof num77.toString());

//num & undefined => 문자열
console.log(typeof String(num77));

//논리형 boolean으로 형변환!!
// true / false

console.log(Boolean("Hello!"));
console.log(Boolean(undefined));

// 연산자 & 제어문
