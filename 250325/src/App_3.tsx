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
  background: var(--light-color);
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: { scale: 1.4, rotateZ: 90 },
  click: { scale: 0.8, borderRadius: "100px" },
  drag: { backgroundColor: "green", transition: { duration: 4 } },
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVariants}
        whileHover={"hover"}
        whileTap={"click"}
        whileDrag={"drag"}
      />
    </Wrapper>
  );
}

export default App;
