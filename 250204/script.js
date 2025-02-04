/*
1. 변수
2. 자료형
3. 형변환
4. 연산자
5. 조건문
6. 반복문
7. 함수
8. DOM
9. EVENT
- 브라우저를 통해서 특정 웹페이지 도착
- 사용자가 하는 행위 모든것
- 페이지를 확인 // 버튼 클릭 // 스크롤 이동
- 이벤트를 설정
- event handler ⇒ onclick이 과거 스타일
- **addEventListener( )**이 최근 스타일
- 이벤트 설정 > 이벤트 실행 > 로컬 컴퓨터 > 메모리 공간 > 이벤트 객체 생성 > 이벤트 객체를 참조변수 값으로 찾아올 수 있다
- 이벤트 객체 > **preventDefault( )**가 유일한 메서드 함수
*/

//## 이벤트 속성 종류

// 1. 문서(document)로딩 이벤트
// - **load** : 개발자가 작성한 문서를 모두 로딩하면 실행하도록 하는 이벤트 종류
// window.onload = alert("안녕하세요!");
// window.onload = () => {};
// - resize : 디바이스 영향 > 문서의 화면 크기가 변경되어질 때 사용하는 이벤트

// 2. 마우스(mouse) 이벤트
// - **click** : 버튼이나 특정 요소들을 클릭했을 때 실행되도록 하는 이벤트
// const button = document.querySelector("button");

// // button.onclick = function () {
// //   document.body.style.backgroundColor = "green";
// // };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });
// - **dbclick** : 버튼이나 특정 요소들을 더블 클릭했을 때 실행되도록 하는 이벤트
// - **mouseover** : 특정 요소들 위에 마우스를 올렸을 때(*버블링 기본 적용)
// - **mouseout** : 특정 요소들 위에 마우스를  떠나게 했을 때(*버블링 기본 적용)
// - **mouseenter** : 특정 요소들 위에 마우스를 올렸을 때(*버블링 적용X)
// - **mouseleave** : 특정 요소들 위에 마우스를  떠나게 했을 때(*버블링 적용X)

// 3. 키보드 이벤트
// - **keydown** : 사용자가 키를 누르고 있는 동안 발생되는 이벤트
document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
  console.log(event.code);
});

// - **keyup**: 사용자가 키를 눌렀다가 키에서 손을 뗄 때 발생하는 이벤트
// keypress라는 소멸되어가는 이벤트도 있음..
