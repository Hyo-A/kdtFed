let a: 1 = 1;
// a에 특정 정확한 내용을 타입으로 정의? literal type
// 실은 그냥 이거 const a = 1; 과 같은거지

let b: number | string;
b = 1;
b = "hello";
// b에 number 혹은 string이 들어올 수 있다? Union type

//
let arr: (number | string | boolean)[] = [1, "hello", true]; //Union type

type Dog = {
  name: string;
  color: string;
  age: number;
};

type Person = {
  name: string;
  language: string;
};

// dog 와 person을 모두 가지고 있는 union 타입을 만들고프단
type Union1 = Dog | Person;
type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  age: 2,
  language: "",
}; // 얘는 다 갖고 있어야함

let union1: Union1 = {
  name: "",
  color: "",
  age: 2,
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
  age: 2,
};

type Union2 = {
  name: string;
};

let union4: Union2 = {
  name: "",
};

union4 = union3;
// union3 = union4; // 이건 오류

let variable: number & string; // 이런애는 없다 // never타입인거임
