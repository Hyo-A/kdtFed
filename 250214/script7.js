function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("Javascript", 10000);

//Book의 하위 프로토타입을 만들어서 그에대한 instance를 또 ..
function TextBook(title, price, major) {
  Book.call(this, title, price);
  // call은? 상속을 받아오고자 하는 생성자함수로부터 가져올거다
  // call 에서 this 는 Book 에서의 this 이것을 TextBook에서 쓸 수 있게끔..
  this.major = major;
}

TextBook.prototype.buyTextbook = function () {
  console.log(`${this.major} 전공서적, ${this.major}을 구매 했습니다`);
};

Object.setPrototypeOf(TextBook.prototype, Book.prototype);
// setPrototypeOf()는 상속받는 관계다라는것을 정의해줌

const book2 = new TextBook("컴퓨터공학", 39000, "알고리즘");
console.log(book2);
book2.buyTextbook();
book2.buy();
