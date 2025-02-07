//button event

const menuHome = document.querySelector("#menu-home");
const menuGame = document.querySelector("#menu-game");
const menuJukebox = document.querySelector("#menu-jukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background:#0d4d8a;";
  menuJukebox.style = "background: #55b2e4;";
  menuGame.style = "background:#55b2e4;";
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4;";
  menuJukebox.style = "background: #55b2e4;";
  menuGame.style = "background: #0d4d8a;";
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4;";
  menuJukebox.style = "background: #0d4d8a;";
  menuGame.style = "background: #55b2e4;";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);

//count event
const getFormattedDate = () => {
  const date = new Date();
  // 내장객체인 날짜를 찾아오는것임
  const year = date.getFullYear();
  const month = "0" + (date.getMonth() + 1);
  // 월만 index 0 부터 시작하므로 +1 해야해
  const day = "0" + date.getDate();
  return `${year}-${month}-${day}`;
};

const todayDate = getFormattedDate();
const dailyCookieName = `pageHit_${todayDate}`;

const expirDate = new Date();
expirDate.setDate(expirDate.getDate() + 1);
const expirDateString = expirDate.toGMTString();

const cookieVal = (cookieName) => {
  const thisCookie = document.cookie.split("; ");
  //cookie는 우리의 로컬에 저장되어져있는 쿠키를 찾아옴
  for (let i = 0; i < thisCookie.length; i++) {
    if (cookieName === thisCookie[i].split("=")[0]) {
      return thisCookie[i].split("=")[1];
    }
  }
  return 0;
};

let dailyHitCt = parseInt(cookieVal(dailyCookieName));
if (isNaN(dailyHitCt)) {
  dailyHitCt = 0;
}

dailyHitCt++;
document.cookie = `${dailyCookieName}=${dailyHitCt}; expires=${expirDateString}`;
// isNan은 안에 들어가는 숫자가 숫자가 아니면 참이다
let totalHitCt = parseInt(cookieVal("totalPageHit"));
if (isNaN(totalHitCt)) {
  totalHitCt = 0;
}
totalHitCt++;
document.cookie = `totalPageHit=${totalHitCt}; expires=Fri, 31 December 9999 23:59:29 GMT`;
/*
쿠키값은 어떻게 생겼을까

"쿠키네임=쿠키값; expires=만료날짜"
"pageHit_2025_02_07=?; expires=2025_02_08"
 */

document.querySelector(".zero").innerText = dailyHitCt;
document.querySelector(".total").innerText = totalHitCt;
