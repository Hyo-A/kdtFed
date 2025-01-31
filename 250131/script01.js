// console.log(document.querySelector("h1"));
// console.log(document.querySelector("h1").innerText);
// console.log(document.querySelector("#profile"));
// console.log(document.querySelector(".imgSrc"));

// console.log(document.querySelectorAll(".user"));
// .user로 찾아온 NodeList는 유사배열!

/*

console.log(document.getElementById("profile"));
// getElementById는 옛날에 많이 썼음 오직 Id값만 찾을 수 있는데 배열을 찾아올수는 없다!
console.log(document.getElementsByClassName("user"));
// 오직 class값만 찾을 수 있다
console.log(document.getElementsByTagName("h1"));
// 오직 태그만 찾을 수 있다

*/

// console.log(document.querySelector("#desc").innerHTML);
// console.log(document.querySelector("#desc").innerText);
// console.log(document.querySelector("#desc").textContent);
// innerHTML는 내부 요소에 더불어 태그까지 찾아옴
// innerText는 style시트상 display를 none 해놓으면 찾아오지 않는다
// textContent는 style시트상 display를 none 해놓아도 textcontent를 찾아온다

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0];
const pfImg = document.querySelector("#imgCover > img");

// title.onclick = () => {
//   title.innerText = "나의 프로필";
// };
// title.onclick 이거는 옛날방식 / 요즘은 addEventListener를 쓴다네?

title.addEventListener("click", () => {
  title.innerText = "마이 프로필";
  title.style.backgroundColor = "black";
  title.style.color = "white";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfImg.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOUiXHhw1qes35NWiML7Yp-sOcYCUZ_9wLA&s";
  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }
  // userName.classList.add("active");
});

// console.log(document.querySelectorAll("#desc p")[0].classList);
// classList는 해당 node의 class를 배열의 구조로 가지고 온다

// console.log(userName.classList.contains("active"));
// contains는 true나 false만 반환한다
