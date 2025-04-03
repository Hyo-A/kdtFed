import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  background: ${({ color }) => color};
  color: var(--light-color);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.85;
  }
  &:active {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

const Button = ({ label, color = "#e45633", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
