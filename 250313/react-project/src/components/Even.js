import React, { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    return () => {
      console.log("Even component , 홀수가 되었습니다");
    }; // 이러면 짝수가 되는 unMount 순간에 cl이 찍힘 because unMount는 cleanup 시점을 거쳐가기 때문이다!?
  }, []);
  return <div>현제 카운트 수는 짝수 입니다</div>;
};

export default Even;
