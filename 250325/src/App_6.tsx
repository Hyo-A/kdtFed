import { useEffect } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

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
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

/*
-800 => 2

-400 => 1.5

0 => 1

+400 => 0.5

+800 => 0

// useTransform은 위의 움직임에 따라 scale을 주고싶기 때문에 쓸거임
*/

function App() {
  const x = useMotionValue(0);

  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  // useTransform 첫번째 인자값은 변환하고싶은값
  // 두번째는 변환시키고 싶은 범위, 대상
  // 세번재는 변환 범위를 어떻게 변환하고 싶은가
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const background = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(0, 210, 112))",
      "linear-gradient(135deg,  rgb(0, 210, 112),rgb(213, 255, 62))",
      "linear-gradient(135deg, rgb(213, 255, 62), rgb(255, 174, 52)))",
    ]
  );

  useEffect(() => {
    scale.on("change", () => console.log(scale.get()));
  }, [x]);

  return (
    <Wrapper style={{ background }}>
      <Box style={{ x, scale, rotateZ }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
