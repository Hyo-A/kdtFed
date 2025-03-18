import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid var(--primary-light-color);
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background: #000;
    color: #fff;
    border-radius: 20px;
  }
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
};

export default Button;
