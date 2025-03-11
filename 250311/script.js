import { weathermap, unsplash } from "./env.js";
// 이제는 복수로 찾아올거라서 중괄호를 치는거임!
// env.js에 weathermap만 있을땐 import weathermap from "./env.js"; 이케썻다고

const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weathermap}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      let cityName;
      switch (result.name) {
        case "Jamwon-dong":
          cityName = "🐨역삼동";
          break;
      }

      let weatherInfo;
      switch (result.weather[0].main) {
        case "Haze":
          weatherInfo = "👻안개";
          break;
      }

      city.innerText = cityName;
      weather.innerText = weatherInfo;
      temp.innerText = `${result.main.temp}℃`;
      icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    });
};

const getPosition = (position) => {
  // console.log(position);

  const { latitude, longitude } = position.coords;
  // coords 안에 latitude 값을 변수 latitude에 담아라를 이케 쓴거임
  // 그럼 위도 , 경도값 잘 찾아오게 된닥
  getCurrentWeather(latitude, longitude);
};

const errorHandle = (error) => {
  console.error(error);
};

if (navigator.geolocation) {
  // 만약 navigator.geolocatio이 있다면? ~ 한다
  // "geolocation" in navigator이렇게 쓰는것도 가능?
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
  // getpo~ error~ 대신 피카츄 가능
  // console.log("geolocation is not available");
}

const imgURL = `http://api.unsplash.com/photos/random?client_id=${unsplash}`;

fetch(imgURL)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    console.log(full);
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${full})`;
  });
