// 사용자에게 로그인을 허락해주고자 합니다.

// 시용자가 로그인을 하기 위한 정상적인 정보는 id = ezen1234, pw = 1234567로 설정
// 사용자에게 id와 pw를 받아서 정상적인 정보라면, "00님 반갑습니다" 라는 알립창이 나오게 해주세요.
// 만약 id가 잘못된 정보라면, "id가 일치하지 않습니다." 라는 메세지를 알림창으로 전달해주세요
// 만약 pw가 잘못된 정보라면, "pw가 일치하지 않습니다." 라는 메세지를 알림창으로 전달해주세요

// let useName = prompt("사용자 이름을 입력해주세요");
// let idCall = prompt("아이디를 입력해 주세요");
// let pwCall = prompt("비밀번호를 입력해 주세요");

// if (idCall !== "" || idCall !== null || pwcall !== "" || pwCall !== null) {
//   if (idCall == "ezen1234" && pwCall == "1234567") {
//     alert(`${useName}님 반갑습니다`);
//   } else if (idCall !== "ezen1234") {
//     alert("id가 일치하지 않습니다.");
//   } else if (pwCall !== "1234567") {
//     alert("pw가 일치하지 않습니다.");
//   }
//   window.location.reload();
// } else {
//   alert("다시 입력해주세요");
// }

/* server */
const id = "ezen1234";
const pw = "1234567";

/* client */
const userName = prompt("당신의 이름을 입력하세요");
if (userName !== "" && userName !== null) {
  const userID = prompt(`${userName}님 아이디를 입력하세요!`);
  if (userID !== "" && userID !== null) {
    if (userID === id) {
      const userPW = prompt(`${userName}님 반갑습니다 pw를 입력하세요`);
      if (userPW === pw) {
        alert(`${userName}님 오늘도 좋은 하루 되세요!`);
      } else {
        alert("pw가 일치하지 않습니다");
        location.reload();
      }
    } else {
      alert("id가 일치하지 않습니다");
    }
  } else {
    alert("아이디를 입력하세요!");
    location.reload();
  }
  console.log(userName);
} else {
  alert("정상적인 이름을 입력하세요!");
  location.reload();
}
