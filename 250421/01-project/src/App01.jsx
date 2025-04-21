import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Box = styled.div`
  background: ${({ bgColor }) => bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.span`
  color: #fff;
`;

function App() {
  return (
    <Container>
      <Box bgColor="teal">
        <Text>hello</Text>
      </Box>
      <Circle bgColor="tomato" />
    </Container>
  );
}

export default App;
