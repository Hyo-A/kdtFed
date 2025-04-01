"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const goToSchool = (user) => {
    // if (user.profile.type !== "student") {
    //   console.log("잘 못 오셨습니다!");
    //   return;
    // }
    const school = user.profile.school;
    console.log(`${school}으로 등교완료!`);
};
const developerUser = {
    name: "hyoa",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "hyoa",
    profile: {
        type: "student",
        school: "EZEN",
    },
};
goToSchool(studentUser);
