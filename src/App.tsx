import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notfound from "~/pages/Notfound";
import { Container, ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
