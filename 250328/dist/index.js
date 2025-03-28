"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = () => 10;
let b = () => 10;
a = b;
let c = (value) => { };
let d = (value) => { };
// c = d; // 얘는 오류 왜냐하면?
d = c; // 오히려 얘가 오류가 안남
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name, dog.color);
};
// animalFunc = dogFunc;
// 얘는 오류 // 제약이 적은(슈퍼) 애가 제약이 많게(서브) 줄어들수 있다
dogFunc = animalFunc;
let func1 = (a, b) => { }; // 매개변수의 개수가 많고, 경우의수가 많아진다는거임
let func2 = (a) => { };
func1 = func2;
// func2 = func1; // 이건 오류임 func2가 더 작음 // 원래 함수는 매개변수 많은게 짱이다!
// 함수 오버로딩 타입
const func7 = (a, b, c) => {
    if (typeof b === "number" && typeof c === "number") {
        // 두개 다가 number인 경우에는 시행
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
        // b링 c는 여기서 못쓰니깐 a만 쓴거임
    }
};
func7(1);
func7(1, 2); // 엥 이건 무슨경우이지?
console.log(func7(1, 2));
func7(1, 2, 3);
