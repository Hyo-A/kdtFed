/* 
변수
자료형
연산자
조건문
반복문
함수
DOM
EVENT
객체
Class
문자열
정규표현식
배열
*/

/* 
Map // Set
Map()은 클래스 혹은 생성자함수 => 프로토타입 객체
왜 만들었을까?
주요 자료구조 : 객체 & 배열
객체 : 키 & 값 한쌍 프로퍼티 구성!
객채? 반복적인 무언가를 실행할 수 없음
객체안에 있는 속성들을 인덱스화 할 수 없음

배열 : 이터러블하다 => 반복적인 무언가를 실행
배열 안에있는 요소들은 각각 인덱스화 할 수 있다
배열의 요소의 의미를 유추해야한다

객체와 배열의 장점만 추출해서 자료구조를 만들어버린
객채와 배열의 혼혈이다!


Set()은 안에 반복되는 값이 X
Map()과 달리, 중복되는 값을 허용하지 않는다!
*/

const bag = new Map();
// bag.set("color", "red");
// bag.set("price", "30000");
// set이라는 메서드 함수를 이용하여 bag에 새로운 값을 넣어줄거야
// key는 color value는 red로 넣어줄거야

// Method Chaining기법
bag.set("color", "red").set("price", "30000");
bag.get("color"); // get()는 color라는 키에 해당하는 벨류를 찾아온
bag.has("price"); // has()는 price라는 키가 있는지 boolean값으로
bag.delete("color"); // delete()는 color라는 키에 해당하는 벨류까지 싹싹 지워줌
bag.clear(); // clear()는 안에 것을 다 싹싹 지워줌

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

// console.log(myCup.keys());
const myCupIte = myCup.keys();
console.log(myCupIte);

const myCupIte2 = myCup.values();
console.log(myCupIte2);

const myCupIte3 = myCup.entries();
console.log(myCupIte3);

myCupIte.forEach((item) => {
  console.log(item, typeof item);
});

myCupIte3.forEach((item) => {
  console.log(item, typeof item);
});

// Iterable : 반복순회할 수 있는 (*형용사)
// Iterator : Iterable한 객체가 된 요소! (*명사)
