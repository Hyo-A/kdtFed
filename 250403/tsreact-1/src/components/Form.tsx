import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";
import BlogPost from "./BlogPost";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-color);
  overflow: scroll;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

const Contents = styled.div`
  z-index: 1;
  background: var(--light-color);
  padding: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.4rem;
  margin-bottom: 4px;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 4px;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

const Form = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPost);
    // }, 1000);
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);
  // 마운트 되는 시점에서 해당 사항 진행

  return (
    <Container>
      <Header />
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
        // 맵을 주면 꼭 키값을 생각해!!
      ))}
      <ButtonContainer>
        <Button label={"click"} />
      </ButtonContainer>
      <ContainerForm>
        <Background />
        <Contents>
          <Title>블로그 등록</Title>
          <InputGroup>
            <Label>Title</Label>
            <Input />
          </InputGroup>
          <InputGroup>
            <Label>Body</Label>
            <Input />
          </InputGroup>
          <Actions>
            <Button label="등록하기" />
            <Button label="닫기" color="#62ad3f" />
          </Actions>
        </Contents>
      </ContainerForm>
    </Container>
  );
};

export default Form;
