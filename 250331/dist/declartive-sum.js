"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 선언형 방식 1부터 100까지 더하기
const range_1 = require("./range");
const fold_1 = require("./fold");
let numbers = (0, range_1.range)(1, 101);
// range는 다른 파일에서 a부터 b-1까지 숫자 찾아오는 함수로 import 해놈
let result = (0, fold_1.fold)(numbers, (result, value) => result + value, 0);
console.log(result);
