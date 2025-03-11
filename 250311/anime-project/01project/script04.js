const staggerWrap = document.querySelector("ul");
const [col, row] = [9, 11]; // 3헹 9열인데 열을 먼저 쓴거임 // because anime는 열을 먼저 쓰니가
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

anime({
  targets: "ul li",
  easing: "easeOutBounce",
  duration: 1000,
  scale: anime.stagger([0.3, 1], {
    grid: [9, 11],
    from: "center",
    axis: "z", // 축을 지정해주는 axis // default는 깊이감을 만들어주는 z축이다
  }),
}); // anime 순서도 중요 li가 만들어진 후에 썼잖아 지금
