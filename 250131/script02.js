// const title = document.querySelector("h1");
// const userName = document.querySelectorAll("#desc > p")[0];
// const pfImg = document.querySelector("#imgCover > img");

// title.addEventListener("click", () => {
//   title.innerText = "마이 프로필";
//   title.style.backgroundColor = "black";
//   title.style.color = "white";
// });

// userName.addEventListener("click", () => {
//   userName.innerHTML = "이름 : <b>태연</b>";
//   pfImg.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOUiXHhw1qes35NWiML7Yp-sOcYCUZ_9wLA&s";
//   if (!userName.classList.contains("active")) {
//     userName.classList.add("active");
//   } else {
//     userName.classList.remove("active");
//   }
//   // userName.classList.add("active");
// });

// const btn = document.querySelector("#toggle-btn > button");
// const textBox = document.querySelector("#contents");

// btn.addEventListener("click", () => {
//   console.log("click");
//   if (!textBox.classList.contains("dark")) {
//     textBox.classList.add("dark");
//   } else {
//     textBox.classList.remove("dark");
//   }
// });

const toggleBtn = document.querySelector("button");

toggleBtn.addEventListener("click", () => {
  console.log("click");
  document.body.classList.toggle("dark");
  if (!document.bodt.classList.contains("dark")) {
    toggleBtn.innerText = "다크모드로 바꾸기";
  } else {
    toggleBtn.innerText = "라이트모드로 바꾸기";
  }
});
