import { useEffect, useState } from "react";
import instance from "~/apis";
import { TProduct } from "~/interfaces/Product";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get(`/products`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>Danh sach san pham</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
