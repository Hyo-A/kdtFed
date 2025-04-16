import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchByUsername } from "../reduce/reducer";

const Container = styled.div`
  & input[type="text"] {
    margin-bottom: 20px;
    padding: 8px;
    font-size: 1.6rem;
    /* width: 200px; */
    &::placeholder {
      font-size: 1.6rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    padding: 8px;
    font-size: 1.6rem;
  }
`;

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch(searchByUsername({ keyword }));
  };

  return (
    <Container>
      <Form onSubmit={searchByName}>
        <Form.Group>
          <Row>
            <Col xs={9}>
              <Form.Control
                type="text"
                placeholder="검색어를 입력해주세요"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>

            <Col xs={3}>
              <Button variant="primary" type="submit">
                찾기
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SearchBox;
