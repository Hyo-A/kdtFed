// 새로고침할때마다 배경이 바뀌는 기능

window.onload = () => {
  const bgCount = 5;

  let randomNum = Math.floor(Math.random() * bgCount + 1);
  // 얘는 1 ~ 5 까지의 랜덤숫자
  document.body.style.backgroundImage = `url(./images/bg-${randomNum}.jpg)`;
};
