import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// parameter 값을 가져오는 함수
import { Container, Row, Col, Dropdown, Button, Card } from "react-bootstrap";

const Wrapper = styled.div`
  margin-top: 50px;
  & Button {
    padding: 14px;
    border-radius: 10px;
    font-size: 1.4rem;
  }
  & .dropdown-menu {
    width: 100%;
    & .dropdown-item {
      font-size: 1.6rem;
      padding: 10px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProductTitle = styled.div`
  font-size: 2.6rem;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 1.8rem;
`;

const ProductChoice = styled.div`
  font-weight: 600;
  font-size: 2rem;
  color: var(--accent-color);
`;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `http://localhost:3000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
    // console.log(data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Row>
          <Col>
            <Img src={product && product?.img} alt={product && product?.id} />
          </Col>
          <Col>
            <ProductDesc>
              <ProductTitle>상품명 : {product && product?.title}</ProductTitle>
              <ProductPrice>상품가격 : {formattedPrice}원</ProductPrice>
              <ProductChoice>
                {product && product?.sale ? "Sale Event" : ""}
              </ProductChoice>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  사이즈를 선택하세요
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {product &&
                    product?.size.length > 0 &&
                    product?.size.map((item, index) => (
                      <Dropdown.Item key={index} href="#">
                        {item}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="dark">장바구니</Button>
              <Button variant="danger">상품결제</Button>
            </ProductDesc>
            <Card
              style={{
                width: "100%",
                marginTop: "30px",
                height: "100px",
                borderRadius: "10px",
                background: "#e0e0e0",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "100%",
                marginTop: "30px",
                borderRadius: "10px",
                height: "300px",
              }}
            >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default ProductDetail;
