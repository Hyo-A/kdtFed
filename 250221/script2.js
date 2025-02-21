/*
// 1. 배열을 생성하는 방법
const seoson = [];
seoson[0] = "spring";
seoson[1] = "summer";

// 2. 배열을 생성하는 방법
const pets = ["dog", "cat", "hamster"];

// 3. 배열을 생성하는 방법
const fruits = new Array("사과", "복숭아", "포도");

// 배열의 아이템에 접근 후 값 변경!
pets[2] = "mouse";
*/

// 일반 for문
// const colors = ["red", "green", "blue", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

/*
// forEach
// 1개 : 개별 아이템
// 2개 : 개별 아이템 , index
// 3개 : 개별 아이템 , index , 배열 그 자체

const animals = ["lion", "bear", "bird"];
animals.forEach((animal) => {
  console.log(animal);
});

animals.forEach((animal, index) => {
  console.log(`${animal}은 animal중 ${index + 1}번째입니다`);
});

animals.forEach((animal, index, array) => {
  console.log(`${animal}은 [${array}]중 ${index + 1}번째 입니다`);
});

/*
// 배열이 가지고 있는 주요 메서드 험수 시리즈

// 1. concat() : 서로 다른 배열 혹은 유사배열을 하나의 배열로 합치고자 할 때 사용할 수 있는 메서드 함수

const vegetables = ["양상추", "토마토", "피클"];
const meat = ["불고기"];
const source = ["케챱"];

//const meatbuger = vegetables.concat(meat, source);
//const meatbuger = vegetables.concat(meat, "빵", source);
// const meatbuger = [vegetables, meat];// 이건아니야 그저 배열 두개가 하나의 배열에 들어가게 되는것 뿐....

//const meatbuger = [...vegetables, ...meat, ...source, "빵"]; // 이렇게 전개연산자로도 합치기 가능!

// console.log(meatbuger);


// 2. reverse() : 현재 배열 내 아이템 순서를 역순으로 배치하고자 할 때 사용할 수 있는 메서드 함수

const numbers = [6, 9, 3, 21, 17];
console.log(numbers);
console.log(numbers.reverse());


// 3. sort() : 배열 안에 있는 아이템들의 값을 정렬하고자 할 때 사용할 수 있는 메서드 함수
// 기본적으로 작은값부터 큰 값으로 정렬하는 오름차순의 형태를 띈다
// a-z // 1-9

const week = ["sun", "mon", "tue"];
console.log(week.sort());


const values = [5, 20, 3, 11, 4, 15];
// console.log(values.sort());
//두자리 이상의 숫자의 배열에서는 문자로 가져오기 때문에  [11, 15, 20, 3, 4, 5]로 가져옴 -> 숫자로 인실할 수 있는 커스텀이 필요하다!

console.log(
  values.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    if (a === 0) {
      return 0;
    }
  })
);

console.log(
  values.sort((a, b) => {
    return a - b;
    // 위는 오름차순이고 내림차순은 b-a다
  })
);


// 4. pop(), push() : 배열 안에 맨 뒤쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드 함수

const animals = ["lion", "bear", "bird"];
console.log(animals.pop());
// pop은 맨 뒤에 bird를 제거했음
console.log(animals);
animals.push("tigger");
// push은 맨 뒤에 tigger를 만들었음
console.log(animals);


// 5. shift(), unshift() : 배열 안에 맨 앞쪽부터 값을 제거하거나 혹은 추가하고자 할 때 사용가능한 메서드함수

animals.shift();
console.log(animals);
animals.unshift("mouse");
console.log(animals);


// 6. splice() : 배열에 특정 위치에 있는 아이템 값을 추가하거나 제거하고자 할 때 사용 가능한 메서드 함수 일단 쓰면은 잘리고 나간 결과값으로 원본이 바뀌어 버리는 효과

const subjects = ["html", "css", "js", "ts", "react"];

console.log(subjects.splice(2));

const test = subjects.splice(2, 2);
console.log(test);
console.log(subjects);
*/
