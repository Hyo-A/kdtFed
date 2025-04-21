import { Link, useNavigate } from "react-router-dom";
// a태그같은 역할임
import styled from "styled-components";

const Container = styled.div``;

const Gnb = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => navigate("/about");
  // navigate는 조건값에 따라서 설정을 할 수 있다는 link와의 차이점이 있다

  return (
    <Container>
      <Gnb>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Button onClick={onAboutClick}>About</Button>
        </ListItem>
      </Gnb>
    </Container>
  );
};

export default Header;
