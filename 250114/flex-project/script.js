// 목표 : 사용자가 스크롤을 내렸을 때, header 안에 header background color // banner height를 변경 => 가상클래스 사용

// 1. 사용자가 지금 스크롤을 내렸음
// > 스크롤은 브라우저가 가지고 있는 요소
// > 브라우저야 지금 스크롤이 내려갔니?

// 2. header는 html 안에서 header라는 태그를 사용하고 있는 요소야

// 3. 사용자가 스크롤을 내렸으니깐, active 클래스를 header에게 적용시켜

// 브라우저가 가지고 있는 내장객체 scroll을 다룸

// document.querySelector();
// 개발자가 만든 문서를 다룸

/* scroll event*/
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});

/* slick slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    speed: 300,
  });
});
