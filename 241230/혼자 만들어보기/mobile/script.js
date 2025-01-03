/* 영단어가 부족한 케이스 */
/* 내가 현재 사용하고자 하는 문법 속 속성 및 메서드 함수 */

/* 영단어는 대략 알지만, 언제 어떻게 사용해야하는지 감을 못잡음 */

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;

for (let i = 0; i < slideCount; i++) {
  const cloneSlide = slide[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slides.append(cloneSlide);
}

for (let i = slideCount - 1; i >= 0; i--) {
  const cloneSlide = slide[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slides.prepend(cloneSlide);
}
