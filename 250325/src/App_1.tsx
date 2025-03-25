import styled from "styled-components";
import { motion } from "framer-motion";

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
  background: var(--light-color);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const myVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    transition: {
      type: "spring",
      damping: 5,
      mass: 10,
      duration: 4,
      delay: 0.5,
    },
  },
};
// "spring"은 스프링처럼 튀어오르는 타입
// damping은 중력크기
// mass는 무거운정도 크기

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial={"start"} animate={"end"} />
    </Wrapper>
  );
}

export default App;
