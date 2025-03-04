const xhr = new XMLHttpRequest();
xhr.open("GET", "name.json", true);
//  open()은 서버와의 통신? get 방식으로 name.json 파일을 비동기적 방식으로 가지고오기(false는 동기적 방식)
xhr.send();
// send()를 써서 서버로 보내기

//0: 아직 클라이언트가 서버애 아무런 요청도 하지 않은 상태
//1: 클라이언트가 서버에게 자료를 요청하고 성공한 상태
//2: 클라이언트가 서버에게 자료를 요청을 했고, 이에 대한 서버의 응답 회신에 헤더로 도착한 상태
//3: 서버가 클라이언트에게 자료를 전달해서 해당 자료가 클라이언트의 로컬 컴푸터로 로딩중인 상태
//4: 서버가 전달한 데이터 자료가 정상적으로 클라이언트에게 잘 도착했고, 클라이언트 입장에서 해당 데이터를 완전히 사용할 수 있는 단계

// onreadystatechange이번트 발생!

xhr.addEventListener("readystatechange", () => {
  // console.log(xhr.readyState);  => 2,3,4 가 쭈르륵 시행된다!
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    // console.log(student); => json형태의 파일이 객체형식으로 가져와진다?!
    const result = document.querySelector("#result");

    result.innerHTML = `${student.name}학생은 ${student.grade}학년입니다`;
  }
});
