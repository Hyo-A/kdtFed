const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 개구리그리기 예제
ctx.beginPath();
ctx.scale(1, 0.7);
ctx.arc(150, 150, 80, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 80, 25, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 25, 0, Math.PI * 2, false);
ctx.fillStyle = "#fff";
ctx.fill();
ctx.strokeStyle = "green";
ctx.lineWidth = "10";
ctx.stroke();

ctx.beginPath();
ctx.arc(120, 80, 15, 0, Math.PI * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 15, 0, Math.PI * 2, false);
ctx.fillStyle = "#000";
ctx.fill();

ctx.beginPath();
ctx.arc(110, 80, 5, 0, Math.PI * 2, false);
ctx.moveTo(170, 80);
ctx.arc(170, 80, 5, 0, Math.PI * 2, false);
ctx.fillStyle = "#fff";
ctx.fill();

ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI, false);
ctx.strokeStyle = "#000";
ctx.lineWidth = "3";
ctx.fillStyle = "#d00";
ctx.fill();
ctx.closePath();
ctx.stroke();
