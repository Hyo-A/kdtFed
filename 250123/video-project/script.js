const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

console.log(aside, close);

articles.forEach((article) => {
  article.addEventListener("mouseenter", (event) => {
    const video = event.target.querySelector("video").play();
  });
  article.addEventListener("mouseleave", (event) => {
    const video = event.target.querySelector("video").pause();
  });

  article.addEventListener("click", (event) => {
    const tit = event.currentTarget.querySelector("h2").innerText;
    const txt = event.currentTarget.querySelector("p").innerText;
    const video = event.currentTarget
      .querySelector("video")
      .getAttribute("src");

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", video);

    aside.classList.add("on");
    aside.querySelector("video").play();
  });

  close.addEventListener("click", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause();
  });
});
