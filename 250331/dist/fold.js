"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fold = void 0;
const fold = (array, // 1> 배열을 받고
callback, // 2> 콜백함수를 받고
initValue // 3> 초기값을 받는다
) => {
    let result = initValue; // 일단 초기값을 넣는다
    for (let i = 0; i < array.length; ++i) {
        const value = array[i];
        result = callback(result, value);
    }
    return result;
};
exports.fold = fold;
