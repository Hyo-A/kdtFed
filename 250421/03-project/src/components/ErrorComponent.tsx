import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #ccc;
`;

const Error = styled.span`
  font-size: 16px;
`;

const ErrorComponent = () => {
  return (
    <Container>
      <Error>요청하신 페이지는 존재하지 않습니다</Error>
    </Container>
  );
};

export default ErrorComponent;
