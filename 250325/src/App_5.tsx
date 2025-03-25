import { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

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

function App() {
  const x = useMotionValue(0);

  useEffect(() => {
    x.on("change", () => console.log(x.get()));
  }, [x]);

  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>Click Me!</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
