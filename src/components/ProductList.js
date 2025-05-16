import { useProducts } from "../Context/ProductsContext";
import Product from "./Product";

function ProductList() {
  const { products } = useProducts();

  return (
    <div>
      <h1>Desserts</h1>
      <div className="products">
        {products.map((product) => (
          <Product product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
