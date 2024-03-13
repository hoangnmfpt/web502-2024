// src/pages/Home.tsx
import React from "react";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <ProductList />
    </div>
  );
};

export default Home;
