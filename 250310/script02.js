const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ccc";
ctx.fillRect(100, 50, 100, 100);

// source-in
ctx.globalCompositeOperation = "xor";
// global~~는?

// source-over은 나중에 그려진 도형이 올라옴
// source-in은 source도형을 기준으로 source 도형과 교차되는 영역만 살림
// source-out은 source도형을 기준으로 source 도형과 교차되지읺는 영역만 살림
// source-atop은 source도형과 교차가 되어지는 영역은 살리고 동시에 destination영역을 기준으로 나머지 영역은 불투명하게??

// destination-over은 먼저 그려진 도형이 올라움
// destination-in은 destination도형을 기준으로 destination 도형과 교차되는 영역만 살림
// destination-out은 destination도형을 기준으로 destination 도형과 교차되지읺는 영역만 살림
// destination-atop은 destination도형과 교차가 되어지는 영역은 살리고 동시에 source영역을 기준으로 나머지 영역은 불투명하게??

// lighter는 감산혼합 기법으로 교차되는 영역을 밝게
// darken는 가산혼합 기법으로 교차되는 영역을 어둡게
// copy는 나중에 그랴진 source만 출력하고자 할 때 사용되는 속성
// xor : source deastiojaion 교차되는 영역을 아예 없애버리는 효과 나머지영역은 유지,

ctx.beginPath();
ctx.fillStyle = "#222";
ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
ctx.fill();
