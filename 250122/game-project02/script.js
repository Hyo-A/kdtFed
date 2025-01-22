const buttons = document.querySelectorAll("button");
//querySelectorAll로 찾아온 요소들은 배열로 찾아온다
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".your-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];
let message;

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case " 보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }

  show(user, computer, message);
};

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText);
//   });
// });
//repactoring 해보자
const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  // floor은 소숫점을 버리게 해준다
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
