import { useState } from "react";
import ProductList from "~/components/ProductList";

const Home = () => {
  const [product, setProduct] = useState({
    price: 0,
    name: "Gia tri khoi tao",
  });

  const handleClick = () => {
    setProduct({ price: 200, name: "Ten moi cua san pham" });
  };

  return (
    <div>
      <h1>San pham ban chay</h1>
      <button className="btn" onClick={() => handleClick}>
        Click Me!
      </button>
      {product.name}
      <ProductList />
    </div>
  );
};

export default Home;
