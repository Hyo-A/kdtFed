const button = document.querySelector("button");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerHTML = `
  <b>위도 : ${position.coords.latitude}</b> , <b>경도 : ${position.coords.longitude}</b>
  `;
};
const errPosition = (err) => {
  alert(err.message);
};

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errPosition);
    // navigator.geolocation는 내장객체 / getCurrentPosition는 내장함수

    const options = {
      enableHightAccuracy: true,
      timout: 5000,
      // 사용자의 바뀐 위치값을 즉각 확인하도록
      maximumAge: 0,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errPosition,
      options
    );
    // watchPosition();개발자가 설정한 옵션에 맞춰서 위치정보값을 가져온다

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다");
  }
});
