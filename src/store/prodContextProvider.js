import React, { useReducer } from "react";
import ProdContext from "./prodContext";

const initialState = {
  products: [],
  totalAmount: 0,
  idToken: "",
  isLoggedIn: false,
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
        ...state,
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
    }

    case "REMOVE": {
      let itemQuantity;
      let itemPrice;
      let updatedProducts;

      updatedProducts = state.products.map((item) => {
        if (item.id === action.payload) {
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
          (item) => item.id !== action.payload
        );
      }
      const updatedTotalAmount = Math.abs(state.totalAmount - itemPrice);
      return {
        ...state,
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
    }

    case "LOGIN": {
      localStorage.setItem("idToken", action.payload);
      return {
        ...state,
        idToken: action.payload,
        isLoggedIn: true,
      };
    }

    case "LOGOUT": {
      localStorage.removeItem("idToken");
      return {
        ...state,
        idToken: "",
        isLoggedIn: false,
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

  const removeFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const loginHandler = (token) => {
    dispatch({ type: "LOGIN", payload: token });
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
    isLoggedIn: state.isLoggedIn,
    apiKey: "AIzaSyBezG9y2vzN3ZEoEkEMYo68vi3GYFkJ99Q",
  };
  return (
    <ProdContext.Provider value={context}>
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContextProvider;
