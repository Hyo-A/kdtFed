// promise객체 => 일종의 약속
// 만약 처리하고자 하는 데이터가 정상적으로 처리가 되었을 때,
// 처리하고자 하는 데이터가 정상적으로 처리되지 못했을 때,
// 위 2가지 사항에 다른 결과를 이원화해서 처리하고 싶은 것!
// class로 선언된 프로토타입 객체

// 약속선언 선언부
// const pizza = new Promise((resolve, reject) => {
//   if (false) {
//     resolve("pizza를 주문합니다.");
//   } else {
//     reject("pizza를 주문하지 않습니다.");
//   }
// });
// pizza가 인스턴스 객체가 되었다
// promise안에는 콜백함수를 쓸 수 있는데 그 안에는 resolve, reject라는 두가지 함수를 인자값으로 쓸 수 있다
// Promise 객체를 사용해서 무언가의 데이터를 취급할 때에는 3가지 상태변화를 체크!
/*
1) pending : 최초 프로미스 객체를 생성하면 무조건 팬딩단계 돌입!
2) fullfilled : 어떤 데이터를 정상적으로 처리하게 되면 실행단계에 돌입 => resolve라는 함수를 실행하는 단계
3) rejected : 어떤 데이터를 정상적으로 처리하지 못하게 되면 거절 단계에 돌입 => reject라는 함수를 실행하는 단계


// 실행부 => 약속했던 선언을 실행
// 메서드 체이닝기법을 활용해서, 선언부에서 약속한 결과를 실제 실행!!
pizza
  .then((result) => {
    // then은 실행이 잘 되었을때에 resolve가 전달한 값을 인자값으로 받는다
    console.log(result);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료!");
  });
*/

const start = document.querySelector(".start");
const end = document.querySelector(".end");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("커피를 입력해주세요", "아메리카노");
  if (coffee !== null && coffee !== "") {
    start.innerText = `${coffee} 주문접수!`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다");
  }
});

const display = (result) => {
  end.innerText = `${result} 준비완료!`;
  end.classList.add("active");
  start.classList.add("done");
};
// then 안에 들어갈 resolve값을 찾아오는 함수

const showError = (err) => {
  alert(err);
};

order.then(display).catch(showError);
