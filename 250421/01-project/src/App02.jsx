import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 6px;
`;

const Button = styled.button`
  background: tomato;
  border: none;
  padding: 12px;
  color: #fff;
  border-radius: 6px;
  transition: all 0.4s;
  &:hover {
    background: #ff3814;
  }
`;

function App() {
  return (
    <Container>
      <Button>Login</Button>
      <Button as="a" href="/">
        Logout
      </Button>
    </Container>
  );
}

export default App;
