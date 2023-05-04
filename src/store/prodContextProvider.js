import React, { useReducer } from "react";
import ProdContext from "./prodContext";

const initialState = {
  products: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.payload.quantity * action.payload.price;
      let isPresent = false;
      let updatedProducts;
      let newProductsArray = state.products.map((ele) => {
        if (ele.id === action.payload.id) {
          isPresent = true;
          return {
            ...ele,
            quantity: ele.quantity + action.payload.quantity,
          };
        }
        return ele;
      });
      if (isPresent) {
        updatedProducts = [...newProductsArray];
      } else {
        updatedProducts = state.products.concat(action.payload);
      }
      return {
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
    }

    default: {
      return state;
    }
  }
};

const ProdContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCartHandler = (product) => {
    dispatch({ type: "ADD", payload: product });
  };
  const context = {
    products: state.products,
    totalAmount: state.totalAmount,
    addToCart: addToCartHandler,
  };
  return (
    <ProdContext.Provider value={context}>
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContextProvider;
