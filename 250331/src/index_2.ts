// 특정값을 인자값으로 받아서 해당 값을 반환하는 함수를 선언!!
// 위 특정 값이 숫자, 문자, 객체, 배열이 예측 불가!

// const func = (value: unknown) => {
//   return value;
// };
// // const func = (value: any) => {
// //   return value; // num은 any타입이기 때문에 말도안되게도 메서드 사용 가능? => 이상함
// // };

// let num = func(10);

// let str = func("Hello");

// // num.toUpperCase(); // 실은 toUpperCase는 문자에만 가능한데..
// // num.toFixed(); // toFixed는 숫자에만 사용 가능임
// // str.toUpperCase();

// // 슈퍼타입에서 서브타입의 메서드를 쓰기 위해 타입가드를 줬다
// // 이건 너무 불편해

// if (typeof num === "number") {
//   num.toFixed();
// }
// if (typeof str === "string") {
//   str.toUpperCase();
// }

// ⇒ 원하는 타입에 맞춰 적재적소로 알아서 쓸 수 있게 하고싶어 ⇒ Generic
// generic은 <>이것을 씀

const func = <T>(value: T): T => {
  // <T>는 무엇이든 들어올수 있는 타입변수이다를 알려줌
  // : T는 반환값이 T이다를 알려줌
  return value;
};

let num = func(10);
let str = func("Hello");

// 안에 들어오는것들을 직접 명시할 수도 있따
let arr = func<[number, number, number]>([1, 2, 3]);
// generic 형식으로 타입을 직접 튜블로 지정해줬다
// 기본적으로 상대적인 슈퍼타입을 타입으로 지정하려고 함!
