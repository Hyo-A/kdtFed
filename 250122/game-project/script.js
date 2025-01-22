const board = document.querySelector(".board");
const h1 = document.createElement("h1");
//createElement = html안에 태그를 만들거야
const itemImg = document.createElement("img");
const resultImg = document.createElement("img");

h1.innerText = "컴퓨터와 가위.바위.보 맞추기 게임!";

const userChoice = prompt("가위, 바위, 보중 하나를 선택하세요", "가위");
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 선택하셨습니다!");
    location.reload();
}

// Math.random();
// random : 실수의 값을 0<난수<1 로 반환해준다
// Math.ceil(Math.random()*3)
//  1 < x*3 <= 2 =>  Math.ceil(Math.random()*3) = 2
// ceil은 반올림 해준다

let comChoice = Math.ceil(Math.random() * 3);
itemImg.src = `./imgs/math_img_${comChoice}.png`;

if (gameNum === comChoice) {
  resultImg.src = `./imgs/Game_1.png`;
} else {
  resultImg.src = `./imgs/Game_2.png`;
}

board.append(h1, itemImg, resultImg);
