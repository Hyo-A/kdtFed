interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnail?: string;
}

// const withThumbnailPost: Required<Post> = {
//   title: "밥은 먹고 다니냐?",
//   tags: ["소고기국밥"],
//   content: "달래해장국",
//   // thumbnail: "https/www.naver.com",
// };

const withThumbnailPost: Readonly<Post> = {
  title: "밥은 먹고 다니냐?",
  tags: ["소고기국밥"],
  content: "달래해장국",
  // thumbnail: "https/www.naver.com",
};

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// withThumbnailPost.content = "맘스터치"; //오류! 읽기전용임

// type Required<T> = {
//   [key in keyof T]-?: T[key]; // 물음표를 쓰지 않겠다 required
// };

// Partial타입 써서 옵셔널 프로퍼티 없이 존재하지 않는 값을 옵셔널한 값으로 바꿔보자!

// const draft: Partial<Post> = {
//   title: "밥먹자",
//   content: "소고기",
// };

// type Partial01<T> = {
//   [key in keyof T]?: T[key];
// };
