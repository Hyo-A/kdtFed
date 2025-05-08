// 얘는 클라이언트 역할을 할 수 있게 파일을 넣을거임
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  // 우리는 서버에서 제공해주는 4000번 포트를 통해 데이터를 받아올거고,
  // cache기능을 사용할거야
});

export default client;
