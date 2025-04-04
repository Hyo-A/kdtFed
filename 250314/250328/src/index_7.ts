type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// const warning = (animal: Animal) => {
//   if ("isBark" in animal) {
//     console.log(animal.isBark ? "짖어요" : "안짖어요");
//   } else if ("isScratch:" in animal) {
//     console.log(animal.isScratch ? "햘퀴어요" : "안햘퀴어요");
//   }
// };

const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).isBark !== undefined; // 타입 단언을 할 수 있지만 as를 쓸 수도 있다
  // 이 요소는 결국 true 값을 반환하게된다
  // 강아지라고 판단, bark는 undefined가 되지 않는다
};
const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScratch !== undefined;
  // 이 요소는 결국 true 값을 반환하게된다
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "안짖습니다");
  } else {
    console.log(animal);
  }
};
