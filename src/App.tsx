import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import instance from "./apis";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { TProduct } from "./interfaces/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";

function App() {
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
    <>
      <div className="app">
        <Header />
        <main className="container" id="main">
          <Routes>
            {/* Client */}
            <Route path="/">
              <Route index element={<Home products={products} />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Admin */}
            <Route path="/admin">
              <Route index element={<Dashboard />} />
            </Route>

            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
