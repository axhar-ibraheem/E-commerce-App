import React, { useReducer } from "react";
import ProdContext from "./prodContext";

const initialState = {
  products: [],
  totalAmount: 0,
  changed: false,
  idToken: localStorage.getItem("idToken"),
  email: localStorage.getItem("email"),
  apiKey: "AIzaSyBBJKMJpiJwRT7pysssGdB0JGHwZ4L7t98",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedTotalAmount =
        state.totalAmount + action.product.quantity * action.product.price;
      let isPresent = false;
      let updatedProducts;
      let newProductsArray = state.products.map((ele) => {
        if (ele.id === action.product.id) {
          isPresent = true;
          return {
            ...ele,
            quantity: ele.quantity + action.product.quantity,
          };
        }
        return ele;
      });
      if (isPresent) {
        updatedProducts = [...newProductsArray];
      } else {
        updatedProducts = state.products.concat(action.product);
      }
      return {
        ...state,
        changed: true,
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
    }

    case "REMOVE": {
      let itemQuantity;
      let itemPrice;
      let updatedProducts;

      updatedProducts = state.products.map((item) => {
        if (item.id === action.id) {
          itemQuantity = item.quantity;
          itemPrice = item.price;

          if (itemQuantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      });

      if (itemQuantity === 1) {
        updatedProducts = state.products.filter(
          (item) => item.id !== action.id
        );
      }
      const updatedTotalAmount = Math.abs(state.totalAmount - itemPrice);
      return {
        ...state,
        changed: true,
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
    }
    case "REPLACE CART":{
      const products  = action.cart?.products ?? []
      const totalAmount = action.cart?.totalAmount ?? 0
       return {
        ...state,
        products : products,
        totalAmount : totalAmount,
       }
    }
    case "LOGIN": {
      localStorage.setItem("idToken", action.token);
      localStorage.setItem("email", action.email);

      return {
        ...state,
        idToken: action.token,
        email: action.email,
      };
    }

    case "LOGOUT": {
      localStorage.removeItem("idToken");
      localStorage.removeItem("email");
      return {
        ...state,
        products: [],
        totalAmount: 0,
        idToken: "",
        email: "",
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
    dispatch({ type: "ADD", product: product });
  };

  const removeFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };
  const replaceCartHandler = (cart) => {
    dispatch({ type: "REPLACE CART", cart: cart });
  };
  const loginHandler = (token, email) => {
    dispatch({ type: "LOGIN", token: token, email: email });
  };
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  };

  const context = {
    products: state.products,
    totalAmount: state.totalAmount,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    login: loginHandler,
    logout: logoutHandler,
    replaceCart: replaceCartHandler,
    apiKey: state.apiKey,
    idToken: state.idToken,
    email: state.email,
    changed: state.changed,
  };
  return (
    <ProdContext.Provider value={context}>
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContextProvider;
