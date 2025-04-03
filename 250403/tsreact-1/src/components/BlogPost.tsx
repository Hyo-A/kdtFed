import styled from "styled-components";

const Container = styled.div`
  background: var(--light-color);
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #f0d8bf;
  max-width: 800px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Body = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface Props {
  readonly title: string;
  readonly body: string;
}

const BlogPost = ({ title, body }: Props) => {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Container>
    </>
  );
};

export default BlogPost;
