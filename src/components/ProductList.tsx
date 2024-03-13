// src/components/ProductList.tsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import instance from "~/apis";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h2>Product List</h2>
      <Row>
        {products.map((product: any) => (
          <Col key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
