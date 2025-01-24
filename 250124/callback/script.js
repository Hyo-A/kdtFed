//콜백지옥!! => 콜백함수를 계속 이어서 작성하는 형식

// setTimeout(() => {
//   let coffeeName = "에스프레소";
//   console.log(coffeeName);
//   setTimeout(() => {
//     coffeeName = "카페라떼";
//     console.log(coffeeName);
//     setTimeout(() => {
//       coffeeName = "카페모카";
//       console.log(coffeeName);
//       setTimeout(() => {
//         coffeeName = "아메리카노";
//         console.log(coffeeName);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// let coffeeName = "";

// const addAmericano = (name) => {
//   coffeeName += `,${name}`;
//   console.log(coffeeName);
// };

// const addMocha = (name) => {
//   coffeeName += `,${name}`;
//   console.log(coffeeName);
//   setTimeout(addAmericano, 2000, "아메리카노");
// };

// const addLatte = (name) => {
//   coffeeName += `,${name}`;
//   console.log(coffeeName);
//   setTimeout(addMocha, 2000, "카페모카");
//   // 2초 뒤에 add모카 시작이다
// };

// const addEspress = (name) => {
//   coffeeName += name;
//   console.log(coffeeName);
//   setTimeout(addLatte, 2000, "카페라떼");
//   // 2초 뒤에 addLatte 시작이다
// };

// setTimeout(addEspress, 2000, "에스프레소");

/* 약속 // ES6 = 2015년 */
/* 만약에 데이터를 가져오는데 문제가 없으면 A를 출력해줘, 근데 만약에 문제가 생겨서 오류 및 에러가 발생하면 B 를 출력해줘 라고 약속! */
/* 약속한 실행문을 지켜보고 있다가 나중에 실행해줌 */

const addCoffee = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newName = prevName ? prevName + ", " + name : name;
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"))
  .then(addCoffee("아메리카노"));

// const arr = [1, 2, 3, 4];
// console.log(typeof arr);

// let arr1 = new Array();
// console.log(typeof arr1);

// arr1[0] = 1;
// arr1[1] = 2;

// console.log(arr1);
