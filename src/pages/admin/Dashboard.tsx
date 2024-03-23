import React, { useState } from "react";
import { TProduct } from "~/interfaces/Product";

type Props = {};

const Dashboard = (props: Props) => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Hello Admin!</h1>
      <form>
        <label>
          Enter your title:
          <input
            name="title"
            type="text"
            value={product?.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your title:
          <input
            name="description"
            type="text"
            value={product?.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your title:
          <input
            name="price"
            type="number"
            value={product?.price}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Dashboard;
