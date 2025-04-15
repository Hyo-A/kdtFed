import React from "react";
import { Container, Button, Form, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Wrapper = styled.div`
  & .inner-item {
    padding: 8px 20px;
  }
  /* & .me-2 {
    padding: 6px 14px;
    position: relative;
    top: -5px;
  }
  & button[type="button"] {
    padding: 6px 14px;
    position: relative;
    top: -5px;
  } */
`;

const Logo = styled.img`
  width: 70px;
  margin-right: 2px;
`;

const BtnItem = styled.span`
  color: var(--light-color);
  font-weight: 300;
  transition: color 0.3s;
  padding: 2px;
  font-family: "GmarketSansLight";
  font-size: 1.4rem;
  &:hover {
    color: var(--accent-color2);
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <Navbar variant="dark" bg="dark" className="navbar" expand="lg">
        <Container fluid className="inner-item">
          <Navbar.Brand href="#">
            <Logo
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Disney_Plus_logo.svg/1200px-Disney_Plus_logo.svg.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <BtnItem>Home</BtnItem>
              </Nav.Link>
              <Nav.Link href="/movies">
                <BtnItem>Movie</BtnItem>
              </Nav.Link>
              <Nav.Link href="/">
                <BtnItem>Tv</BtnItem>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;
