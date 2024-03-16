import { useState } from "react";
import Product from "~/components/Product";

const Home = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
  });

  // ! Get API va lay ra duoc:
  const productData = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  };

  const handleClick = () => {
    setProduct(productData);
  };
  const showProduct1 = (sanPham: any) => {
    return <h1>{sanPham.name}</h1>;
  };
  // ! props = Properties = Các thuộc tính

  return (
    <div>
      <button className="btn" onClick={() => handleClick()}>
        Click Me!
      </button>
      {showProduct1(product)}
      <Product product={product} />
    </div>
  );
};

export default Home;
