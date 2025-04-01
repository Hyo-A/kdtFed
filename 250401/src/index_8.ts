// type A = number extends string ? number : string;
// // number 와 스트링은 형제기 때문에 extends를 할 수 없지만?
// // 삼항조건 연산자를 잘 써서 string을 반환하게 만들어버림??

// type ObjA = {
//   a: number; // 얘가 슈퍼타입
// };

// type ObjB = {
//   a: number;
//   b: number;
// };

// type B = ObjB extends ObjA ? number : string;
// // B는 true가 되니깐 number가 되겠지

// type StringNumber<T> = T extends number ? string : number;
// // 제네릭 형식을 띄게 하고싶음
// // 이러면 number가 되는거임

// let varA: StringNumber<number>; // 얘는 true
// let varB: StringNumber<string>; // 얘는 false

// function removeSpace<T>(text: T): T extends string ? string : undefined;

// // 빈공간을 없애주는 함수 replace쓰자
// function removeSpace(text: any) {
//   // 타입변수를 조건부타입으로 만들어볼까?
//   // 단순히 타입변수를 주면 타입가드를 쓸 수 없었으니깐
//   if (typeof text === "string") {
//     return text.replaceAll(" ", "");
//   } else {
//     return undefined;
//   } // 미래의 return하는 값이 string일지 undefined일지 미스테리이기 때문에 any로 타입을 단언한 경우임
// }

// let result = removeSpace("hi im winter");
// // result.toLowerCase(); // 오류! 이상하게 result가 string | boolean이다
// let result2 = removeSpace(undefined);
// console.log(result, result2);

type StringNumber<T> = T extends number ? string : number;

let c: StringNumber<number | string>;
