import { API_KEY } from "./env.js";

// Document Items
const nowplayingUL = document.querySelector(".nowplaying ul");
const upcomingUL = document.querySelector(".upcoming ul");
const topratedUL = document.querySelector(".toprated ul");

// console.log(nowplayingUL, upcomingUL, topratedUL);

// 공통 URL
const tmdbCommand = "https://api.themoviedb.org/3";

// quary값이 시작되는 지점에서 api_key=${API_KEY}& 써야함

// Create Element
const createElement = (movie, index, category) => {
  // console.log(movie);
  const {
    adult,
    genre_ids,
    id,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = movie;

  const li = document.createElement("li");
  const moviePoster = document.createElement("div");
  const movieTitle = document.createElement("div");
  const movieDesc = document.createElement("div");

  // console.log(li);

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/original/${poster_path}`;

  const ageLimit = document.createElement("span");
  const movieNum = document.createElement("span");
  const release = document.createElement("span");
  const vote = document.createElement("span");

  moviePoster.className = "moviePoster";
  movieTitle.className = "movieTitle";
  movieDesc.className = "movieDesc";

  let adultKo = adult === false ? "ALL" : "18";
  ageLimit.innerText = adultKo;
  movieNum.innerText = index + 1;

  release.innerText = release_date;
  vote.innerText = `⭐${parseFloat(vote_average).toFixed(2)}`;

  li.className = id;
  li.setAttribute("data-category", category);

  movieTitle.innerText = title;
  movieDesc.append(release, vote);
  moviePoster.append(img, ageLimit, movieNum);
  li.append(moviePoster, movieTitle, movieDesc);

  if (category === "nowplaying") {
    nowplayingUL.appendChild(li);
  } else if (category === "upcoming") {
    upcomingUL.appendChild(li);
  } else if (category === "toprated") {
    topratedUL.appendChild(li);
  }
};

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

// Generes db
const movieGeneres = async () => {
  const url = `${tmdbCommand}/genre/movie/list?api_key=${API_KEY}&language=ko`;
  const response = await fetch(url);
  const { genres } = await response.json();
  return genres;
};

movieGeneres();

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Promise DBs
// 영화데이터를 가져오게끔 하는 함수
const getMovies = async () => {
  const [nowPlayingMovie, upComingMovie, topRatedMovie, generes] =
    await Promise.all([nowPlaying(), upComing(), topRated(), movieGeneres()]);
  // 세개의 배열을 가져왔는데 셋 다 가지고왔을때까지 기다리다가 도착하면 한번에 딱 화면에 나오도록 promiss~
  // all() 는 언에 값이 다 들어올때까지 기다렸다 실행임

  // Movie Items
  nowPlayingMovie.forEach((movie, index) => {
    createElement(movie, index, "nowplaying");
  });

  upComingMovie.forEach((movie, index) => {
    createElement(movie, index, "upcoming");
  });

  topRatedMovie.forEach((movie, index) => {
    createElement(movie, index, "toprated");
  });

  // Item Slider
  // 총 갯수 20 // 한번에 보여지는 갯수 5 // 버튼 클릭시 5 이동
  // 각 영화의 너비값 160 // 간격 25 // 총공간 900
  // (160 + 25) * 4 + 160 => 슬라이드버튼 클릭시 이동해야하는 거리
  // 무한 슬라이드를 실행하기 위해서 아래와 같이 노드를 복제하여
  // 15 ~ 19 인덱스템 + 20개의 영화아이템 + 0 ~ 4 인덱스템

  // 1 2 3 4 5 => 6 7 8 9 10 => 11 12 13 14 15 => 16 17 18 19 20

  const initializeSlider = (
    slideSelector,
    rightArrowSelector,
    leftArrowSelector
  ) => {
    const slider = document.querySelector(slideSelector);
    const slides = slider.querySelectorAll("li");
    // console.log(slides);
    const slideToShow = 5;
    const slideWidth = 160;
    const slideMargin = 25;
    let currentIndex = 0;
    let isTransition = false;

    const firstClones = Array.from(slides)
      .slice(0, slideToShow)
      .map(
        (slide) => slide.cloneNode(true)
        // li태그 안에 하위 요소의 노드까지 전부 복제하겠다가 true!
      );

    const lastClones = Array.from(slides)
      .slice(-slideToShow)
      .map((slide) => slide.cloneNode(true));

    slider.append(...firstClones);
    slider.prepend(...lastClones);

    const updateSlider = () => {
      const offset = -(slideWidth + slideMargin) * (currentIndex + slideToShow);
      slider.style.transform = `translateX(${offset}px)`;
    };
    slider.style.transition = "none";
    updateSlider();

    document.querySelector(rightArrowSelector).addEventListener("click", () => {
      if (isTransition) return;

      isTransition = true;
      currentIndex += slideToShow;

      if (currentIndex === slides.length) {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = 0;
          updateSlider();
          isTransition = false;
        }, 500);
      } else {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          isTransition = false;
        }, 500);
      }
    });
    document.querySelector(leftArrowSelector).addEventListener("click", () => {
      if (isTransition) return;

      isTransition = true;
      currentIndex -= slideToShow;

      if (currentIndex < 0) {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          slider.style.transition = "none";
          currentIndex = slides.length - slideToShow;
          updateSlider();
          isTransition = false;
        }, 500);
      } else {
        slider.style.transition = "all 0.5s";
        updateSlider();
        setTimeout(() => {
          isTransition = false;
        }, 500);
      }
    });
  };

  initializeSlider(
    ".nowplaying ul",
    "#nowPlayingRightArrow",
    "#nowPlayingLeftArrow"
  );

  initializeSlider(".upcoming ul", "#upComingRightArrow", "#upComingLeftArrow");

  initializeSlider(".toprated ul", "#topRatedRightArrow", "#topRatedLeftArrow");

  // Popul Modal
  const movieItems = document.querySelectorAll(".movie li");
  const movieModal = document.querySelector(".modal-overlay");

  movieItems.forEach((movieItem) => {
    movieItem.addEventListener("click", () => {
      movieModal.innerHTML = "";
      movieModal.classList.add("active");
      const id = parseInt(movieItem.className);
      const category = movieItem.getAttribute("data-category");
      let movie;

      switch (category) {
        case "nowplaying":
          movie = nowPlayingMovie.find((movie) => movie.id === id);
          break;
        case "upcoming":
          movie = upComingMovie.find((movie) => movie.id === id);
          break;
        case "toprated":
          movie = topRatedMovie.find((movie) => movie.id === id);
          break;
      }

      if (!movie) {
        console.error("Movie Not Found");
        return;
      }

      // console.log(movie);

      let {
        adult,
        backdrop_path,
        genre_ids,
        original_language,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count,
      } = movie;

      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      adult = adult === false ? "전체관람가" : "18세 이상";
      switch (original_language) {
        case "en":
          original_language = "영어";
          break;
        case "lv":
          original_language = "라트비아어";
          break;
        case "zh":
          original_language = "중국어";
          break;
        case "ko":
          original_language = "한국어";
          break;
        case "ja":
          original_language = "일본어";
          break;
        case "hi":
          original_language = "힌두어";
          break;
        case "es":
          original_language = "스페인어";
          break;
      }
      const genreNames = genre_ids.map((id) => {
        const genre = generes.find((g) => g.id === id);
        return genre ? genre.name : "UnKnown";
      });

      console.log(genreNames);
      modalContent.innerHTML = `
        <div class="modal-top">
          <div class="modal-photo">
            <img
              src="https://image.tmdb.org/t/p/original/${poster_path}"
              alt="modal-photo"
            />
          </div>
          <form action="#" method="get">
            <section class="modal-info">
              <h1>${title}</h1>
              <div>
                <span><em>${release_date}</em></span>
                <span><em>${adult}</em></span>
                <span>인기평점 <em>${parseFloat(vote_average).toFixed(
                  2
                )}</em></span>
                <span>투표자수 <em>${vote_count.toLocaleString()}</em></span>
              </div>
            </section>
            <section class="modal-button">
              <a href="#"><i class="fas fa-circle-play"></i> 예고편 재생</a>
              <a href="#"><i class="fas fa-comment"></i> ${vote_count.toLocaleString()}</a>
              <a href="#"><i class="fas fa-share-nodes"></i> 공유하기</a>
            </section>
            <section class="modal-desc">
              <p>
                ${overview}
              </p>
            </section>
            <input type="submit" value="결제하기" />
          </form>
        </div>
        <div class="modal-bottom">
          <section class="modal-detail">
            <h1>영화정보</h1>
            <div>
              <span>장르</span>
              <span>${genreNames}</span>
            </div>
            <div>
              <span>언어</span>
              <span>${original_language}</span>
            </div>
            <div>
              <span>인기점수</span>
              <span>${popularity.toLocaleString()} / 10000점</span>
            </div>
          </section>
          <section class="modal-poster">
            <img
              src="https://image.tmdb.org/t/p/original/${backdrop_path}"
              alt="test"
            />
          </section>
          <section class="modal-trailer"></section>
        </div>
        <div class="modal-close">
          <i class="fas fa-xmark"></i>
        </div>
      `;
      movieModal.appendChild(modalContent);
      const modalClose = document.querySelector(".modal-close");
      modalClose.addEventListener("click", () => {
        movieModal.classList.remove("active");
      });
    });
  });

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

// Accordion Event
const contents = document.querySelectorAll(".accodion .content");
contents[0].style.display = "block";

const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    contents.forEach((content) => {
      content.style.display = "none";
    });
    titles.forEach((othertitle) => {
      if (othertitle !== title) {
        othertitle.classList.remove("active");
      }
    });
    const content = title.nextElementSibling;

    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// Search Modal
const searchBtn = document.querySelector(".search-box .fa-magnifying-glass");

const closeBtn = document.querySelector(".close");

const modalSearch = document.querySelector(".modal-search");

searchBtn.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});
