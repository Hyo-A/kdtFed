import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div``;
const Name = styled.div``;
const Number = styled.div``;

const Img = styled.img`
  width: 100%;
`;

const ContactItem = ({ item }) => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
            alt="unknowImg"
          />
        </Col>
        <Col xs={9}>
          <Name>{item?.name}</Name>
          <Number>{item?.number}</Number>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactItem;
