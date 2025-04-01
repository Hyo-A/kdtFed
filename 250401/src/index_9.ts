// type Exclude<T, U> = T extends U ? never : T;

// type A = Exclude<number | string | boolean, string>;
//이러면 number나 boolean을 반환하겠지

// infer : Inferred : 추론이 되어진
// 기본적으로 어떤 변수를 선언하고 해당 변수 안에 값을 적용 => 타입을 추론!
// infer 추론은 특정 함수에서 반환값의

type ReturnType<T> = T extends () => infer R ? R : never;
// () => infer R 이란?
//  무조건 반드시 조건식이 참이 될 수 있게끔 도와주는 infer를 써버렸다 이거임

type FuncA = () => string;
type FuncB = () => number;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
