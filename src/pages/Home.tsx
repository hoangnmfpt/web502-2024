import ProductList from "~/components/ProductList";

const Home = () => {
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
