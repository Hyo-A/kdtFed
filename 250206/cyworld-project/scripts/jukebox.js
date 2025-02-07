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
console.log(thCheckbox);

thCheckbox.addEventListener("click", () => {
  let udCheckboxs = document.querySelectorAll(".udCheckbox");
  // udCheckboxs.forEach((Checkbox) => {
  //   Checkbox.checked = udCheckboxs.checked;
  // });
});
