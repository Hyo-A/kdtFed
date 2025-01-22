/* 우리가 현재 공부하고 있는 JS를 객체지향 언어 => c || Java => 객체지향언어 => 어떠한 함수가 실행되고, 처리해야할 자료가 발생되면, 기본적으로 객체라는 자료구조의 형태로 변환해서 관리.저장.보관한다 */

/* 이러한 객체지향 언어들은 거의 대부분 this 객체를 가지고 있음 => 어떤 함수 혹은 속성값이 실행되었을 때, 실행된 함수 및 속성의 주인이 누구인지를 효율적으로 가리켜서 쉽게 찾아올 수 있게 해주는 역할*/

/*
1. JS를 활용해서 함수 선언 => 호출하는 순간 => "실행 컨텍스트=객체" 실행
2. "실행컨텍스트" => Call Stack 공간에서 가장 먼저 실행
3. 그 다음 호출된 함수가 그 위로 쌓이게 되는 구조
4. "실행컨텍스트-객체" => 무엇으로 구성되었는가?
5.
VariableEnvironment (*환경변수)
- environmentRecord (*snapshot) : 해당 함수가 가지고 있는 내부 함수 || 변수 등등 정보
- outerEnvironmentReference (*snapshot) : 해당 함수가 참조하고 있는 매개변수 || 인자값이 외부에서 들어온 경우, 어느 경로에서 유입되었는지에 대한 전반적인 정보

LexicalEnvironment (*사전환경정보)
- environmentRecord : 해당 함수가 가지고 있는 내부 함수 || 변수 등등 정보
- outerEnvironmentReference : 해당 함수가 참조하고 있는 매개변수 || 인자값이 외부에서 들어온 경우, 어느 경로에서 유입되었는지에 대한 전반적인 정보

ThisBinding (*this로 가리켜야 하는 대상이 누구인지의 정보)
*/

/* Scope (*스코프) = 유효범위
- 함수가 어디에서 어디가지 커버해야 하는지를 결정내림

Scope Chain (*스코프체인)
- 스코프 범위 내 요소를 하나씩 차례대로 검색해나가는 프로세스
- 현재 호출된 함수의 과거 선언 당시의 LexicalEnvironment 정보까지 참조!!
*/

/* 그래서 this를 어떻게 식별해야 하는가? */

/*
1. JS내 전역공간에서 this는 무조건 전역(*모든것을 커버) 객체!
- JS > 웹 브라우저에서 사용하려고 만들어짐 > window
- Node.js > global
2. 
*/

// 전역에서 사용가능한 변수 => 전역객체 안에 하나의 속성값

// const obj = {
//   a: 1,
// };

// obj.a;

// const func = function (x) {
//   console.log(this, x);
// };

// func(1);

// const obj = {
//   method: func,
// };

// obj.method(2);

// 함수를 독립적으로 실행시킬 때에는 this는 전역객체인 window를 가르킨다

// 함수가 특정 객체의 속성 메서드로 실행 될 때에는 해당 객체를 가르킨다

// 1. this를 호출하는 상황이 전역요소인지 => window

// 2. 함수를 독립적으로 호출한 상황에서 this를 요청 => window

// 3. 특정 개체 안에있는 속성 중 메서드를 활용해서 this를 요청 => 해당 객체

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

// const obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };

// obj.methodA();
// obj["methodA"]();

// obj.inner.methodB();
// obj.inner["methodB"]();
// obj["inner"]["methodB"]();
// obj["inner"].methodB();

// 메서드 = method = 객체 안에 있는 함수

// const obj1 = {
//   outer: function () {
//     console.log(this);

//     const innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc();

//     const obj2 = {
//       innerMethod: innerFunc,
//     };
//     obj2.innerMethod();
//   },
// };

// obj1.outer();
// // 이러면 obj1 자신을 출력한다

// ES6 => 2015년
// 화살표 함수 => 기존 함수들의 실행 컨택스트와 한가지 엄청나게 큰 변화!
// 실행컨텍스트 객체 => thisBinding

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };

// obj.outer();

// const arr = [1, 2, 3, 4];
// arr.forEach(function (num) {
//   console.log(this, num);
// });

// setTimeout(function () {
//   console.log(this);
// }, 300);

// node :
// Common JS
// ESM

// document.body.innerHTML += `<button id = "a">클릭</button>`;
// document.body.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

const obj1 = {
  outer: function () {
    console.log(this);

    const innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();

    const self = this;
    const innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2();
  },
};

obj1.outer();
