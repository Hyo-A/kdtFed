import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: ${({ theme }) => theme.background};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    background: #ff8331;
    border-radius: 20%;
  }
  25%{
    transform: rotate(180deg);
    background: #8fdf26;
    border-radius: 50%;
  }
  50%{
    transform: rotate(360deg);
    background: #00d3d3;
    border-radius: 20%;
  }
  25%{
    transform: rotate(180deg);
    background: #8fdf26;
    border-radius: 50%;
  }
  from {
    transform: rotate(0deg);
    background: #ff8331;
    border-radius: 20%;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  cursor: none;
`;

const Box = styled.div`
  width: 180px;
  height: 180px;
  background: #ff8331;
  animation: ${rotationAnimation} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 80px;
    cursor: pointer;
  }
  ${Emoji}:active {
    opacity: 0;
  }
`;

function App() {
  return (
    <Container>
      <Title>hello</Title>
      <Box>
        <Emoji>💙</Emoji>
      </Box>
      <Emoji>💛</Emoji>
    </Container>
  );
}

export default App;
