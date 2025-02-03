// 할인가격 계산하기 버튼을 누르면 계산하여서 얼마인지 alert로 뜨게 만들게 해 보자?
// 원래가격, 할인률, 할인된 가격?

const button = document.querySelector("#btn");

const showPrice = () => {
  const originPrice = Number(document.querySelector("#origin-price").value);
  const rate = Number(document.querySelector("#rate").value);

  const savedPrice = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrice;

  document.querySelector(
    "#result"
  ).innerText = `할인된 금액은 ${resultPrice}입니다!`;
};

button.addEventListener("click", showPrice);
