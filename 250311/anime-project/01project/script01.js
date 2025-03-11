anime({
  targets: ".box1", // 대상 찾아온거임
  translateX: 250,
  easing: "easeOutElastic",
  background: "rgb(52, 22, 161)",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
  duration: 2000,
  width: {
    value: "-=20px", // 28 - 20 = '8px'
    duration: 1800,
    easing: "easeInOutSine",
  },
  rotate: {
    value: "+=2turn", // 0 + 2 = '2turn'
    duration: 1800,
    easing: "easeInOutSine",
  },
});

anime({
  targets: ".box2",
  translateX: 280,
  translateY: 300,
  loop: true,
  direction: "alternate",
  duration: 2000,
  easing: "easeInQuint",
  delay: 1000,
});

anime({
  targets: ".box3",
  width: {
    value: 400,
    delay: 1000,
    duration: 4000,
  },
  rotate: {
    value: 360,
    duration: 4000,
    loop: true,
    direction: "alternate",
  },
});
