type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

interface IMap3<V> {
  [key: string]: V; // 이것은 인덱스 시그니처
}

let stringMap3: IMap3<string> = {
  key: "value",
};

let booleanMap3: IMap3<boolean> = {
  key: true,
};

interface IKeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: IKeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
