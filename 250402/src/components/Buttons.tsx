import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  background: var(--button-color);
  color: var(--light-color);
  border: 1px solid var(--button-color);
  padding: 8px 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: var(--light-color);
    border: 1px solid var(--button-color);
    color: var(--button-color);
  }
  &:active {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly onClick: () => void;
}

// const Buttons = ({ label, onClick }: Props) => {
//   return <Container onClick={onClick}>{label}</Container>;
// };

class Buttons extends Component<Props> {
  // render() 메서드는 React 클래스형 컴포넌트에서 필수적인 메서드
  render() {
    const { label, onClick } = this.props;
    return <Container onClick={onClick}>{label}</Container>;
  }
}

export default Buttons;
