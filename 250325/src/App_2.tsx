import styled from "styled-components";
import { motion } from "framer-motion";
import { start } from "repl";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: var(--light-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  place-self: center;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
      bounce: 0.5,
      delayChildren: 1,
      // 자식요소의 딜레이값도 관리 가능!!
      staggerChildren: 0.2,
      // 자식요소가 0.5초 간격으로 차례로 실행되어버림
    },
  },
};

const circleVarients = {
  start: {
    scale: 0,
    opacity: 0,
    y: 50,
  },
  end: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 2,
    },
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial={"start"} animate={"end"}>
        <Circle variants={circleVarients} />
        <Circle variants={circleVarients} />
        <Circle variants={circleVarients} />
        <Circle variants={circleVarients} />
      </Box>
    </Wrapper>
  );
}

export default App;
