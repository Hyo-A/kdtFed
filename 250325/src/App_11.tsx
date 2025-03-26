import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;

const Title = styled.div`
  position: absolute;
  font-size: 3rem;
  top: 10vh;
  left: 50%;
  transform: translateX(-50%);
`;

const Box = styled(motion.div)`
  width: 350px;
  height: 350px;
  background: var(--light-color);
  border: 10px solid black;
  border-radius: 80px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 120px;
  height: 120px;
  /* background: var(--circle-color); */
  /* border-radius: 30px; */
  /* box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2); */
`;

function App() {
  const [clicked, setCliked] = useState(false);

  const toggleClicked = () => {
    setCliked((prev) => !prev);
    // 지금 false인 값을 가져와서 !false 즉 true가 되도록 만드는거임
    // 한번더 누르면 true가 false가 되겠지
  };

  return (
    <>
      <Title>Make Sushi</Title>
      <Wrapper onClick={toggleClicked}>
        <Box>
          {!clicked ? (
            <Circle
              layoutId="circle"
              // layoutId="circle"를 다른데에도 주면 운명공동체의 역할을 할것임..
              style={{ background: "var(--circle-color)", borderRadius: 60 }}
            />
          ) : null}
        </Box>

        <Box>
          {clicked ? (
            <Circle
              layoutId="circle"
              style={{ background: "var(--circle-color2)", borderRadius: 20 }}
            />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
