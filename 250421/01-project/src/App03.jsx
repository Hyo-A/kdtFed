import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 6px;
`;

const Input = styled.input`
  background: ${({ required }) => (required ? "tomato" : "teal")};
`;

function App() {
  return (
    <Container>
      <Input required="ture" />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App;
