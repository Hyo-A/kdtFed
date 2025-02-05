const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.marginTop = "10px";
  newH.style.color = "#666";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");

  srcNode.value =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc56bfde-2d2c-4b47-b788-f90895de7abd/WMNS+AIR+FORCE+1+%2707.png";

  newImg.setAttributeNode(srcNode);

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.parentNode.removeChild(this);
  // console.log(this.parentNode);
  //parentNode란 여기서는 title의 부모인 .desc이다
  // this.remove();
  // this.removeChild(this); 얘는 말이 안되는거다..
});
