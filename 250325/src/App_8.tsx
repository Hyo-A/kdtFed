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
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: var(--light-color);
  border-radius: 40px;
  margin: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  // 박스의 초기값
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  // 박스가 mount
  leaving: {
    opacity: 0,
    y: 20,
  },
  // 박스가 unmount
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
