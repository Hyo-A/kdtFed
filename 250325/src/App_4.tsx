import { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: {
    scale: 1.5,
    rotateZ: 90,
  },
  click: {
    scale: 0.8,
    borderRadius: "100px",
  },
};

function App() {
  const biggerRef = useRef<HTMLDivElement>(null);
  // useRef에 오류뜨면 당장에는 그냥 null값 줘버리기

  return (
    <Wrapper>
      <BiggerBox ref={biggerRef}>
        <Box
          drag
          dragSnapToOrigin
          // 암만 움직여도 원래 위치로 다시 움직이는것
          dragElastic={1}
          // 찰랑찰랑
          dragConstraints={biggerRef}
          variants={boxVariants}
          whileHover={"hover"}
          whileTap={"click"}
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
