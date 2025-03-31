const studentA = {
  name: "hyoa",
  grade: "A+",
  age: 27,
  study: function () {
    console.log("열심히 공부함!");
  },
  introduct: function () {
    console.log("안녕하세요");
  },
};

const studentB = {
  name: "dubu",
  grade: "B+",
  age: 30,
  study: function () {
    console.log("열심히 공부할게요!");
  },
  introduct: function () {
    console.log("반가워요😉");
  },
};

class Student {
  // key로써의 Field 값 정의
  name;
  grade;
  age;

  // Constructor는 생성자 함수
  constructor(name, grade, age) {
    this.name = name; // 여기서 this는 인스턴스 객체!
    this.grade = grade; // 뒤의 grade는 value값임
    this.age = age;
  }

  //Method함수 선언
  study() {
    console.log("열심히 공부함!");
  }

  introduct() {
    console.log(`안녕하세요! ${this.name}입니다!`);
    // this객체는 이 안에서는 어디서든 쓸 수 있음
  }
}

const studentC = new Student("만두", "B", 14);
// console.log(studentC);

studentC.study();
studentC.introduct();

// class상속을 원함
class StudentDeveloper extends Student {
  // class에서는 extends가 상속의 의미를 가짐
  // key로써의 Field 값 정의
  favoriteSkill;

  // Constructor
  constructor(name, grade, age, favoriteSkill) {
    // Student는 StudentDeveloper의 슈퍼타입같은 느낌? 슈퍼마켓에서 값을 찾아온다 생각해
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // Method
  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함!`);
  }
}

const studentD = new StudentDeveloper("Romeo", "C", 21, "TS");
console.log(studentD);
console.log(studentD.programing());
