const staggerWrap = document.querySelector("ul");
const [col, row] = [9, 5]; // 3헹 9열인데 열을 먼저 쓴거임 // because anime는 열을 먼저 쓰니가
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
});

tl.add({
  scale: [
    { value: 0.1, easing: "easeInBounce", duration: 1200 },
    { value: 1, easing: "easeOutBounce", duration: 1200 },
  ],
}).add({
  translateX: anime.stagger(10, { grid: [9, 5], from: "center", axis: "x" }),
  translateY: anime.stagger(10, { grid: [9, 5], from: "center", axis: "y" }),
  rotate: anime.stagger([0, 90], { grid: [9, 5], from: "center", axis: "x" }),
});
