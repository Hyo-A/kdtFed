const signup_button = document.querySelector("#signup-button");
const token_button = document.querySelector("#token-button");
const tokentimercomfirmbutton = document.querySelector(
  "#token-timer-comfirm-button"
);

let interval;

tokentimercomfirmbutton.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(interval);

  document.querySelector("#token-timer-comfirm-button").style =
    "background: #fff;";

  document
    .querySelector("#token-timer-comfirm-button")
    .setAttribute("disabled", true);

  document.querySelector("#token-timer-comfirm-button").innerText = "인증완료";

  alert("인증이 완료되었습니다.");
  document.querySelector("#signup-button").style =
    "background: #fff; color : #0068ff; border : 1px solid #0068ff;  cursor:pointer;";
  document.querySelector("#signup-button").removeAttribute("disabled");
});
//인증완료 버튼을 누르면 멈추는것

const getTokenTimer = (e) => {
  e.preventDefault();
  // 1s = 1000ms
  // 1m = 1000ms * 60

  let timer = 180;
  let interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      document.querySelector("#token-timer").innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      document.querySelector("#token").innerText = "000000";
      document.querySelector("#token-button").style = "";
      document.querySelector("#token-button").setAttribute("disabled", true);

      document.querySelector("#token-timer").innerText = "03:00";
      document.querySelector("#token-timer-comfirm-button").style = "";
      document
        .querySelector("#token-timer-comfirm-button")
        .setAttribute("disabled", true);

      clearInterval(interval);
    }
  }, 1000);
  //interval은 지역변수인데 tokentimercomfirmbutton에서도 쓰고싶다 그럼 애초에 전역변수로 만들어놨어야함
  //setInterval은? 안에 함수를 가지고있는데.. 몇초에 한번씩진행이냐 1000ms 에 한번! 감소가 계속 되기 때문에 break가 필요하다!
};

const signup = (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const writer = document.querySelector("#writer").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  console.log(location);
  const genderWoman = document.querySelector("#gender-woman").checked;
  const genderMan = document.querySelector("#gender-man").checked;

  let isValid = true;

  if (email.includes("@") === false) {
    document.querySelector("#error_email").innerText =
      "이메일이 올바르지 않습니다";
    isValid = false;
  } else {
    document.querySelector("#error_email").innerText = "";
  }

  if (writer === "") {
    document.querySelector("#error_writer").innerText =
      "이름이 올바르지 않습니다";
    isValid = false;
  } else {
    document.querySelector("#error_writer").innerText = "";
  }

  if (password1 === "") {
    document.querySelector("#error_password1").innerText =
      "비밀번호를 입력해주세요";
    isValid = false;
  } else {
    document.querySelector("#error_password1").innerText = "";
  }

  if (password1 !== password2) {
    document.querySelector("#error_password1").innerText =
      "비밀번호가 일치하지 않습니다";
    document.querySelector("#error_password2").innerText =
      "비밀번호가 일치하지 않습니다";
    isValid = false;
  }

  if (
    location !== "seoul" &&
    location !== "gyeongi" &&
    location !== "incheon"
  ) {
    document.querySelector("#error_location").innerText = "지역을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("#error_location").innerText = "";
  }

  if (genderWoman === false && genderMan === false) {
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("#error_gender").innerText = "";
  }

  if (isValid === true) {
    alert("이젠아카데미 가입을 축하합니다");
  }
};

signup_button.addEventListener("click", signup);

const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");

phone1.addEventListener("keyup", () => {
  const phone1Value = phone1.value;
  if (phone1Value.length === 3) {
    document.querySelector("#phone2").focus();
  }
});
//keyup은 클릭을 했을때에 손가락을 떼는 순간 이벤트 go

phone2.addEventListener("keyup", () => {
  const phone2Value = phone2.value;
  if (phone2Value.length === 4) {
    document.querySelector("#phone3").focus();
  }
});

phone3.addEventListener("keyup", () => {
  const p01 = document.querySelector("#phone1").value;
  const p02 = document.querySelector("#phone2").value;
  const p03 = document.querySelector("#phone3").value;

  if (p01.length === 3 && p02.length === 4 && p03.length === 4) {
    document.querySelector("#token-button").style =
      "background: #fff; color: #0068ff; cursor: pointer";
    document.querySelector("#token-button").removeAttribute("disabled");
  }
});

token_button.addEventListener("click", (e) => {
  e.preventDefault();
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  // padStart(6, 0)는 문자열의 갯수를 6자리를 유지하면서 앞에서부터 빈곳은 "0"으로 시작하게 한다
  document.querySelector("#token").innerText = token;

  document.querySelector("#token-button").style =
    "background: #fff; cursor: pointer;";

  document.querySelector("#token-button").setAttribute("disabled", true);

  document.querySelector("#token-timer-comfirm-button").style =
    "background:#0068ff; color:#fff; cursor:pointer;";
  document
    .querySelector("#token-timer-comfirm-button")
    .removeAttribute("disabled");

  getTokenTimer(e);
  //getTokenTimer()는 숫자가 진행되어지는 요소를 말하는것
});
