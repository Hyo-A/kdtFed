import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// 조건을 더 달것이면 useNavigate를 쓰면 되고 단순 a태그를 쓰고싶으면 Link를 써라
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  margin-bottom: 10px;
  & img {
    width: 100%;
  }
`;

const MenuArea = styled.ul`
  display: flex;
  gap: 30px;
  width: 100%;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  background: var(--dark-color);
  color: var(--light-color);
  font-size: 1.6rem;
  margin-bottom: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 80px;
  right: 30px;
`;

const SearchBox = styled.div`
  & > input {
    width: 140px;
    border: none;
    padding: 4px 6px;
    border-bottom: 1px solid var(--dark-color);
    &::placeholder {
      color: var(--border-color);
      transition: opacity 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 80px;
  left: 30px;
  cursor: pointer;
  font-size: 2.2rem;
`;

const SideMenu = styled.div`
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  /* width: 200px; */
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--dark-color);
  color: var(--light-color);
  z-index: 1;
  transition: all 0.3s;
  & > svg {
    position: absolute;
    top: 70px;
    right: 30px;
    font-size: 2.2rem;
  }
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 1%.8;
    padding: 200px 40px 70px 40px;
    & > li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "베스트",
  "신제품",
  "이벤트",
  "슈퍼세일",
];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  }; // 이벤트가 시행되면 시작되는 함수이기때문에 e객체를 찾아올수 있다
  // e객체 안에 key값이 enter라면 value값인 내가 친 원피스를 쿼리로 보내기

  return (
    <Container>
      <Logo className="fendi">
        <Link to={"/"}>
          <img // 링크는 a태그처럼 어디론가 가는 경로를 써주면 된다
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zgRLVTkH_2exhRDdnQ8eIQLnqLLR5X2edQ&s"
            alt="toss"
          />
        </Link>
      </Logo>
      <MenuArea className="menu">
        {
          menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))
          // map 안에 콜백함수가 있는데,새로운 배열으로 나오도록 // key값 필수!
        }
      </MenuArea>
      <HeaderTop className="headertop">
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="상품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
        {
          authenticate ? (
            <LoginAuth onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </LoginAuth>
          ) : (
            <LoginAuth onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </LoginAuth>
          )
          // authenticate가 true면 로그아웃 false면 로그인 // 초기값은 로그인이 되게끔 할거임
        }
      </HeaderTop>
      <SideMenu width={width}>
        <FontAwesomeIcon icon={faClose} onClick={() => setWidth(0)} />
        <ul className="side-menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
      </SideMenu>
      <ToggleButton className="togglebtn">
        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(200)} />
      </ToggleButton>
    </Container>
  );
};

export default Navbar;
