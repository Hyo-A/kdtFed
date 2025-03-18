import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  display: block;
  width: calc(100% - 32px);
  ${({ height }) => height && `height: ${height}px`};
  margin: 0 auto 15px;
  padding: 16px;
  line-height: 20px;
  resize: none;
`;

const TextInput = ({ height, value, onChange }) => {
  return <StyledTextarea height={height} value={value} onChange={onChange} />;
};

export default TextInput;
