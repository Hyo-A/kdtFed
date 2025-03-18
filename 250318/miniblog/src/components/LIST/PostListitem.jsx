import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid grey;
  border-radius: 8px;
  padding: 16px;
  background: var(--primary-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: poineter;
  transition: all 0.3s;
  &:hover {
    background: lightgray;
  }
`;

const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const PostListitem = ({ post, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
};

export default PostListitem;
