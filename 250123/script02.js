// const fruits = ["apple", "banana", "grape"];
//배열을 줬다 참조변수

// console.log(fruits);

//

/*
//전개연산자 구문
// spread operator
// console.log(...fruits);
// ...은? 펼쳐보인다? 이건 함수에서도 쓰이는데..
const addNum = (...numbers) => {
  // 여기서 numbers는 배열의 자료구조로 값을 받아오겠다 말하는거임 / 배열은 객체의 자식
  let sum = 0;
  // numbers.forEach((number) => {
  //   sum += number;
  // });

  for (let number of numbers) {
    sum += number;
  }

  return sum;
  // return a + b;
};

console.log(addNum(1, 3, 5, 7));*/

//

const displayFavorite = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}입니다.`;
  return str;
};

console.log(displayFavorite("사과", "포도", "토마토"));
