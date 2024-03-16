// src/components/Footer.tsx
import React from "react";

const sum = (a: number, b: number) => {
  return a + b;
};

const Footer: React.FC = () => {
  return (
    <footer>
      {sum(1, 2)}
      <p>&copy; 2024 E-commerce App by Hoangnm</p>
    </footer>
  );
};

export default Footer;
