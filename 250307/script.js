const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
/*
ctx.font = "60px Arial";
ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);


ctx.font = "italic 60px Arial";
ctx.fillText("Javascript", 50, 70);

ctx.font = "bold 60px Arial";
ctx.fillText("Typescript", 50, 150);


const img = new Image();
img.addEventListener("load", () => {
  ctx.drawImage(img, 100, 50, 250, 350, 160, 100, 250, 350);
  // (img, 100, 50, 250, 350, 160, 100, 250, 350)
  // 내 이미지, 기준x 기준y 원하는width 원하는 height 이동x 이동y 보이게되는width 보이게되는 height
});
img.src = "./images/cat3.jpg";

// masking : 서로 다른 요소들이 혼합되지 않도록 별개의 요소로 관리하게 위해서 조치하는 행위

// clipping mask : 서로 다른 복수의 이미지 요소들을 원하는 좌표에 혼합해서 사용할 수 있도록 하는 행위.기능

const img = new Image();
img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "./images/bird2.jpg";

ctx.beginPath();
ctx.arc(350, 350, 200, 0, Math.PI * 2);
ctx.clip();


// globalAlpha = "value"

// ctx.globalAlpha = 0.3; // 이케 전역으로 설정도 되구, rgba로 개별 alpha(투명도)값을 준거임
ctx.fillStyle = "rgba(0, 140, 255, 0.3)";
ctx.fillRect(50, 50, 100, 50);

ctx.fillStyle = "rgb(247, 131, 208)";
ctx.fillRect(150, 50, 100, 50);

ctx.fillStyle = "#3cd369";
ctx.fillRect(200, 50, 100, 50);


ctx.fillStyle = "rgba(0, 140, 255, 0.2)";
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = "rgba(0, 140, 255, 0.2)";
ctx.fillRect(100, 50, 100, 50);
ctx.fillStyle = "rgba(0, 140, 255, 0.4)";
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = "rgba(0, 140, 255, 0.4)";
ctx.fillRect(200, 50, 100, 50);
ctx.fillStyle = "rgba(0, 140, 255, 0.6)";
ctx.fillRect(250, 50, 50, 50);


// gradient 컬러 적용하기!
// createLinearGradient(x1, y1, x2, y2) 이러면 그라디언트 적용?!
// addColorStop(position, color)

const linearGrad = ctx.createLinearGradient(0, 0, 0, 800);
linearGrad.addColorStop(0, "#000");
linearGrad.addColorStop(0.6, "#ccc");
linearGrad.addColorStop(1, "#fff");
ctx.fillStyle = linearGrad;
ctx.fillRect(0, 0, 800, 800);

*/
//createRadialGradient(55, 60, 10, 80, 90, 100) // 55, 60, 10 작은원1 // 80, 90, 100 큰원2
ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

const radGrad = ctx.createRadialGradient(255, 260, 10, 280, 290, 100);
radGrad.addColorStop(0, "#fff");
radGrad.addColorStop(0.4, "#ff0");
radGrad.addColorStop(1, "#3cd369");

ctx.fillStyle = radGrad;
ctx.arc(300, 300, 80, 0, Math.PI * 2, false);
ctx.fill();

/*
// 패턴 만듥기!!
const img = new Image();
img.addEventListener("load", () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});
img.src = "./images/pattern1.jpg";


// canvas API를 활용해서 선을 그린다고 했을 때, 선의 마감처리는 총 3가지중 하나로 선택할 수 있음!

// butt : 기본 디자인 => 단면처리
// round : 선 너비 = 두께의 1/2 만큼을 반지름으로 하는 원을 선 양쪽에 붙여넣는다!
// square : 선 너비의 1/2 만큼을 양쪽 끝에 붙여넣는다

const lineCap = ["butt", "round", "square"];
const lineJoin = ["bevel", "miter", "round"];

ctx.strokeStyle = "#222";

lineCap.forEach((line, index) => {
  ctx.beginPath();
  ctx.lineWidth = 20;
  // ctx.lineCap = lineCap[index];
  ctx.lineJoin = lineJoin[index];
  ctx.moveTo(60, 60 * index + 50);
  ctx.lineTo(100, 60 * index + 15);
  ctx.lineTo(140, 60 * index + 50);
  ctx.stroke();
});
*/
