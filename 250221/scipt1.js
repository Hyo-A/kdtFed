const string = prompt("영문 소문자로 된 문자열을 입력해주세요");

// const firstCh = string[0].toUpperCase();
// const remainString = string.slice(1);
// const result = firstCh + remainString;

// [...] => 전개연산자, 무언가를 풀어헤쳐줌
// split() => 문자열을 배열로 바꿔주는 역할 [...]
// join() => 배열을 문자열로 바꿔주는 역할

// 서로다른 두개의 배열 혹은 유사배열을 1개의 배열로 합칠때?
// concat() [...]

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
// join() 와 join("") 의 결과가 다른데.. ""는 구분자로서 문자로 바꿔오는 기능을 한다
// ""가 없다면 배열 안에있는 ,(space) 도 찾아오게 되기 때문데 ""를 써서 문자만 찾아오게 하고있다

document.write(result);
