/*
// const str = "hello";
// console.log(str.length);

// 문자열은 유사배열이다!

const str = "Good Morning😋";
// 위 문장에서 0번째 index는 G이다 // 문자열은 배열과 유사하지만 같지는 않다
// console.log(str.length);

console.log(str.charAt(3));
// charAt(3)는 문자열에서의 3번째 index를 찾아온다
console.log(str[3]);
// 근데 지금은 대괄호표기법으로도 찾아올 수 있다! 왜냐면 유사배열으로서 인정받기 때문...
*/

const string = prompt("문자열을 입력하세요!");
const letter = prompt("어떤 문자를 체크하겠습니까?");

const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count += 1;
    }
  }
  return count;
};

const result = counting(string, letter);

alert(`${string}에는 ${letter}가 ${result}개 있습니다`);
// document.write(`${string}에는 ${letter}가 ${result}개 있습니다`);
