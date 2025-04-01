"use strict";
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number; // 만약 age가 추가된다면?
//   };
// }
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "hyoa",
    age: 27,
    location: "seoul", // 원본 데이터에 내용이 추가된거임
    // 그럼 interface에서도, 변수 인자값에서도 계속 넣어줘야하는데 불편 -> keyof로 해결!
    // keyof는 "타입"에만 쓰는 용도라는것 주의!
};
const getPropertyKey = (person, key) => {
    // 완전 말장난같군
    return person[key];
};
// const getPropertyKey = (person: Person, key: "name" | "age" | "location") => {
//   return person[key];
// };
