import "./CartButton.css";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";

const CartButton = (props) => {
  const ctx = useContext(ProdContext);
  return (
    <div>
      <button onClick={props.onShow} className="cart-btn">
        Cart <span>{ctx.products.length}</span>
      </button>
    </div>
  );
};

export default CartButton;
