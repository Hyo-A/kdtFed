// type Map2 = {
//   [key: string]: string;
//   // 여기서는 한번 스트링으로 결정됨 변경불가잖아
// };
// let stringMap2: Map2 = {
//   // 이것이 인덱스 시그니쳐 방식
//   key: "string",
// };

// type Map3<T> = {
//   [key: string]: T;
//   // 여기서  string을 줬지만 제네릭 타입별칭을 활용
// };
// let stringMap3: Map3<number> = {
//   key: 10,
// };

//제네릭 인터페이스
interface Keypair {
  key: string;
  value: number;
}
interface Keypair2 {
  key: boolean;
  value: string[];
}
interface Ikeypair<K, V> {
  key: K;
  value: V;
}

let keyPair: Keypair = {
  key: "Key",
  value: 10,
};
let keyPair2: Keypair2 = {
  key: true,
  value: ["i"],
}; // keyPair와 같은 키값을 갖고있는데 타입이 달라버림
// 굳이 인터페이스를 또 만들어야해? => 제네릭 인터페이스 만들자
// 바로바로 타입변수로!

let keyPair3: Ikeypair<boolean, string[]> = {
  key: true,
  value: ["i"],
};
