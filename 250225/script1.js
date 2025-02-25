// 구조분해할당
const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

// const [apple, peach] = ["사과", "복숭아"]; 아래와 같은 뜻
const [apple, peach] = fruits;
// 이러면 apple은 사과 peach는 복숭아가 들어감

console.log(apple, peach);

const seasons = ["봄", "여름", "가을", "겨울"];

const [spring, , fall] = seasons;
// 특정값을 왼쪽부터가 차례대로가 아닌 부분을 찾아오고싶다면 , ,를 사용
console.log(spring, fall);

const char = ["park", "lee", "hyo", "choi"];

const [teacher, ...students] = char;

console.log(teacher, students);

// // 객체의 구조분해할당 - 1

// const member = {
//   name: "Davide",
//   age: 20,
// };

// const { name: username, age } = member;
// // name: username, age 는 찾아온 키값이 name이었지만 위와같이 찾아온 값을 바꿀수도 있다?!
// console.log(name, age);

// 객체의 구조분해할당 - 2
const student = {
  name: "David",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "doo", "yung"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(f1);
