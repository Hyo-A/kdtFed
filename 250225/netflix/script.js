import { API_KEY } from "./env.js";

// 공통 URL
const tmdbCommand = "https://api.themoviedb.org/3";

// quary값이 시작되는 지점에서 api_key=${API_KEY}& 써야함

// NowPlaying db
const nowPlaying = async () => {
  const url = `${tmdbCommand}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  // fetch는 외부에서 데이터가져오기 전용 함수인데? 무조건 비동기적으로 작동하는 특성이 있음
  // => 기다려주게 하기 위하여 await를 쓴것임
  // => await는 감싸는 부모요소에 async가 필수적으로 따라붙어야함
  const { results } = await response.json();
  // results 안에는 20개의 배열 이것저것 들어있어버림
  return results;
};

// upComing db
const upComing = async () => {
  const url = `${tmdbCommand}/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  // fetch는 외부에서 데이터가져오기 전용 함수인데? 무조건 비동기적으로 작동하는 특성이 있음
  // => 기다려주게 하기 위하여 await를 쓴것임
  // => await는 감싸는 부모요소에 async가 필수적으로 따라붙어야함
  const { results } = await response.json();
  // results 안에는 20개의 배열 이것저것 들어있어버림
  return results;
};

// topRated db
const topRated = async () => {
  const url = `${tmdbCommand}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
  const response = await fetch(url);
  // fetch는 외부에서 데이터가져오기 전용 함수인데? 무조건 비동기적으로 작동하는 특성이 있음
  // => 기다려주게 하기 위하여 await를 쓴것임
  // => await는 감싸는 부모요소에 async가 필수적으로 따라붙어야함
  const { results } = await response.json();
  // results 안에는 20개의 배열 이것저것 들어있어버림
  return results;
};

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Promise DBs
// 영화데이터를 가져오게끔 하는 함수
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, topRatedMovie] = await Promise.all([
    nowPlaying(),
    upComing(),
    topRated(),
  ]);
  // 세개의 배열을 가져왔는데 셋 다 가지고왔을때까지 기다리다가 도착하면 한번에 딱 화면에 나오도록 promiss~
  // all() 는 언에 값이 다 들어올때까지 기다렸다 실행임

  // Main Slider
  const mainSlider = document.querySelector(".mainSlider");

  nowPlayingMovie.forEach((movie) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `<img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}">`;
    mainSlider.appendChild(figure);
  });

  // Fade Effect
  const figures = mainSlider.querySelectorAll("figure");

  let currentIndex = 0;

  const showNextSlide = () => {
    figures[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % figures.length;
    figures[currentIndex].classList.add("active");
  };

  figures[currentIndex].classList.add("active");

  setInterval(showNextSlide, 3000);
};

getMovies();

// Gnb Li Event
const naviLis = document.querySelectorAll(".gnb>ul>li");
const submenus = document.querySelectorAll(".submenu");
const menuBg = document.querySelector(".menu-bg");

naviLis.forEach((naviLi) => {
  naviLi.addEventListener("mouseover", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "1";
      submenu.style.maxHeight = "300px";
      menuBg.style.opacity = "1";
      menuBg.style.maxHeight = "320px";
    });
  });

  naviLi.addEventListener("mouseout", () => {
    submenus.forEach((submenu) => {
      submenu.style.opacity = "0";
      submenu.style.maxHeight = "0";
      menuBg.style.opacity = "0";
      menuBg.style.maxHeight = "0";
    });
  });
});
