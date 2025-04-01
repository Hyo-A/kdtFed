// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number; // 만약 age가 추가된다면?
//   };
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "hyoa",
//     age: 30, // 만약 age가 추가된다면? => 여기저기 다 추가해야하는데..
//     // 원본이 바뀐다고 여기저기 다 추가하기 싫다 이거야
//   },
// };

// // post["author"]; //객체 안의 키를 찾아왔으니 그 안의 키를 또 찾아올 수 잇는데?
// // author가 마치 like 인덱스 값처럼 행동하는것터럼 보임

// const authorKey = "author";

// // 우리는 post 안의 author를 받아서 id, name을 추출해 출력하는 함수 만들거임
// // const printAuthor = (author: { id: number; name: string; age: number }) => {
// //   console.log(`${author.id}-${author.name}`);
// // };
// const printAuthor = (author: Post["author"]) => {
//   console.log(`${author.id}-${author.name}`);
// };

// // 타입별칭 만들건데 되게 플렉서블하다
// type PostList = {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }[]; // 객체가 모여있는 배열타입을 만듦

// type Tup = [number, string, boolean];
// type Tup0 = Tup[0]; // 이게바로 indexed 타입
// type Tup1 = Tup[1];
// type Tup2 = Tup[2];

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

type Person = typeof person;

const person = {
  name: "hyoa",
  age: 27,
  location: "seoul", // 원본 데이터에 내용이 추가된거임
  // 그럼 interface에서도, 변수 인자값에서도 계속 넣어줘야하는데 불편 -> keyof로 해결!
  // keyof는 "타입"에만 쓰는 용도라는것 주의!
};

const getPropertyKey = (person: Person, key: keyof typeof person) => {
  // 완전 말장난같군
  return person[key];
};

// const getPropertyKey = (person: Person, key: "name" | "age" | "location") => {
//   return person[key];
// };
