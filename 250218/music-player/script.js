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
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    //currentTarget.closest는 지금 이벤트 대상에 가장 가까운 애

    e.currentTarget.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");

    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");

    e.currentTarget.closest("article").querySelector("audio").load();
    // music을 원점부터 듣는 함수는 load
    e.currentTarget.closest("article").querySelector("audio").play();
  });
});

// btn event
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

next.addEventListener("click", (e) => {
  e.preventDefault();
  initMusic();
  i--;

  frame.style.transform = `rotate(${deg * i}deg)`;
  active === len ? (active = 0) : active++;
  activation(active, lists);
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  initMusic();
  i++;

  frame.style.transform = `rotate(${deg * i}deg)`;
  active === 0 ? (active = len) : active--;
  activation(active, lists);
});
