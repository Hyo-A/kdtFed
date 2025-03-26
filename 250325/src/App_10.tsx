import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: var(--light-color);
  border-radius: 60px;
  margin: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: var(--circle-color);
  border-radius: 50px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [clicked, setCliked] = useState(false);

  const toggleClicked = () => {
    setCliked((prev) => !prev);
    // 지금 false인 값을 가져와서 !false 즉 true가 되도록 만드는거임
    // 한번더 누르면 true가 false가 되겠지
  };

  return (
    <Wrapper onClick={toggleClicked}>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        <Circle />
      </Box>
    </Wrapper>
  );
}

export default App;
