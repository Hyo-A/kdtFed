// console.log(document.querySelectorAll("p")[0]);

const newP = document.createElement("p");

// newP.innerText = "Typescript";
const textNode = document.createTextNode("Typescript");

newP.appendChild(textNode);

document.body.appendChild(newP);
// appendChild란? 앞의 요소를 부모로 인식하여 자식요소에..
