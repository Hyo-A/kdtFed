import GlobalStyles from "./styles/globalStyles.styles";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin: 100px 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Title>연락처</Title>
    </>
  );
}

export default App;
