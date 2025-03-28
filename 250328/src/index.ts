interface Person {
  readonly name: string;
  // 읽기전용
  age?: number;
  // 선택적 property

  // sayHi?: (a:number,b:number) => void; // 이건 안됨
  // 위아래는 같은 말인거임
  sayHi?(a: number, b: number): void; // 매서드 함수를 호출시그니쳐로??
  // 인자값을 가지고 있는 함수에 쓰려면 호출시그니쳐로 써야함
}

let person1: Person = {
  name: "효아",
  age: 27,
};

let person2: Person = {
  name: "두영",
  // age: 30,
  // sayHi: () => {}, // 메서드함수
};

// person2.name = "만듀"; // 오류! 읽기전용이니깐 이름 못바꿈

interface Func2 {
  (a: number): string; // 인자값을 key로 value를 결과로 넣을 수 있음
  b?: boolean;
} // 인터페이스는 메서드 함수도 줄수있음 원래 객체전문

let func2: Func2 = (a) => "Hello World!";
func2.b = true; // 이럴때도 사용하고 저럴때도 사용하고

// 타입별칭과의 강력한 차이점
type Type1 = number | string;
type Type2 = number & string; // 이거는 없는건데 그냥 예시드려고 쓴거임 never

interface Person3 {
  name: string;
  age: number;
} // | number | string // type은 유니온을 만들수 있는데 인터페이스는 불가능임
// 직접 이케 쓸 수는 없고 type 안에 넣어야함!

type Type3 = number | string | Person3; // 이러면 interface union타입으로 쓰기 성곧
type Type4 = number & string & Person3;

// const person5: Person3 & string = {
//   name: "hyoa",
//   age: 20,
// }; // 이케 주석으로는 union을 쓸 수 있다 오류뜨긴하는데 주석달기로 넣기는 성공이란거

// interface만의 고유기능
// interface Animal {
//   name: string;
//   age: number;
// }

type Animal = {
  name: string;
  age: number;
}; // 타입은 단순변수같이 extends같은 기능이 없음

interface Dog extends Animal {
  // name: 777;
  // extend에서 property 재정의를 할 수 있는데 상속해주는 타입이 슈퍼타입이어야 오류 안뜸
  // 오류! 지금은 형제타입이잖아
  isBark: boolean;
}
interface Cat extends Animal {
  isScratch: boolean;
}

interface Ham extends Animal {
  isCute: boolean;
}

const dog: Dog = {
  name: "만두",
  age: 14,
  isBark: false,
};

const cat: Cat = {
  name: "순자",
  age: 8,
  isScratch: false,
};

interface DogCat extends Dog, Cat {} // 얘는 다중확장
const dogCat: DogCat = {
  name: "김만두영",
  age: 3,
  isBark: true,
  isScratch: false,
};

// 아래 녀석들은 반복도 많고 비효울적이어 보임 위에 더 효율적으로 써야지
// interface Dog {
//   name: string;
//   age: number;
//   isBark: boolean;
// }

// interface Cat {
//   name: string;
//   age: number;
//   isScratch: boolean;
// }

// interface Ham {
//   name: string;
//   age: number;
//   isCute: boolean;
// }

type Person7 = {
  name: string;
};
type Person7 = {
  age: number;
}; // type속겅은 재선언같은 느낌은 못함

interface Person10 {
  name: string;
}
interface Person10 {
  // name: boolean; // 오류! 속성값을 바꾸면서 재선언 할 수 없다
  age: number;
} // interface 속성은 재선언같은 느낌 가능임 // 병합된다 // 그리고 여러번 쓰는게 좋지가 않음

const person10: Person10 = {
  name: "hyoa",
  age: 20,
}; // 병합되서 가능한거임
