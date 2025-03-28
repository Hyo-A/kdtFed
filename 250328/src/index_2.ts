type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
// 여기서 타입단언을 해주는거임 // 나중에 Person이 될것을 단언해준거
person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

type DogNew = {
  name: string;
  color: string;
  breed: string;
};

let dog: Dog = {
  name: "만두",
  color: "초코",
  breed: "푸들",
} as Dog; // Dog에대해 타입단언으로 breed를 넣을 수 있는거임

// let dog: Dog = {
//   name: "만두",
//   color: "초코",
//   // breed: "푸들",
// };

let dogAI: DogNew = {
  name: "만두",
  color: "초코",
  breed: "푸들",
}; // 변수를 만들어서 거기에 원하는 타입을 추가해버림

let dogNew: Dog = dogAI; // breed라는 타입을 쓰고는 싶은데..
// 초과 프로퍼티 검사를 우회해서 넘어간 케이스
// 슈퍼타입 & 서브타입 // 업케스팅 & 다운캐스팅
//상대적으로 슈퍼타입인 Dog에 dogAI를 업스케일링으로 갖고옴

let num1 = 10 as never; //이러면 또 never타입이 된다 number보다 아래에 있는 애들은 가능?
// num1 = 20; 이건 에러지 never가 number보다 작으니까

let num2 = 10 as unknown;
num2 = "hello";

// let num3 = 10 as string; // 같은 형제끼리는 타입단언 불가여서 이건 에러

// 다중단언
let num3 = 10 as unknown as string; // 10 과 unknown은 서브 슈퍼, unknow과 string은 서브와 슈퍼

// 아래는 의미가 다 같음
// let num4: 10 = 10;
// const num4 = 10;
const num4 = 10 as const; // 이거는 const 단언

// Non Null 단언
type Post = {
  title: string;
  author?: string;
  // ? 쓰면 있어도 되고 없어도 되는 선택적 프로퍼티가 되었디
};

let post: Post = {
  title: "게시글1",
};

const len = post.author!.length;
// 이렇게 느낌표를 해주면 undefined일 수 도있다고 정의하는것
