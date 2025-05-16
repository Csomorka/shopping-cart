import { hover } from "@testing-library/user-event/dist/hover";
import { useProducts } from "../Context/ProductsContext";

function AddToCart({ id }) {
  const { handleClick } = useProducts();
  return (
    <button
      style={{
        color: "white",
        backgroundColor: "orangered",
        height: " 2rem",
      }}
      onClick={() => handleClick(id)}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
