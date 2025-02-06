const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
    let message = "";
    let imageURL = "";

    switch (index) {
      // switch는 후보군을 만들고 그중에 선택한것을 배출한다는데.. break문을 꼭 함께 쓰자
      case 0:
        message = "별로입니다";
        imageURL = "./img/star-lv1.png";
        break;

      case 1:
        message = "살짝 별로입니다";
        imageURL = "./img/star-lv2.png";
        break;

      case 2:
        message = "보통입니다";
        imageURL = "./img/star-lv3.png";
        break;

      case 3:
        message = "짱입니다";
        imageURL = "./img/star-lv4.png";
        break;

      case 4:
        message = "최고입니다";
        imageURL = "./img/star-lv5.png";
        break;
    }

    print.innerHTML = `<img src="${imageURL}">${message}`;
  });
});
