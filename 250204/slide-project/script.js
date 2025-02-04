const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");

const arrows = document.querySelectorAll(".arrow");

const newVideo = document.createElement("video");
// const widthVideo = document.createAttribute("width");
// const hightVideo = document.createAttribute("hight");
// // createAttribute란? attribute는 "속성"이라는 뜻이약 특정 태그 안에 세부적인 속성값을 생성해줌
const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;

newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(autoVideo);
// widthVideo.value = "700";
// hightVideo.value = "400";
// newVideo.setAttributeNode(widthVideo);
// // setAttributeNode란? 여기서는 newvideo widthvideo의 속성을 set 해주는것
// newVideo.setAttributeNode(hightVideo);
container.appendChild(newVideo);
// appendChild란? 여기서는 container의 자식요소 에 newVideo를 넣게!! 해주는것

newVideo.addEventListener("click", function () {
  if (this.paused) this.play();
  else this.pause();
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});
