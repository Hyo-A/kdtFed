import styled from "styled-components";
import type { ITweet } from "./TimeLine";
// interface 타입을 가져와서 앞에 타입 쓰는건가

const Container = styled.div``;

const Column = styled.div``;

const Photo = styled.img``;

const Video = styled.video``;

const Username = styled.span``;

const Payload = styled.p``;

const Tweet = ({ username, photo, video, tweet }: ITweet) => {
  return (
    <Container>
      <Column>
        <Username></Username>
        <Payload></Payload>
      </Column>
      <Column></Column>
    </Container>
  );
};

export default Tweet;
