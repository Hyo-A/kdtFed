import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const rotationAnimation = keyframes`
  0% {
  transform: rotate(0deg);
  border-radius: 0px;
  }
  50%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
  border-radius: 0px;
  }
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 5s linear infinite;
`;

function App() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default App;
