"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 1;
// a에 특정 정확한 내용을 타입으로 정의? literal type
// 실은 그냥 이거 const a = 1; 과 같은거지
let b;
b = 1;
b = "hello";
// b에 number 혹은 string이 들어올 수 있다? Union type
//
let arr = [1, "hello", true]; //Union type
let intersection = {
    name: "",
    color: "",
    age: 2,
    language: "",
}; // 얘는 다 갖고 있어야함
let union1 = {
    name: "",
    color: "",
    age: 2,
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
    age: 2,
};
let union4 = {
    name: "",
};
union4 = union3;
// union3 = union4; // 이건 오류
let variable; // 이런애는 없다 // never타입인거임
