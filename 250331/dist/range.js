"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
// 선언형 방식
const range = (from, to) => {
    return from < to ? [from, ...(0, exports.range)(from + 1, to)] : [];
    // 재귀함수 형태 from이 to보다 작을때 from부터 전개연산자로 +1씩 하여 to까지
};
exports.range = range;
