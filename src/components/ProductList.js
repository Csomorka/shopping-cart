import Product from "./Product";

function ProductList({ products, handleClick, add, takeaway }) {
  return (
    <div>
      <h1>Desserts</h1>
      <div className="products">
        {products.map((product) => (
          <Product
            product={product}
            key={product.name}
            handleClick={handleClick}
            add={add}
            takeaway={takeaway}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
