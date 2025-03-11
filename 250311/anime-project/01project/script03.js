anime({
  targets: "ul li",
  translateY: (el, i) => {
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  }, // 여기서는 el로 각 8개의 li를 찾아옴 마치 forEach
  easing: "linear",
  duration: 1500,
  opacity: 1,
  // delay: (el, i) => {
  //   // 여기서는 el로 각 8개의 li를 찾아옴 마치 forEach
  //   return i * 300;
  // },
  delay: anime.stagger(300), // 얘는 300밀리초 시차를 가지고 delay를 넣어준다?
});
