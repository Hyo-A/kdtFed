import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 25px 0;
`;

const Label = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
};

export default Title;
