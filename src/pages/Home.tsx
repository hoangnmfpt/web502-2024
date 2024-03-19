import { useEffect, useState } from "react";
import ProductList from "~/components/ProductList";
import { TProduct } from "~/interfaces/Product";

const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  // ! Get API va lay ra duoc:

    useEffect(() =>{ fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      return () =>{
        console.log("unmount");
        //! cleanup function
      }
    })}, [])

  /**
   * ! Dependency với 3 trường hợp:
   * ? undefined: không có dependency - re-render khi state được cập nhật.
   * ? []: empty array - chỉ re-render khi componentDidMount.
   * ? [state1, state2,...]: re-render khi một trong số các state được cập nhật.
   */

  return (
    <div>
      {/* <button className="btn" onClick={() => handleClick()}>
        Click Me!
      </button> */}
      
      <ProductList products={products} />
    </div>
  );
};

export default Home;
