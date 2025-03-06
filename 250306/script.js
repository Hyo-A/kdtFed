const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas setting 초기화하기!

// context를 생성하기!
// context는 캔버스 위에 그림을 그리기 위한 환경요소의 실체?!?
// 문맥, 맥락, 목차 등등 사전적 정의
// getContext() canvas가 가지고 있는 함수

const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 50, 100);
// (a, b, c, d) a = x시작점 , b = y시작점, c = width값, d = hight값
// 각도개념 = 도씨 사용 불가 ⇒ 호도법 사용해야함

// 1. 사각형 그리기 ⇒ 내장함수 및 속성 지원 ⇒ fillRect(x, y, width, height)
//  선 그리기 ⇒ strokeRect(x, y, width, height)
//  지우기 ⇒ clearRect(x, y, width, height)
//  fillStyle = “색상”
//  strokeStyle = “색상”

/*
ctx.fillStyle = "rgb(200,0,0)";
ctx.strokeStyle = "rgb(0,0,0)";
ctx.fillRect(10, 10, 200, 100);
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "violet";
ctx.fillRect(50, 50, 120, 120);

ctx.clearRect(70, 80, 80, 45);
// 이만큼 뚫어버림


// 2. 삼각형 그리기 => beginPath()이제부터 이 지점부터 경로를 만들거라는 뜻
//  직선 경로를 설정할때 => lineTo(x,y)
//  설정한 직선 경로를 그리고 싶을 때 => stroke()
//  설정 및 그린 직선경로들을 활용해서 어떤 도형이 생성되었을 때, 그 안에 색을 넣고자 한다면 => fill()
//  현재 그림을 그리고 있는 위치에서 경로를 이동하고자 할 때 ⇒ moveTo(x,y)
//  현재 작업중인 그리기가 끝! ⇒ closePath()

ctx.beginPath();
// 나 시작할꺼야
ctx.moveTo(50, 50);
// 50에 50에서 점 찍음
ctx.lineTo(200, 200);
// 200에 200까지 설정해놨어
ctx.stroke();
// 설정한걸 그렸어


ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(170, 100);
ctx.lineTo(50, 120);
ctx.lineTo(120, 40);
ctx.lineTo(130, 150);
ctx.lineTo(50, 50);
ctx.closePath();
// 더이상 그림 안그릴게용
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(130, 150);
ctx.lineTo(460, 480);
ctx.lineTo(130, 480);
ctx.lineTo(130, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "violet";
ctx.fill();

ctx.clearRect(150, 250, 45, 45);


// 3. 원 및 호 만들기
//  아치형 구조 => arch
//  arc(x, y, r, startAngle, endAngle)

ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fillStyle = "#f0f000";
ctx.fill();


ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.arc(280, 100, 50, 0, Math.PI, false);

ctx.fillStyle = "#f000f0";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
ctx.closePath();
// 이어지지 않은 선이 저절로 시작점으로 선을 연결하여 마감해준다
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 0.3, false);
ctx.closePath();
ctx.stroke();


// 4. 타원 그리기
// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle,counterClockWise (true/false)

ctx.beginPath();
ctx.ellipse(200, 200, 90, 70, Math.PI * -0.4, 0, Math.PI * 1, false);
ctx.closePath();
ctx.fillStyle = "#ff2020";
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 200, 90, 50, Math.PI * -0.4, 0, Math.PI * 1, true);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.ellipse(200, 200, 90, 50, Math.PI * -0.4, 0, Math.PI * 1, false);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.save();
// 이 지점에서부터 저장하겠다
ctx.scale(1, 0.7);
ctx.arc(200, 150, 80, 0, Math.PI * 2, true);
ctx.stroke();
ctx.restore();
// 이 지점까지 저장하겠다 그리고 default로 돌아감


ctx.beginPath();
ctx.scale(1, 0.7);
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.stroke();


// 5. 곡선 그리기
//  TTF : 2차 배지에 // OTF : 3차 베지에
//  2차 베지에 : quadraticCurvto()
//  3차 베지에 : bezierCurvto(x조절점 1, y조절점1, x조절점2, y조절점2, 끝점x, 끝점y)

ctx.beginPath();
ctx.moveTo(50, 200);
//첫점
ctx.quadraticCurveTo(200, 50, 350, 200);
// 조절점 x, y, 끝점 x, y
ctx.stroke();


ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(100, 50, 150, 100);
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.quadraticCurveTo(300, 50, 350, 100);
ctx.quadraticCurveTo(400, 200, 400, 300);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.bezierCurveTo(400, 250, 570, 100, 610, 250);
ctx.stroke();


// 6. 특정경로값을 가져와서 사용하고자 할때!

// new Path2D() => 이를 통해 만들어놓은 인스턴스 객체는 이 안의 함수를 통해 언제라도 값을 찾아올 숭 있다

const triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();
ctx.stroke(triangle);

const circle = new Path2D();
circle.arc(200, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = "#0f0";
ctx.fill(circle);
*/
