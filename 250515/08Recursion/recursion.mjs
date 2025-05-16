// const myFunction = (number) => {
//   if (number > 5) return;
//   console.log(number);
//   myFunction(number + 1);
// };

// myFunction(1);
// //   if (number > 5) return;기저조건이라고
// // 무한대로 반복되면 error 나니깐 붙여줌

// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// console.log(factorial(5));

const power = (x, n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return power(x, n - 1) * x;
};

console.log(power(2, 5));
