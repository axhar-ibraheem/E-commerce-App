import "./Card.css";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";

const Card = (props) => {
  const ctx = useContext(ProdContext);
  const addItemToCart = () => {
    ctx.addToCart({
      ...props,
    });
  };
  return (
    <div className="cards">
      <div className="card-title">
        <span>{props.title}</span>
      </div>
      <div className="card-image">
        <img src={props.image} alt="a product" />
      </div>
      <div className="card-info">
        <p>${props.price}</p>
        <button onClick={addItemToCart}>add to cart</button>
      </div>
    </div>
  );
};

export default Card;
