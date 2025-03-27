let num1: number = 10; // number
let num2: 10 = 10; // literal

num1 = num2; // 여기서 상대적으로 큰 num1 = supertype // num2 = subtype
// supertype > subtype : upcasting
// subtype > supertype : downcasting => any type에서 특별하게 사용

// num2 = num1; // 불가능하다 대수타입을 보면 안다

let a: unknown = 1;
let b: unknown = "hello";
let c: unknown = true;
let d: unknown = undefined;

let unknonVar: unknown;
// let num: number = unknonVar; // 다운캐스팅 안되는거임
// let str: string = string; // 다운캐스팅 안되는거임

// let test01: never = 10;
// let test02: never = "string";
// let test03: never = true;
// 전부 다 다운캐스팅 안되는거임

// interface IAnimal {
//   // name: string;
//   // color: string;
//   [key: string]: string;
// }

type Animal = {
  name: string;
  color: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let dog: Dog = {
  name: "만두",
  color: "choco",
  breed: "푸들",
};

let cat = {
  name: "춘식",
  color: "white",
  breed: "일본",
};

// dog = animal; // animal이 범위가 더 넓은거임
animal = cat;
animal = dog;
// 값이 많을수록 sub타입이 될 확률이 적어진다

//

type Book = {
  name: string;
  price: number;
};

type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  // book이 슈퍼타입 이라는거임
  name: "ts",
  price: 30000,
  // skill: "react", // 얘는 type을 초과해서 내가 넣어버림
  // 이것은 객체의 추가 프로퍼티 검사 : 오류
};

let programingBook: ProgramingBook = {
  name: "typescript",
  price: 30000,
  skill: "reactjs",
};

book = programingBook;
// programingBook = book; // 이게 다운케스팅인거임 불가능함

let book3: Book = programingBook;
// book3는 타입을 Book으로 줬음에도 programingBook을 이용하여 skill키값도 들어온거임

const func = (book: Book) => {};
// func({ name: "react", price: 40000, skill: "react" }); // 이렇게 다운케스팅 하지말고
func(programingBook); // 이렇게 쓰자
