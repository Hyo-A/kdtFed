import styled from "styled-components";

const Container = styled.button`
  border: 1px solid ${({ color }) => color};
  border-radius: 8px;
  background: ${({ color }) => color};
  color: var(--light-color);
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  &:hover {
    background: var(--light-color);
    color: var(--button-color);
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly color?: string;
  readonly onClick?: () => void;
}

const Button = ({ label, color = "#d775eb", onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
