interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

// const legacyPost: Pick<Post, "title" | "content"> = {
//   // post라는 요소안에서 가져오고싶은것만 pick하기
//   title: "힘내자",
//   content: "할수있다",
// };

// type Pick<T, K extends keyof T> = {
//   // T에서 key값만 뽑아내서 K에 상속되어질지 확인한다음
//   // 조건에 맞는 애들만 뽑아오기
//   [key in K]: T[key];
// };

// Omit => 생략하다
const noTitlePost: Omit<Post, "title"> = {
  // omit은 post를 대상으로 "title 빼고 갖고와줌"
  content: "",
  tags: [],
  thumbnailURL: "string",
};

type A = Exclude<string | boolean, string>; // 이러면 boolean만 남겠지

type B = Extract<string | boolean, string>; // 이러면 string을 추출해줌
