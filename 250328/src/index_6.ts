type A = () => number; // 이게 슈퍼
type B = () => 10; // 얘가 서브

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 얘는 오류 down캐스팅임

type C = (value: number) => void; // 이게 슈퍼
type D = (value: 10) => void; // 얘가 서브

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 얘는 오류 왜냐하면?
d = c; // 오히려 얘가 오류가 안남

// 함수의 매개변수 개수가 동일하면서, 반환값이 없는 경우

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name, dog.color);
};

// animalFunc = dogFunc;
// 얘는 오류 // 제약이 적은(슈퍼) 애가 제약이 많게(서브) 줄어들수 있다
dogFunc = animalFunc;

// 함수의 매개변수의 개수가 다른 경우
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {}; // 매개변수의 개수가 많고, 경우의수가 많아진다는거임
let func2: Func2 = (a) => {};
func1 = func2;
// func2 = func1; // 이건 오류임 func2가 더 작음 // 원래 함수는 매개변수 많은게 짱이다!

// 함수 오버로딩 타입
function func7(a: number): void;
function func7(a: number, b: number, c: number): void;
// 오버로딩을 만들어서 오류룰 잡는 상황인거임

function func7(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    // 두개 다가 number인 경우에는 시행
    console.log(a + b + c);
  } else {
    console.log(a * 20);
    // b링 c는 여기서 못쓰니깐 a만 쓴거임
  }
}

func7(1);

// func7(1, 2);
// console.log(func7(1, 2));
// 오버로딩을 하여서 조건을 걸어놨다, 얘는 조건중 없기 때문에 오류를 잡을 수 있던거임

func7(1, 2, 3);
