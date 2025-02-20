// regExp = regular Expression = 정규표현식
// 문자열 + 정규표현식 + 배열

// 1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의
// 2.플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션을 적용할 수 있음
// 3.클래스 : 패턴에 부가적인 정보를 적용하고 싶을 때 사용할 수 있는 요소

// decimal
// const regExp = /\d{3}/;
// //이렇게 슬래시를 두번치면 패턴이 된다 /\d{3}/는 숫자 세개로 이루어진 패턴 그리고 이것은 객채의 type이다 => 메서드 함수를 쓸 수 있다는것
// 기본 베이스가 문자열에서 찾아주는것!!!
// const regExp = new RegExp(/\d{3/);
// RegExp는 내장함수로 // const regExp = /\d{3}/;를 위처럼 쓸 수 있다

// test는 일치하는지 일치하지 않는지를 boolean 값으로 반환
// console.log(regExp.test("Hello"));
// console.log(regExp.test("123"));

// 내장객체 > class 혹은 생성자함수
// new라는 예약어!

// let str = "ES2025 is powerful";
// const pattern = /ES2025/;
// console.log(str.match(pattern));
// match는 인자값으로 패턴을 넣고, 패턴과 일치하는지
// console.log(str.replace(pattern, "love"));
// replace는 첫번째 인자값의 위치에 두번째 인자값을 대처시켜준다

// const str = "Love is Power777!";
// const pattern = /love/i;
// international의 약어인 i라는 플래그를 쓴다! 그러면 대소문자를 구분X

// console.log(pattern.test(str));

// const pattern = /Power\d{3}/;
// const pattern = /Power\d\d\d/; 이것도 가능하다

// console.log(str.match(pattern));

const hello = "ehllo, everyone.";

// const pattern = /^H/i;
// H나 h로 시작하는 문자열
// const pattern = /com$/;
// com 으로 끝나는 문자열

// console.log(pattern.test(hello));

// console.log(/one.$/.test(hello));
// console.log(/one$/.test(hello));
// console.log(/e.$/.test(hello));

// const str = "ES2025";

// console.log(str.match(/^[0-9]/g));
// console.log(str.match(/[^0-9]/g));
//**^[범위입력]** ⇒ 여기서 ^는? 범위에 해당하는 요소로 시작하는지를 boolean값으로 찾아옴!
//**[^범위입력]** ⇒ 여기서 ^는? 범위에 해당하지 않는 모든 요소를 찾아오는것!

// const str = "Ooooooops";

// console.log(str.match(/o{2,4}/i));

const number = /^[0-9]+$/;
//[0-9]로 시작하고 끝나는 몇자리인지는 상관 X
// const positive = /^[1-9]+$/;
// const positive = /^[1-9]\d+$/;
const positive = /^[1-9]\d*$/;

const nagative = /^\-[1-9]\d*$/;
// -를 붙히고싶으면 \- 이렇게 표기하자

const engword = /^[a-zA-Z]+$/;
// [a-zA-Z]소문자, 대문자 a부터 z 까지

const engandword = /^[a-zA-Z0-9]+$/;

const korea = /^[가.힣]+$/;
//[가.히]로 자음 시작과 모음 시작인 가 ~ 자음 끝과 모음 끝과 바침의 끝 까지
const koreanandeng = /^[가.힣a-zA-Z]+$/;
