// 사용자에게 지름과 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요

// 원기둥 부피 공식? => 파이 * R * R (밑면적) * 높이
// 파이 = Math.PI

// 단, 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록  *생성자함수*를 활용한 코드를 구현!!

const btn = document.querySelector("#btn");
const resultBox = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const cylDiameter = document.querySelector("#cyl-diameter").value;
  const cylHight = document.querySelector("#cyl-Hight").value;
  function cylList(meter, hight) {
    this.meter = meter;
    this.hight = hight;
    this.cylVolum = function () {
      const diameter = this.meter / 2;
      return (Math.PI * diameter * diameter * cylHight).toFixed(2);
    };
  }
});

//-----------
// 정답

// const button = document.querySelector("input[type='button']");
// const result = document.querySelector("#result");

// button.addEventListener("click", (e) => {
//   e.preventDefault();

//   const diameter = document.querySelector("#cyl-diameter").value;
//   const hight = document.querySelector("#cyl-hight").value;

//   //   function Cylinder(cylinderDiameter, cylinderHight) {
//   //     this.diameter = cylinderDiameter;
//   //     this.hight = cylinderHight;
//   //     this.getVolume = function () {
//   //       const radius = this.diameter / 2;
//   //       return (Math.PI * radius * radius * this.hight).toFixed(2);
//   //     };
//   //   }

//   class Cylinder {
//     constructor(cylinderDiameter, cylinderHight) {
//       this.diameter = cylinderDiameter;
//       this.hight = cylinderHight;
//     }

//     getVolume() {
//       const radius = this.diameter / 2;
//       return (Math.PI * radius * radius * this.hight).toFixed(2);
//     }
//   }

//   if (diameter === "" || hight === "") {
//     result.innerText = "지름과 높이값을 입력하세요";
//   } else {
//     const cylinder = new Cylinder(parseInt(diameter), parseInt(hight));
//     result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}`;
//   }
// });
