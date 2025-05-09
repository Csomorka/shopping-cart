import { hover } from "@testing-library/user-event/dist/hover";

function AddToCart({ id, handleClick }) {
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
