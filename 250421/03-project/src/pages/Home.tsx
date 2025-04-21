import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

const Title = styled.h1`
  font-size: 32px;
`;

const ListGroup = styled.ul`
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  // console.log(readSearchParams.get("geo"));
  // usesearchparams는 현 페이지의 query를 다루는것
  // get은 직접 값을 찾아옴 // has는 값의 여부에 따라 boolean 반환

  setTimeout(() => {
    setSearchParams({
      day: "today",
      tomorrow: "0422",
    });
  }, 3000);

  return (
    <>
      <Title>Users List</Title>
      <ListGroup>
        {users.map((user) => (
          <ListItem key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </ListItem>
          // 항상 key갑을 줘야하고 그러려고 id값을 매겨놨지
        ))}
      </ListGroup>
    </>
  );
};

export default Home;
