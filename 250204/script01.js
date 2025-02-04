document.querySelector("#userId").addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});

document.querySelector("#userId").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});

/*
화살표 함수는 해당 함수의 호출과 관련없이 window를 this로 찾아오지만..
function()  요 익명함수는 호출을 한 부모를 this로 찾아온다??
*/
