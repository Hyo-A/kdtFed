// const lis = document.querySelectorAll("a");
// let photo = document.querySelector(".photo");

// lis.forEach((li, index) => {
//   li.addEventListener("mouseenter", () => {
//     lis.forEach((n, i) => {
//       const photomk = document.createElement("img");
//       photomk.value = `portrait-0${i}`;

//       photo.appendChild(photomk);
//     });
//   });
// });

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem) => {
  liItem.addEventListener("mouseenter", function () {
    const changeIMG = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeIMG}")`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
