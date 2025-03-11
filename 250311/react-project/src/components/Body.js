import "./Body.css";

const Body = ({ name }) => {
  // const num = 19;
  // // 식은 jsx문법에서 사용가능하나, 문은 jsx문법에서 사용이 불가
  // if (num % 2 === 0) {
  //   return (
  //     <h1 style={{ background: "red", color: "blue" }}>{num}은 짝수 입니다.</h1>
  //   );
  // } else {
  //   return (
  //     <h1 style={{ background: "red", color: "blue" }}>{num}은 홀수 입니다.</h1>
  //   );
  // }
  //
  //
  // return (
  //   <>
  //     <h2>
  //       {num} 는 {num % 2 === 0 ? "짝수" : "홀수"}입니다
  //     </h2>
  //   </>
  // );

  return (
    <>
      <h1>Body</h1>
      {name}
    </>
  );
};

export default Body;
