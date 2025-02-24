// - substring() : 문자열 안에 있는 문자를 추출하고자 할 때 사용가능한 메서드 함수
// - slice() : 문자열 안에 있는 문자를 추출하고자 할 때 사용가능한 메서드 함수
// **공통점 ⇒** 첫번째 인자값은 해당 문자열 내 시작하는 문자의 인덱스를 의미, 두번째 인자값은 찾아오고자 하는 문자열의 인덱스 +1
// **차이점 ⇒** slice는 문자열의 맨 뒤에서부터 문자를 찾아올 수 있도록 하는 음수값을 사용 가능
// substring은 음수 사용불가!

/*
// 배열 메서드!!
const subjects = ["html", "css", "js", "ts", "react"];
// subjects.splice(1);
// 배열의 특정 위치부터 원하는 개수만큼 아이템 값을 추출 할 때 사용할 수 있는 메서드 함수!!
// console.log(subjects);

console.log(subjects.splice(1, 3));
// todolist처럼 원본 데이터가 변경되어야 하는 상황에만 써야함 원본이 바뀌니깐!!
*/

const colors = ["red", "green", "blue", "white", "black"];
// console.log(colors.slice(2));
// => [ 'blue', 'white', 'black' ] 2번부터 시작이다
console.log(colors.slice(2, 4));
// => 2번부터 (4-1)까지다
console.log(colors);
