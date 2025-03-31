class Emplyee {
  // Field 값을 정의할때 타입에다가 초기값까지 줘야한다는 사실
  // private name: string;
  // protected age?: number; // optional property
  // public position: string;
  // 얘들은 기본적으로 퍼블릭임
  // 내가 private, protected로 설정을 다 할수 있다고

  // Constructor 생성자함수
  constructor(
    protected name: string,
    public position: string,
    public age?: number
  ) {
    // 매개변수는 반드시!! 타입지정을 해야한다고 => 생성자함수를 쓰는 순간 Field값의 초기값이 필요없어짐
    // optional property는 매개변수로 맨 뒤에 와야함
    name;
    position;
    age;
  }

  // method
  work() {
    console.log(`Hello ${this.name}입니다`);
  }
}

// const employee1 = new Emplyee(); // 이곳에 오류가 떠버렸다
// console.log(employee1);
// employee1.work();

// const employee2 = new Emplyee("Romeo", 20, "Striker"); // 이제 값을 줘야지 오류가 안뜸
// console.log(employee2);
// employee2.work();

const employee3 = new Emplyee("Rooney", "Striker", 30); // 이케 두개만 값을 주고싶다면? optional property // 대신 해당요소의 값으로
// employee3.name = "만두"; // 오류!! //내가 Field에서 private으로 설정
employee3.age = 27; // 오류!! //내가 Field에서 protected로 설정
employee3.work();
console.log(employee3);

// Employee를 타입으로서 쓰고싶어
// const employee4: Emplyee = {
//   name: "",
//   position: "",
//   age: 20,
//   work: () => {},
// };

// Ts에서의 class 상속
class ExecutiveOfficer extends Emplyee {
  officeNumber: number;

  constructor(
    name: string,
    position: string,
    age: number,
    officeNumber: number
  ) {
    super(name, position, age);
    this.officeNumber = officeNumber;
  }

  work2() {
    console.log(`반가워요! ${this.name}입니다!`);
    // 오류!! //내가 Field에서 private으로 설정
    // 상속받은 애한테 접근 가능하도록 protected로 바꿔야 한다는 말임
    employee3.work();
  }
  work3() {
    console.log(`제 나이는 ${this.age}입니다!`);
  }
}

// const employee5 = new ExecutiveOfficer("hyoa", "FW", 20, 1);
// console.log(employee5);

interface CharactorInterface {
  name: string;
  moveSpeed: number;
  move(): void; // void는 반환값이 없는 함수
}

class Character implements CharactorInterface {
  // 이 클래스는 name, moveSpeed, move()값을 반드시 가지고 있고 싶음 => implements
  constructor(public name: string, public moveSpeed: number) {}
  move(): void {
    console.log(`${this.moveSpeed}속도로 이동 가능`);
  }
}
