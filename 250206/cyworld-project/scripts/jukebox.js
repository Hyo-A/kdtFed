// music play

const songs = document.querySelectorAll(".albumTable-song");

let currentAudio = null;

songs.forEach((song) => {
  const playBtn = song.querySelector(".fa-caret-right");
  const pauseBtn = song.querySelector(".fa-pause");

  playBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    // target.closest로 노드상에 가장 가까이에 있는 td를 찾아온거임
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    audio.play();
    currentAudio = audio;
  });

  pauseBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    audio.pause();

    if (currentAudio === audio) {
      currentAudio = null;
    }
  });
});

// input on, off
const thCheckbox = document.querySelector("#total");
let udCheckboxs = document.querySelectorAll(".udCheckbox");

thCheckbox.addEventListener("click", () => {
  udCheckboxs.forEach((Checkbox) => {
    Checkbox.checked = thCheckbox.checked;
  });
});

/* 성일님 코드

const totalCheck = document.querySelector("#total");
const checkboxes = document.querySelectorAll(".albumTable-checkbox input");
const songs = document.querySelectorAll(".albumTable-song");
const listenButton = document.querySelector(".footer-left button");
let currentAudio = null;
let selectedSongs = [];

// 전체 선택 체크박스 기능
totalCheck.addEventListener("change", () => {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = totalCheck.checked;
  });
});

// 기존 재생 중인 오디오 정지 함수
const stopCurrentAudio = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
};
// 개별 재생 기능
songs.forEach((song) => {
  const playBtn = song.querySelector(".fa-caret-right");
  playBtn.addEventListener("click", (e) => {
    const audio = e.target.closest("td").querySelector("audio");
    if (currentAudio === audio) {
      // 이미 재생 중인 경우 -> 일시정지
      if (!audio.paused) {
        audio.pause();
        return;
      }
    } else {
      // 다른 오디오가 재생 중이면 정지 후 새로운 오디오 재생
      stopCurrentAudio();
    }
    audio.play();
    currentAudio = audio;
  });
});
// 전체 선택된 곡을 순차적으로 재생
const playSelectedSongs = () => {
  selectedSongs = [...checkboxes]
    .filter((checkbox) => checkbox.checked && checkbox !== totalCheck)
    .map((checkbox) => checkbox.closest("tr").querySelector("audio"));
  if (selectedSongs.length === 0) return;
  stopCurrentAudio(); // 기존 재생 정지
  let i = 0;
  const playNextSong = () => {
    if (i < selectedSongs.length) {
      currentAudio = selectedSongs[i];
      currentAudio.play();
      i++;
      // 현재 곡이 끝나면 다음 곡 재생
      currentAudio.onended = playNextSong;
    }
  };
  playNextSong();
};
// 듣기 버튼 클릭 시 전체 선택된 곡 순차 재생
listenButton.addEventListener("click", playSelectedSongs);
*/
