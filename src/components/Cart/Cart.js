import "./Cart.css";
import CartItems from "./CartItems";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";

const Cart = (props) => {
  const ctx = useContext(ProdContext);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      <button onClick={props.hideCart} className="cancel-btn">
        X
      </button>
      <div className="cart-info">
        <span className="item">ITEM</span>
        <span className="price">PRICE</span>
        <span className="quantity">QUANTITY</span>
      </div>
      <div className="cartItems">
        {ctx.products.map((item) => (
          <CartItems
            key={Math.random()}
            image={item.image}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="total-amount">
        <span>Total </span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="purchase-btn">
        <button>purchase</button>
      </div>
    </div>
  );
};

export default Cart;
