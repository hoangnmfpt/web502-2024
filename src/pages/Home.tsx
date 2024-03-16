import { useState } from "react";
import ProductList from "~/components/ProductList";

const Home = () => {
  const [product, setProduct] = useState({
    name: "Gia tri khoi tao",
    price: 0,
  });

  const handleClick = () => {
    setProduct({ name: "Iphone 12", price: 2000 });
  };
  const showProduct1 = (sanPham: any) => {
    return <h1>{sanPham.name}</h1>;
  };

  type Props = { sanPham: any; name: string };

  const ShowProduct2 = (props: Props) => {
    return (
      <h1>
        San pham {props.sanPham.name} thuoc ve {props.name}
      </h1>
    );
  };

  // ! props = Properties = Các thuộc tính

  return (
    <div>
      <button className="btn" onClick={() => handleClick()}>
        Click Me!
      </button>
      {showProduct1(product)}
      <ShowProduct2 sanPham={product} name={"Hoang"} />
    </div>
  );
};

export default Home;
