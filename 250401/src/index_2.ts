interface IStudent {
  type: "student"; // 리터럴타입
  school: string;
}

interface IDeveloper {
  type: "developer";
  skill: string;
}

// 나는 두 인터페이스의 유니온 요소를 만들고 싶어
interface IUser<T> {
  name: string;
  // profile: IStudent | IDeveloper; // |버티컬바는 이거 또는 이거라는 의미
  profile: T; // 이러면 그냥 직접 쓴 값으로 들어온다는 의미
}

const goToSchool = (user: IUser<IStudent>) => {
  // if (user.profile.type !== "student") {
  //   console.log("잘 못 오셨습니다!");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school}으로 등교완료!`);
};

const developerUser: IUser<IDeveloper> = {
  name: "hyoa",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: IUser<IStudent> = {
  name: "hyoa",
  profile: {
    type: "student",
    school: "EZEN",
  },
};

goToSchool(studentUser);
