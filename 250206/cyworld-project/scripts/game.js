// word Game
const form = document.querySelector(".word-text > form");

const gameStart = (e) => {
  e.preventDefault();

  const word = document.querySelector("#word").innerText;
  const myword = document.querySelector("#myword").value;

  const lastword = word[word.length - 1];
  const firstword = myword[0];

  if (lastword === firstword) {
    document.querySelector("#result").innerText = "정답입니다!🤗";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!😝";
    document.querySelector("#myword").value = "";
  }
};

form.addEventListener("submit", gameStart);

//lotto Game
const lottoButton = document.querySelector(".lotto-btn");
const result = document.querySelector(".game-lotto-number");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const startLotto = () => {
  const { digitCount, maxNumber } = luckyNumber;

  let myNumber = new Set();
  // new Set()은 배열의 형태이지만 이 안에 중복값을 배제시킨다
  // 애는 length를 쓰지 않음 대신 size 씀

  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    // for문은 초기값에서 조건을 충족할때마다 시행을 시킴 충족못하면 끝
    // push는 앞에 쓴 배열에 값을 하나씩 넣어줌
    // 근데 set에는 push를 쓸수 X 대신 add를 쓸 수 있다
    // Math.floor는 소숫점을 버려줌 // Math.random는 0과 1사이의 랜덤한 수가 나옴
    // // 그러니 윗줄의 최소값은 1 최대값은 45가 되고 그중 랜덤으로 수를 가지고 옴
  }

  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
    // [...myNumber]는 myNumber이 원래 숫자 배열이었는데 문자로 찾아와줌
  } else {
    result.innerText = "재추첨 하겠습니다😥";
  }
};

lottoButton.addEventListener("click", startLotto);
