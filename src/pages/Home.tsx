import { useEffect, useState } from "react";
import ProductList from "~/components/ProductList";
import { TProduct } from "~/interfaces/Product";
import axios from "axios";
import instance from "~/apis";

const Home = () => {
  /**
   * ! Dependency với 3 trường hợp:
   * ? undefined: không có dependency - re-render khi state được cập nhật.
   * ? []: empty array - chỉ re-render khi componentDidMount.
   * ? [state1, state2,...]: re-render khi một trong số các state được cập nhật.
   */

  return (
    <div>
      <h2 className="sessionTitle">Danh cho nam:</h2>
      <ProductList category="nam" />
      <br />
      <h2 className="sessionTitle">Danh cho nu:</h2>
      <ProductList category="nu" />
      <br />
      <h2 className="sessionTitle">Danh cho tre em:</h2>
      <ProductList category="kid" />
    </div>
  );
};

export default Home;
