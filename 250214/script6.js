// 1. class  혹은 생성자 함수를 사용해서 객체의 포맷(*형태)를 구현할 수 있음
// 2. class 혹은 생성자 함수를 사용해서 만들어진 포멧을 사용하려면 new 예약어와 함께 Prototype 객체(*혹은 함수)를 호출하면 가능!
// 3. 이렇게 호출해온 Prototype 객체의 속성 및 메서드를 상속받운 요소를 instance(*인스턴스) 라고 함
// 4. 만약 instance 객체의 원조라고 할 수 있는 prototype이 무엇인지, 혹은 해당 prototype 이 가지고 있는 속성 및 메서드 함수를 확인해보고자 할 때 속성
// **⇒ __proto__**
// 5. 인스턴스 객체에 영향을 준 prototype의 부모가 누구인지를 확인해볼 수 있는 속성
// **⇒ prototype**

// const Book = function (title, pages, done) {
//   this.title = title;
//   this.page = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는중") : (str = "완독");
//     return str;
//   };
// };

// 우리가 기존 Book에 추가 key값을 더 주고싶을때?

const Book = function (title, pages, done) {
  this.title = title;
  this.page = pages;
  this.done = done;
};

Book.prototype.finish = function () {
  let str = "";
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
};

const book1 = new Book("Typescript", 648, false);
console.log(book1);
