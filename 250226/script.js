// 배열관련 매서드 함수 및 예제 학습

// concat()
// slice()
// splice()
// sort()
// pop()
// push()
// shift()
// unshift()

// map()
// filter()
// find()
// reduce()

// map()
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  console.log(number * 2);
});

// const newNumbers = numbers.map((number) => {
//   return number * 2;
// }); // 아래처럼 쓸 수도 있다?!
const newNumbers = numbers.map((number, index, array) => number * 2 + index);
console.log(newNumbers);

// map() 안에서 return을 하면 값을 밖애서 반환해준다??
// map()에서도 index array를 인자값으로 쓸 수 있기 때문에 핵꿀

// filter()
// 내가 원하는 조건에 부합하는 다수의 복수의 값을 찾아서 새로운 배열로 반환하고 싶을때 사용
// ex) 카테고리를 눌렀을때에 사용하여 복수의 값을 찾아와야 했음
// 만약에 부합하는 값이 존재하지 않는다면?! > []이렇게 빈 배열을 반환해버린다? undifined를 반환하진 않아버려
const scores = [60, 35, 64, 68, 45, 62];
const highScores = scores.filter((score) => score >= 85);
console.log(highScores);

// find()
// 내가 찾고자 하는 값이 나타나는 순간 해당 메서드 함수는 종료!! => 명확하게 찾고자 하는 값이 단일값인 경우?!
// ex) 내가 상품을 클릭했을때 사용하여 그 하나의 값을 찾아왔어야 한다..

const names = ["kim", "doo", "yun", "doo"];
const resultNames = names.find((name) => name === "doo");
console.log(resultNames);

// filter vs find
// 1. filter의 경우 반환값을 배열형태의 자료구조로 찾아오는 반면,
// find는 문자열로 반환
// 2. filter의 경우 반환값이 존재하지 않는 경우 빈 배열로 반환,
// find 의 경우 undefined로 반환
// 3. filter의 경우 복수의 값을 찾아와서 배열로 반환하는 목적을 가지고 있기 때문에 해당 조건에 부합하는 값들을 모두 찾아옵니다
// find 의 경우 명확하게 1개의 값을 찾아오고자 하는 목적을 가지고 있기 때문에 하나의 값을 찾는 순간 해당 함수의 명령 및 실행은 종료!

// reduce() : 누산기 : 누적계산기
const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers01.reduce((total, current) => total + current, 0);
console.log(result01);
// reduce은 인자값으로? 계산된 결과값이 1번으로 들어간다? 계산할 대상이 2번으로 들어간다?
// total은 처음에 0 current값이 1부터 5까지 쭉쭉 찾아오니깐 0 + 1 + 2 + 3 + 4 + 5 => result01
