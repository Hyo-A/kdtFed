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

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: #fff;
    stroke-width: 2;
  }
`;

const svg = {
  start: {
    pathLength: 0,
    fill: "rgba(255,255,255,0)",
  },
  end: {
    pathLength: 1,
    fill: "rgba(255,255,255,1)",
  },
};

function App() {
  return (
    <Wrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 3 },
          }}
          d="M24.5709 98.0331C25.8721 95.8788 25.3693 93.0933 23.3971 91.5299C12.1802 82.6378 5 68.9089 5 53.5C5 26.7142 26.7143 5 53.5 5C73.4828 5 90.6542 17.086 98.0816 34.3671C99.0742 36.6765 101.627 37.8899 104.044 37.2017C115.94 33.8148 128.504 32 141.5 32C154.496 32 167.06 33.8148 178.956 37.2017C181.373 37.8899 183.926 36.6765 184.918 34.3671C192.346 17.086 209.517 5 229.5 5C256.286 5 278 26.7142 278 53.5C278 68.9089 270.82 82.6378 259.603 91.5299C257.631 93.0933 257.128 95.8788 258.429 98.0331C270.851 118.6 278 142.707 278 168.5C278 243.887 216.887 305 141.5 305C66.1132 305 5 243.887 5 168.5C5 142.707 12.1491 118.6 24.5709 98.0331Z"
          stroke="#D9D9D9"
          stroke-width="10"
          stroke-linejoin="round"
        />
        <circle
          cx="89.5"
          cy="154.5"
          r="8.5"
          stroke="#ffffff"
          stroke-width="10"
          fill="rgba(255,255,255,0)"
        />
        <circle
          cx="193.5"
          cy="154.5"
          r="8.5"
          stroke="#ffffff"
          stroke-width="10"
          fill="rgba(255,255,255,0)"
        />
        <ellipse cx="125.5" cy="216.5" rx="28.5" ry="27.5" fill="#ffffff" />
        <ellipse cx="161.5" cy="216.5" rx="28.5" ry="27.5" fill="#ffffff" />
      </Svg>
    </Wrapper>
  );
}

export default App;
