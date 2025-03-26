import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled(motion.div)`
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  & > div {
    &:first-child,
    &:last-child {
      grid-column: span 2;
    }
  }
`;

const Box = styled(motion.div)`
  /* width: 400px; */
  height: 400px;
  background: var(--light-color);
  border: 4px solid black;
  border-radius: 30px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  // const [clicked, setClicked] = useState(false);
  // const toggle = () => {
  //   setClicked((prev) => !prev);
  // };

  const [id, setId] = useState<null | string>(null);
  // 상황에 따라 null이어야 하기도 하고 빈 문다일수도 있다 <null | string> 타입스크립트는 이케 해야함 얘는 유니온타입이라 부른다

  const arr = ["1", "2", "3", "4"];
  // layoutId는 반드시 문자로 받아야 하기 때문에 ""안에 숫자를 써서 굳이 문자열로 만든거임

  return (
    <Wrapper>
      <Grid>
        {arr.map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
          // 여기에 {n + ""}이렇게 해도 문잗가 되기는 함
        ))}
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId={id} style={{ width: 400, height: 400 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
