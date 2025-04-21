// import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background: ${({ bgColor }) => bgColor};
  border: 3px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
// <>제네릭 형식으로 타입을 주고 있는거

interface ContainerProps {
  bgColor: string;
  borderColor?: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

// text = "World" 이건 기본매개변수를 주듯이 주는것
const Circle = ({ bgColor, borderColor, text = "World" }: CircleProps) => {
  // const [counter, setCounter] = useState<number | string>(1);
  // setCounter(2);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
