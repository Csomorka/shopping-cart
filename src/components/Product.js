import { useProducts } from "../Context/ProductsContext";
import AddToCart from "./AddToCart";
import Button from "./Button";

function Product({ product }) {
  const { takeaway, add } = useProducts();
  const { name, image, price, amount } = product;
  const { desktop } = image;

  return (
    <div className="card">
      <img alt={name} src={"../" + desktop} />

      {!product.isClicked ? (
        <AddToCart id={product.id} />
      ) : (
        <div className="btn">
          <Button id={product.id} handleOperation={takeaway}>
            -
          </Button>
          <p>{amount}</p>
          <Button id={product.id} handleOperation={add}>
            +
          </Button>
        </div>
      )}
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <strong>{name}</strong>
      </p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "red",
          marginTop: "5px",
        }}
      >
        <strong>${price}</strong>
      </p>
    </div>
  );
}

export default Product;
