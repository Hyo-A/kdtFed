// 사용자에게 12달중 좋아하는 월의 정보를 입력받으세요 ex.1=>1월 7=>7월

// 입력받은 정보가 만약 12~2월 : 스키의 계절, 겨울을 좋아하시네요!

// 3월~5월 : 책 읽기 좋은 봄을 좋아하시네요!

// 6월~8월 : 여행가기 좋은 여름을 좋아하시네요!

// 9월~11월 : 선선한 날씨인 가을을 좋아하시네요!

// if 조건문을 활용해서 위 코드를 출력!
// ai 그냥 쓰지 말기

// const score = prompt("내 인생점수");

// const Month = prompt("내가 가장 좋아하는 월은 몇월인가요?");

// if (Month !== "" || Month !== null || 1 <= parseInt(Month) <= 12) {
//   if (parseInt(Month) >= 3 ) {
//     alert("책 읽기 좋은 봄을 좋아하시네요!");
//   } else if (parseInt(Month) >= 6) {
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//   } else if (parseInt(Month) >= 9) {
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//   }
//   else {
//     alert("스키의 계절, 겨울을 좋아하시네요!");
//   }
// }

let favoriteMonth = prompt("좋아하는 월을 입력하세요!");

if (favoriteMonth !== "" || favoriteMonth !== null) {
  favoriteMonth = parseInt(favoriteMonth);
  if (3 <= favoriteMonth && favoriteMonth <= 5) {
    alert("책 읽기 좋은 봄을 좋아하시네요!");
  } else if (6 <= favoriteMonth && favoriteMonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요!");
  } else if (9 <= favoriteMonth && favoriteMonth <= 11) {
    alert("선선한 날씨인 가을을 좋아하시네요!");
  } else if (
    isNaN(favoriteMonth) ||
    favoriteMonth <= 0 ||
    13 <= favoriteMonth
  ) {
    alert("정상적인 월을 입력하세요");
  } else {
    alert("스키의 계절, 겨울을 좋아하시네요!");
  }

  window.location.reload();
}
