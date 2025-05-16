import { useProducts } from "../Context/ProductsContext";
import Button from "./Button";

function ShoppingTotal({ handleOperation }) {
  const { products, total } = useProducts();

  return (
    <div className="cart">
      <p>
        <strong>Your Cart</strong>
      </p>
      {products.map((product) =>
        product.amount >= 1 ? (
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <p key={product.name}>
              {product.amount}x {product.name} ${product.price * product.amount}
            </p>
            <Button
              handleOperation={() => handleOperation(product.id)}
              style={{ height: "1.5rem", width: "1.5rem" }}
            >
              x
            </Button>
          </div>
        ) : (
          ""
        )
      )}
      <h2>
        Your total is <strong>${total}</strong>
      </h2>
    </div>
  );
}

export default ShoppingTotal;
