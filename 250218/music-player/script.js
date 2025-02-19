import { API_UNSPLASH_KEY } from "./env.js";
// 원래 모듈을 import 할 때에는 항상 최상단에 쓰고 from을 쓰기

const getImg = `https://api.unsplash.com/photos/random/?client_id=${API_UNSPLASH_KEY}`;
// 이걸 깃헙에 바로 붙힌다면 내 정보노출이잖아

const loading = document.querySelector(".loading");

const figure = document.querySelector("figure");

fetch(getImg)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    // console.log(full);
    figure.style.backgroundImage = `url(${full})`;
    loading.style.display = "none";
  })
  .catch((error) => {
    console.error("이미지 로드 중 오류 발생!", error);
    //console.error(); 에러가 발생하는 전용 콘솔찍는 방법
  });

const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

const deg = 45;
let i = 0;

// article rotation
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  const play = list.querySelector(".play");
  const pause = list.querySelector(".pause");
  const load = list.querySelector(".load");

  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/member${i + 1}.jpg")`;
  i++;

  play.addEventListener("click", (e) => {
    const isActive = e.currentTarget
      .closest("article")
      .classList.contains("on");
    // contains("on")은 on을 포함하면 true, 그렇지않으면 false 반환
    if (isActive) {
      const activePic = e.currentTarget
        .closest("article")
        .querySelector(".pic");

      activePic.classList.add("on");
      //currentTarget.closest는 지금 이벤트 대상에 가장 가까운 애

      const activeAudio = e.currentTarget
        .closest("article")
        .querySelector("audio");

      activeAudio.play();

      activeAudio.addEventListener("ended", () => {
        // addEventListener("ended",(~~))는 오디오가 끝났을때에 이벤트 발생
        activePic.classList.remove("on");
      });
    }
  });

  pause.addEventListener("click", (e) => {
    const isActive = e.currentTarget
      .closest("article")
      .classList.contains("on");
    // contains("on")은 on을 포함하면 true, 그렇지않으면 false 반환
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.remove("on");

      e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });

  load.addEventListener("click", (e) => {
    const isActive = e.currentTarget
      .closest("article")
      .classList.contains("on");
    // contains("on")은 on을 포함하면 true, 그렇지않으면 false 반환
    if (isActive) {
      e.currentTarget
        .closest("article")
        .querySelector(".pic")
        .classList.add("on");

      e.currentTarget.closest("article").querySelector("audio").load();
      // music을 원점부터 듣는 함수는 load
      e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
});

// btn event
let num = 0;
let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  //lists는 전체 총 아이템이라 가정, index는
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[index].classList.add("on");
};

// btn radio pause
const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
    // 이전 형제요소이다
  });
};

prev.addEventListener("click", (e) => {
  e.preventDefault();
  initMusic();
  num++;

  frame.style.transform = `rotate(${num * deg}deg)`;
  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  initMusic();
  num--;

  frame.style.transform = `rotate(${num * deg}deg)`;
  active === len ? (active = 0) : active++;
  activation(active, lists);
});
