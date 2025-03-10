const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

console.log(canvas);
const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#222",
};

const drawCircle = () => {
  ctx.beginPath();
  ctx.fillStyle = circle.color;
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fill();
};

const move = () => {
  // ctx.clearRect(0, 0, canvas.width, canvas.height); // 이러면 잔상이 안남지 왱
  // 왜나면 move의 실행때마다 canvas 안에있는 잔상을 계속 지우니까!!!

  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawCircle();
  circle.x += circle.dx;
  circle.y += circle.dy;

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = -circle.dx;
    // circle.x -= circle.dx; 도 가능한데 왜지
  }
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = -circle.dy;
    // circle.dx -= circle.dx; 도 가능한데 왜지
  }

  // 재귀함수 => recursion
  requestAnimationFrame(move);
  // 계속 move를 무한으로다가 호출시키는 엄청난 효과
};

move();
