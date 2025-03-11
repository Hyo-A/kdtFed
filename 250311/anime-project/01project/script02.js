// 타임라인을 만들자
const tl = anime.timeline({
  easing: "linear",
  duration: 1000,
});

tl.add({
  targets: ".circle1",
  translateX: 500,
})
  .add({
    // add 넣으면 그 다음번째 순번을 매겨준다
    targets: ".circle1",
    translateY: 500,
  })
  .add({
    targets: ".circle1",
    translateX: 0,
  })
  .add({
    targets: ".circle1",
    translateY: 0,
  })
  .add({
    targets: ".circle2",
    rotate: 360,
    borderRadius: 0,
    scale: 1.5,
  });
