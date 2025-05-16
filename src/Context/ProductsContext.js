import { createContext, useEffect, useContext, useReducer } from "react";

const ProdcutsContext = createContext();

const initialState = {
  products: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataLoaded":
      return { ...state, products: action.payload };

    case "clicked":
      return {
        ...state.products,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, isClicked: true, amount: 1 }
            : product
        ),
      };

    case "settingAmount":
      return {
        ...state,
        products: state.products.map((product) => ({ ...product, amount: 0 })),
      };

    case "adding":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };

    case "takingaway":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                amount: product.amount > 1 ? product.amount - 1 : 1,
              }
            : product
        ),
      };

    case "remove":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, amount: 0, isClicked: false }
            : product
        ),
      };

    default:
      throw new Error("Something went wrong");
  }
}

function ProductsProvider({ children }) {
  const [{ products }, dispatch] = useReducer(reducer, initialState);
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  useEffect(function () {
    const fetchProducts = async function () {
      try {
        const res = await fetch("http://localhost:3001/desserts");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        dispatch({ type: "dataLoaded", payload: data });
        dispatch({ type: "settingAmount" });
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  function handleClick(id) {
    dispatch({ type: "clicked", payload: id });
  }

  function add(id) {
    dispatch({ type: "adding", payload: id });
  }

  function takeaway(id) {
    dispatch({ type: "takingaway", payload: id });
  }

  function remove(id) {
    dispatch({ type: "remove", payload: id });
  }

  return (
    <ProdcutsContext.Provider
      value={{ products, handleClick, add, takeaway, total, remove }}
    >
      {children}
    </ProdcutsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProdcutsContext);
  if (context === undefined)
    throw new Error("ProductsContext was used outside the provider");
  return context;
}

export { ProductsProvider, useProducts };
