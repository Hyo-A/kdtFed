class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data); // this는 인스턴스 객체를 찝어준다
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// class NumberList {
//   constructor(private list: number[]) {}

//   push(data: number) {
//     this.list.push(data); // this는 인스턴스 객체를 찝어준다
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// class StringList {
//   constructor(private list: string[]) {}

//   push(data: string) {
//     this.list.push(data); // this는 인스턴스 객체를 찝어준다
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

const numberList = new List([1, 2, 3]);
console.log(numberList);
const MixList = new List(["1", 2, 3]);
console.log(MixList);
