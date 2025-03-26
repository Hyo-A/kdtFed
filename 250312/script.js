// Fullpage
const sec2_Slider = document.querySelector("#sec2 .slider_wrap");
const sec2_Title = document.querySelector("#sec2 .title");

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
      console.log("section 2 Hello");
    }
    if (old_elem.index === 2) {
      sec2_reset();
      console.log("section 2 Bye");
    }
  },
});

function sec0() {
  anime({
    targets: ".svg1 path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 4000,
    direction: "alternate",
    loop: true,
  });
}
function sec1() {
  const tl = anime.timeline({
    easing: "linear",
    duration: 500,
  });
  tl.add({
    targets: ".g01",
    height: "80%",
  })
    .add({
      targets: ".g02",
      height: "70%",
    })
    .add({
      targets: ".g03",
      height: "90%",
    })
    .add({
      targets: ".g04",
      height: "80%",
    });
}

function sec1_reset() {
  anime({
    targets: ".gage_in",
    height: 0,
  });
}

function sec2() {
  sec2_Slider.style.cssText = "opacity: 1; transform: translateX(-50px)";
  sec2_Title.style.cssText = "opacity: 1; transform: translateX(50px)";
}

function sec2_reset() {
  sec2_Slider.style.cssText = "opacity: 0; transform: translateX(50px)";
  sec2_Title.style.cssText = "opacity: 0; transform: translateX(-50px)";
}

// GNB & Toggle
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});
