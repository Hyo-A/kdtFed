enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user9 = {
  name: "Hyoa",
  role: Role.ADMIN,
};
const user10 = {
  name: "Mandu",
  role: Role.USER,
};
const user11 = {
  name: "Duyung",
  role: Role.GUEST,
};

console.log(user9, user11, user10);

// 타입의 계층구조
let test01: unknown;
let test02: number = 2;

test01 = test02;
// test02 = test01;

// any타입은 number보다 슈퍼타입임
// any보다 자식인 sub타입 녀석들은 뭐든 들어올 수 있다
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = [1, 2, "world"];

// anyVar = unknown; // any보다 슈퍼타입인 unknown은 불가능

let num = 10;
num = anyVar; // 이것은 다운캐스팅의 경우임

let unKnownVar: unknown;

unKnownVar = "";
unKnownVar = 1;
unKnownVar = [];
unKnownVar = {};

// num = unKnownVar; // unknown은 다운케스팅 허용하지 않는다 이럴때에 다운캐스팅을 하려면...
if (typeof unKnownVar === "number") {
  num = unKnownVar;
} // 타입가드를 쓸 수 있다는데?

// void
const func1 = (): void => {
  console.log("Hello");
  // return "Hello"; 값을 반환하지 않는거니깐 return 쓰면 안댐
};

let a: void;
a = undefined;

const func3 = (): never => {
  while (true) {
    console.log("Hello");
  }
};

const fun4 = (): never => {
  throw new Error();
};
