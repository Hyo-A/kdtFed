const canvas = document.querySelector("canvas");
const toolbar = document.querySelector("#toolbar");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;
// offsetHeight얼마만큼 떨어진 높이값인가
// console.log(canvas);

const canvasOffsetY = canvas.offsetTop;
console.log(canvasOffsetY);

const ctx = canvas.getContext("2d");

let isDrawing = false;
// 이거는 중복그리기 방지
let startX;
let startY;
let lineWidth = 2;

toolbar.addEventListener("change", (e) => {
  // console.log(e, e.target, e.target.id, e.target.value);
  if (e.target.id === "stroke") {
    // 만약 선의 굵기를 바꿨다면
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown", (e) => {
  // mousedown은 꾸우욱 내 손가락을 오버해놨다 떼는것!!!
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
  // clientX/Y는 이벤트의 x,y 좌표값
  // console.log(startX, startY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) {
    // 이건 mousedown이 실행되지 않았을 경우에는?
    return;
  } else {
    ctx.lineWidth = lineWidth;
    // 앞의 라인위드는 캔버스 속성 뒤는 우리가 정해놓은 위드
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => {
  // mouseup은 꾸우욱 내 손가락을 오버해놨다 떼는것!!!
  isDrawing = false;
  ctx.beginPath();
});
