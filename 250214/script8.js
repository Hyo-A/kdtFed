class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매햐셨습니다`);
  }
}

const book1 = new BookC("자료구조", 15000);

// book1.buy();

//---

class TextBookC extends BookC {
  //  TextBookC extends BookC = 텍스트북이 북C의 연장선상에 있다 상속받는다는 말
  constructor(title, price, major) {
    super(title, price);
    // super는 상속받고자 하는 class에서 원하는 key를 쏙쏙 갖고올 수 있다
    this.major = major;
  }

  buyTextBook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다`);
  }
}

const book2 = new TextBookC("인공지능", 5000, "컴퓨터");
console.log(book2);

book2.buy();
book2.buyTextBook();
