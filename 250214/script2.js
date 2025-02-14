// class는 반복사용할 객체 만들기용
// 일반 property와 method를 다르게 쓴다
class Book {
  constructor(title, page, price, author, published) {
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }

  question() {
    console.log(`${this.author} 작가님의 신간 도서 입니다`);
  }
}

const book1 = new Book("Javascript", 36, 36000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
