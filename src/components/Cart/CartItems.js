import { Row, Col, Button } from "react-bootstrap";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";
const CartItems = (props) => {
  const ctx = useContext(ProdContext);

  const onDecrementHandler = () => {
    ctx.removeFromCart(props.id);
  };

  const onIncrementHandler = () => {
    ctx.addToCart({
      ...props,
      quantity: 1,
    });
  };
  return (
    <Row className="mb-3 overflow-auto align-items-center">
      <Col className="">
        <img className="w-100" src={props.image} alt="product" />
        <span className="">{props.title}</span>
      </Col>
      <Col className="text-center">
        <p className="fw-bold text-dark my-auto h-100">${props.price}</p>
      </Col>
      <Col className="">
        <Button
          size="sm"
          variant="outline-success"
          onClick={onIncrementHandler}
        >
          <i className="bi bi-plus-lg"></i>
        </Button>
        <span className="fw-bold px-2">{props.quantity}</span>
        <Button variant="outline-danger" size="sm" onClick={onDecrementHandler}>
          <i className="bi bi-dash-lg fw-bold"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default CartItems;
