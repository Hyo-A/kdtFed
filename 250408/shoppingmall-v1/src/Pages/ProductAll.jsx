import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:3000/products";
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };
  // 복수의 api를 가져올땐 async와 await 필수 비동기적

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col lg={3} key={index}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
