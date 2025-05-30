"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number
const num1 = 123;
// type은 123
let num2 = 456;
// type은 number
num2 = 789;
// num2 = "123";  // num2는 number 타입이기 때문에 문자로 재선언 불가!!
let num3 = 700;
// : number 는 타입주석이라 부르고 이걸 붙히는게 원칙임
// 하지만 번잡하기 때문에 생략을 하기도 함
// string
let str1 = "Hello";
// str1 = 1; // 얘는 당연히 불가능하지
str1 = "World";
let str2 = "Hyoa";
// 타입에 이케 Hyoa같이 문자열을 써줘버린다면?? 재선언 불가! Hyoa만 가능!
// 문자열로 타입지정을 리터럴 타입이라 함
// 원시타입
// boolean
let bool = true;
bool = false;
// null 현존하지 않는 값 타입으로서 존재한다
let nulltest = null;
nulltest = null;
// undefined
let undefinedtest = undefined;
undefinedtest = undefined;
//
// 여기부터 어려워용 예외사항
//
let num10 = 10;
let test10;
// num10 = test10; // 얘는 에러로 나옴
test10 = num10; // 얘는 가능????
// 이는 타입의 대수타입 이라고 부른다!!
// 큰 범위의 타입은 작은 법위의 타입을 받아줄 수 있지만 // 작은 타입은 큰 타입을 받지 X
let numArr = [1, 2, 3];
// 얘의 타입추론을 해주는데 배열안에 number가 든 타입이라네?
// numArr = ["1", 2, 3]; // 이렇게 중간에 number가 아닌 애는 넣을수 없다는거
let strArr = ["hello", "world"];
let boolArr = [true, false, true];
// 제네릭타입
// let bool1Arr: Array<boolean> = [true, false, true]; // 위의 boolArr과 예는 같은 의미임
let bool1Arr = [true, false, true]; //: Array<boolean | number>는 제네릭 형태로 boolean, number을 다 받을수 있게 해줌!
// 유니온타입
let muliArr = [1, "hello"];
// 중첩배열
let doubleArr = [[1, 2, 3], [4, 5], [6]];
// : number[]숫자를 가진 배열이 있는데 []이 위를 감싸는 배열이 또 있다
// 튜플타입
let tupl = [1, "tupl", 2, null];
// 애들은 number만 두개 넣어야 하는거임 초과하면 안대
// tupl = ["1", 3]; // 얘는 안되겠지
tupl.push(1);
// 이 순간 엄격함이 깨짐 // 속수무책!! 결국 배열일 뿐...
// 튜플타입 이럴때 좋아요
const users = [
    ["David", 1],
    ["Hyoa", 2],
    ["Mandu", 3],
    ["Doyoung", 4],
    // [5, "Young7"],
];
// 이 경우에는 string, number의 타입을 반드시 쓰고싶은거임 그렇게에 규칙을 정해서 타입 정의해주는게 좋지
let user = {
    id: 1,
    name: "David",
};
// type이 object면 너는 객체야 이케 알려준것 뿐이지 안에 뭐가 들어있는지를 밖에 써서 뺄수 없다..
// 이렇게 쓸모없을수가 없는 타입인거임
// user.id; // 불가능..?
let user1 = {
    id: 1,
    name: "David",
};
// 또 User인터페이스 쓰면 위와 인과관계 없다고 쳐줌
let user2 = {
    id: 3,
    name: "Hyoa",
};
let user3 = {
    id: 4,
    name: "Brown",
};
let user4 = {
    id: 5,
};
// type Usernick = {}
// 인터페이스와 다르게 타입별칭으로는 동일한 이름을 선언불가능임
const test12 = () => {
    // 이게 스코프가 다른 상황인거임 스코프 다르니 사용가능해짐
};
let user5 = {
    id: 6,
    name: "Mandu",
    nickname: "puppy",
    birth: "2018.02.02",
    bio: "초코푸들",
    location: "경기도 용인시",
};
// type CountryCode = {
//   // korea: string;
//   // UnitedState: string;
//   // UnitedKingdom: string;
//   [key: string]: string;
//   // 키와 밸루가 둘다 문자이기만 하면 된다는 말임
//   // index signiture
// };
let countryCode = {
    korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
    Japan: "jp", // 나라가 추가되면 올라가서 type 추가를 해야하는거야? 타입 시그니쳐를 쓰면 됨
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "Hyoa",
    role: Role.ADMIN,
};
