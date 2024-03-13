// src/components/Product.tsx
import React from "react";
import { Card } from "react-bootstrap";
import { TProduct } from "~/interfaces/Product";

const Product: React.FC<{ product: TProduct }> = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: ${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
