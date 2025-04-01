"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 제네릭 형식을 띄게 하고싶음
// 이러면 number가 되는거임
let varA; // 얘는 true
let varB; // 얘는 false
// 빈공간을 없애주는 함수 replace쓰자
function removeSpace(text) {
    // 타입변수를 조건부타입으로 만들어볼까?
    // 단순히 타입변수를 주면 타입가드를 쓸 수 없었으니깐
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    }
    else {
        return undefined;
    } // 미래의 return하는 값이 string일지 undefined일지 미스테리이기 때문에 any로 타입을 단언한 경우임
}
let result = removeSpace("hi im winter");
// result.toLowerCase(); // 오류! 이상하게 result가 string | boolean이다
let result2 = removeSpace(undefined);
console.log(result, result2);
