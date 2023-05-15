import React, { useReducer } from "react";
import ProdContext from "./prodContext";

const initialState = {
  products: [],
  totalAmount: 0,
  idToken: localStorage.getItem("idToken"),
  email: localStorage.getItem("email"),
  crudApiEndPoint: "c602ac7f4c53433ba3682537b9dd1c5c",
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
        products: updatedProducts,
        totalAmount: updatedTotalAmount,
      };
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
    apiKey: "AIzaSyBezG9y2vzN3ZEoEkEMYo68vi3GYFkJ99Q",
    idToken: state.idToken,
    email: state.email,
    crudApiEndPoint: state.crudApiEndPoint,
  };
  return (
    <ProdContext.Provider value={context}>
      {props.children}
    </ProdContext.Provider>
  );
};

export default ProdContextProvider;
