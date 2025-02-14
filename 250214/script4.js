// 객체는 최소한 자바스크립트에서 만큼은 최초의 근원이다!

// 모든것의 근원이다!

// class Array {
//   constructor(length) {
//     this.length = length;
//   }
//   filter() {

//   }
//   push() {

//   }
// }

// const arr = new Array();
// console.log(typeof arr);

// 배열 => iterable(순회할 수 있는)한 객체
// forin문은 오로지 순수한 객체만 쓸 수 있는것!

const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};

for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}
// 이 속의 key는 문자로서의 key이기 때문에 대괄호 표기법을 써야만 한다?
