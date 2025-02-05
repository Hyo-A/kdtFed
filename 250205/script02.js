// const saveBtn = document.querySelector(".savebtn");

// saveBtn.addEventListener("c", (e) => {
//   e.preventDefault();
//   const title = document.querySelector("#title");
//   const author = document.querySelector("#author");

//   const titleText = document.createTextNode(title.innerText);
//   const authorText = document.createTextNode(author.innerText);

//   console.log(titleText, authorText);
//   // const booklist = document.querySelector("#booklist");
// });

//

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const booklist = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value === "" || author.value === "") {
    alert(`정보를 입력해주세요`);
  } else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value}<span>삭제</span>`;

    booklist.appendChild(liItem);

    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll("span");
    delButtons.forEach((delButton) => {
      delButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
      });
    });
  }
});
