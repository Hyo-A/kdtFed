const fruitItems = document.querySelector("#items");

console.log(fruitItems);
const displayfruit = () => {
  let selectedText = fruitItems.options[fruitItems.selectedIndex].innerText;
  alert(`[${selectedText}]를(을) 선택했습니다`);
};

fruitItems.addEventListener("change", displayfruit);

// const selectfruit = document.querySelector("#items");

// selectfruit.addEventListener("change", () => {
//   let displayText = selectfruit.options[selectfruit.selectedIndex].innerText;
//   alert(`${displayText}를 선택하셨습니다`);
// });

const selectinfo = document.querySelector("#information");
const promotion = selectinfo.querySelectorAll("p").innerText;
console.log(promotion);

selectinfo.addEventListener("click", () => {
  alert(`${promotion}를 선택하셨습니다`);
});
