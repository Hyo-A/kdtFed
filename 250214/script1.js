// 사용자 정의 객체 생성

const newBook = {
  title: "Javascipt",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author} 작가님의 신간 도서 입니다`);
  },
};

newBook.question();

// 이 폼으로 쭉쭉 반복작업 하고싶은데..
// 생성자 함수
// 생성자 함수의 첫글자는 대문자!

function Book(title, page, price, author, published) {
  this.title = title;
  // 앞에 있는 title은 우리가 book에 넣을 key // 뒤에 있는 title아 다시 값으로 매겨짐
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author} 작가님의 신간 도서 입니다`);
  };
}
// 생성자 함수를 만든 후 해당 생성자 함수를 사용하고자 할 때에는 반드시 new라는 예약어를 쓴다

const book1 = new Book("Javascript", 36, 36000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
