import React, { useState } from "react";
import { TProduct } from "~/interfaces/Product";

type Props = { products: TProduct[]}

const Dashboard = ({ products}: Props) => {
  console.log(products)
  return (
    <div>
      <h1>Hello Admin!</h1>
    </div>
  );
};

export default Dashboard;
