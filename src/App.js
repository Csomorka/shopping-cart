import "./index.css";
import ProductList from "./components/ProductList";
import ShoppingTotal from "./components/ShoppingTotal";
import { useProducts } from "./Context/ProductsContext";

function App() {
  const { total, remove } = useProducts();

  return (
    <div className="container">
      <ProductList />
      {total > 0 ? <ShoppingTotal handleOperation={remove} /> : ""}
    </div>
  );
}

export default App;
