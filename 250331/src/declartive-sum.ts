// 선언형 방식 1부터 100까지 더하기
import { range } from "./range";
import { fold } from "./fold";

let numbers = range(1, 101);
// range는 다른 파일에서 a부터 b-1까지 숫자 찾아오는 함수로 import 해놈
let result = fold(numbers, (result, value) => result + value, 0);

console.log(result);
