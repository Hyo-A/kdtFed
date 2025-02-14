// 객체종류

/*
1. 내장객체 : new Date(), Math
2. 브라우저객체 : window
3. 문서객체 : document
4. 사용자 정의 객체 : 직접 개발자가 원하는 형태  & 기능을 담고 있는 객체의 형태로 정의하는 것을 의미
*/

/*
객체는 특징 및 원리 혹은 패턴을 가지고 있음
객체는 property(속성)로 구성되어 있음

그렇다면 속성이란?

반드시 key : value의 형태를 띄고 있는 1쌍이다!

value에 입력됙 수 있는 값의 형태는 숫자, 문자만 가능한가? / 배열도 가능 / 함수도 가능

객체의 특정 Key 안에 value 값으로 입력된 자료의 형태가 함수인 경우에는 별도의 용어를 사용합니다

method = 메서드 = 방법 ⇒ 우리가 그동안 사용했던 querySelector() ⇒ 함수

window.document.querySelector( )
→ 이것만 본다면 doc는 win 의 property 라 볼 수 있고 queryselector는 doc의 method라 말 할 수 있다

*/

//객체를 정의하는 방법
/*
let obj1 = new Object();

obj1.name = "David";

console.log(obj1);

obj1["gender"] = "male";
// 대괄호 표기법으로 정의할때는 ""로 문자로 넣어야함

console.log(obj1);

obj1.name = "Romeo";
// 같은 key 안에 value를 재할당 하게 될 수도 있다

console.log(obj1);

delete obj1.name;
// delete라는 예약어를 통해 key property를 삭제 가능

console.log(obj1);
*/

const student = {
  name: "Juliet",
  score: {
    // 속성안에 또 속성을 줬다? 근데 안쪽 속성의 value값을 함수로 줬다
    history: 85,
    science: 94,
    average: function () {
      return (this.history + this.science) / 2;
      // 여기서 this는 average를 감싸고 있는 부모인 score가 된다
      // 여기서 익명함수를 쓴 이유는 this를 찾아와야 편하기 때문이야
    },
  },
};

console.log(student.score.average());

const book3 = {
  title: "누구나 처음은 있다",
  page: 350,
  buy: function () {
    console.log("이 책을 구입했습니다!");
  },
};

book3.price = 20000;
// const 로 정의된 객체 안의 key 값이 재할당 되었는데 오류 안나오고 잘 나옴
console.log(book3);
