import { useState } from "react";

type TProduct = {
  name: string,
  price: number

}
const Home = () => {
  let productInitial = {
    name: "Ten san pham chua cap nhat", price: 0
  }
  const [product, setProduct] = useState(productInitial)

  const getProduct = () => {
    setProduct( {
      name: "Laptop", price: 2000
    })
    console.log(product)
  }

  const showProduct1 = (product:TProduct) =>{
    return (
      <>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      </>
    )
  }
  // ! state = trạng thái
  // ! props = propeties = Các thuộc tính
  const ShowProduct2 = (props:{product: TProduct}) =>{
    return (
      <>
      <h2>{props.product.name}</h2>
      <p>{props.product.price}</p>
      </>
    )
  }
  return (
    <>
    <button onClick={() =>getProduct()}>Cap nhat san pham</button>
      {showProduct1(product)}
      <ShowProduct2 product={product}/>
    </>
  );
};

export default Home;
