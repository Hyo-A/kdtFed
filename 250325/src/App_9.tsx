import { useState } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background: #00471b;
  font-family: "DynaPuff", system-ui;
  color: var(--light-color);
  top: 30vh;
`;

const BoxList = styled.div`
  display: flex;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  margin: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  top: 25vh;
`;

const box = {
  initial: (back: boolean) => ({
    // 이제 back의 타입까지 알려줘야해 왜냐면 타입스크립트니까
    x: back ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
  // ({})이렇게 쓰는 이유는 {}만쓰면 그냥 반환값만 생기는것임
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotatex: 180,
    transition: {
      duration: 0.2,
    },
  },
  exits: (back: boolean) => ({
    x: back ? 200 : -200,
    opacity: 0,
    scale: 0,
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  // 뒤로가기는 false로 정의하고가자
  const [isAnimating, setIsAnimating] = useState(false);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 10 : prev - 1));
    // setVisivle의 인자값은 현재 visible한 녀석을 찾아옴
  };

  const nextPlease = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setBack(false);
    setVisible((prev) => (prev === 10 ? 1 : prev + 1));
    // setVisivle의 인자값은 현재 visible한 녀석을 찾아옴
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        {arr.map((i) =>
          i === visible ? (
            <Box
              custom={back}
              key={visible}
              // 키값이 바뀌는거는 컴퍼넌트가 리랜더링이 된다는 말임
              // 리랜더링 시점마다 다른 property속성값을 줘서 관리하고싶음
              // prev가 눌려졌을때에 x값이 반대로 움직이는 관리가 필요
              variants={box}
              initial="initial"
              animate="visible"
              exit="exits"
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <BoxList>
        <Button onClick={prevPlease}>Prev</Button>
        <Button onClick={nextPlease}>Next</Button>
      </BoxList>
    </Wrapper>
  );
}

export default App;
