import ProductList from "~/components/ProductList";

const Home = () => {
  return (
    <div>
      <h1>San pham ban chay</h1>
      <button
        className="btn"
        onClick={() => {
          console.log("Hello, World!");
        }}
      >
        Click Me!
      </button>
      <ProductList />
    </div>
  );
};

export default Home;
