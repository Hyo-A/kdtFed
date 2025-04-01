// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// //
// const fetchUser = (): User => {
//   return {
//     id: 1,
//     name: "hyoa",
//     age: 20,
//   };
// };

// // type PartialUser = {
// //   // 어떤값이 생략될지 모르는 상황 세팅
// //   id?: number;
// //   name?: string;
// //   age?: number;
// //   // optional property 남발 상황 // 이렇게까지 해야하나
// //   // => mapped타입 사용하자
// // };

// type PartialUser = {
//   [key in "id" | "name" | "age"]?: User[key];
//   // [key in "id" | "name" | "age"] key 안에 이중 하나가 들어올 수 있다는 뜻임
// };

// type PartialUser2 = {
//   readonly [key in keyof User]?: User[key];
// };

// // 사용자 정보값 수정 함수 만들거임
// const updateUser = (user: PartialUser2) => {};

// updateUser({ age: 25 });

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;
// 이게 바로 Template Literal 타입
// 알아서 쏙쏙 들어가짐
