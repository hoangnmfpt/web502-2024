import React from "react";
import { Link } from "react-router-dom";
import { TProduct } from "~/interfaces/Product";
import style from "./ProductItem.module.scss";

type Props = { product: TProduct };
const ProductItem: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div key={product.id} className={style.productItem}>
        <Link to={`/shop/${product.id}`}>
          <img width={300} src={product.thumbnail} alt={product.title} />
        </Link>
        <div className={style.content}>
          <Link to={`/shop/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          <p>{product.price}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
