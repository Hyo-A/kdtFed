// let str = " ab cd ef ";
// console.log(str.trim());
// // trim()은? 앞뒤의 비효율적인 공백을 없애준다

let str = "Good Morning.";

// const arr = str.split(" ");
// console.log(arr[0]);
// split(" ")은 spacebar 공간을 기준으로 각각 아이템을 구성해서 새로운 배열을 만들어줌

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str.substring(5));
// substring(5)는 str 문자열의 index5부터 끝까지 찾아옴
// console.log(str.substring(0, 2));
// substring(0, 2)는 str 문자열의 index0부터 index2의 바로 앞까지 찾아옴

// console.log(str.slice(5));
// console.log(str.slice(0, 4));
// slice도 substring과 같은 역할을 한다!!
// slice도 substring의 차이는? slice는 첫번째 인자값으로 음수로 받을 수 있따!
console.log(str.slice(-6, 8));
// console.log(str.substring(-6, 12));
// substring에 음수값은 자동으로 0으로 변환된다!
