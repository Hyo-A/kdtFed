// Gototop Event
window.addEventListener("scroll", () => {
  const gototop = document.querySelector(".gototop");
  const header = document.querySelector("header");
  let scrollY = window.scrollY;
  if (scrollY > 50) {
    gototop.classList.add("active");
    header.classList.add("active");
  } else {
    gototop.classList.remove("active");
    header.classList.remove("active");
  }
});

// Trigger Event
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function () {
  const gnb = document.querySelector(".gnb");
  const menus = document.querySelectorAll(".menu a");

  gnb.classList.toggle("active");
  this.classList.toggle("active");

  menus.forEach((menu) => {
    menu.addEventListener("click", () => {
      gnb.classList.remove("active");
      trigger.classList.remove("active");
    });
  });
});

// Scoll event
$(".menu a, .gototop").click(function () {
  $.scrollTo(this.hash || 0, 900);
});

// Slick Slider - 1
$(".history-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  infinite: false,
  dots: true,
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
});

// Slick Slider - 2
$(".project-photo").slick({
  dots: true,
  infinite: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
});
