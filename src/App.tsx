import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Header />
      <Banner />
      <Home />
      <Footer />
    </>
  );
};

export default App;
