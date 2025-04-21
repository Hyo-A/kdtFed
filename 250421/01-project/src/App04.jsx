import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    background: tomato;
    border-radius: 10%;
  }
  25%{
    transform: rotate(180deg);
    background: #8fdf26;
    border-radius: 50%;
  }
  50%{
    transform: rotate(360deg);
    background: #00d3d3;
    border-radius: 10%;
  }
  25%{
    transform: rotate(180deg);
    background: #8fdf26;
    border-radius: 50%;
  }
  from {
    transform: rotate(0deg);
    background: tomato;
    border-radius: 10%;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 2s linear infinite;
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
