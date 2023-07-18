import CartItems from "./CartItems";
import ProdContext from "../../store/prodContext";
import { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
const Cart = (props) => {
  const ctx = useContext(ProdContext);
  return (
    <Card
      className="position-absolute cart end-0 me-3 pb-3 overflow-auto"
      style={{ width: "25rem", height: "80vh" }}
    >
      <Card.Body>
        <div className="w-100 text-end">
          <Button
            variant="danger"
            size="sm"
            className="mx-auto"
            onClick={props.onHide}
          >
            X
          </Button>
        </div>

        <Card.Header className="text-center mt-4 fw-bolder fs-5 rounded mb-3">
          Your Cart <i className="bi bi-cart4 text-warning"></i>
        </Card.Header>

        <Row className="mb-3 ">
          <Col className="">
            <h5 className=" fw-bold">Product</h5>
          </Col>

          <Col>
            <h5 className=" fw-bold">Price</h5>
          </Col>
          <Col>
            <h5 className="fw-bold">Quantity</h5>
          </Col>
        </Row>

        {!!ctx.idToken ? (
          ctx.products.map((item) => (
            <CartItems
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
            />
          ))
        ) : (
          <div className="text-center">
            <span>Please login to see what is in your cart</span>
          </div>
        )}

        <div className=" d-flex mt-4">
          <h5 className="fw-bold ">Total Amount</h5>{" "}
          <h5 className="fw-bold ms-auto me-2">
            ${!!ctx.idToken ? ctx.totalAmount.toFixed(2) : 0}
          </h5>
        </div>
        <div className="text-center">
          {ctx.products.length > 0 && !!ctx.idToken ? (
            <Button
              onClick={() => alert("Your order is Placed")}
              variant="info"
              className="fw-bold mt-3"
            >
              Place Order
            </Button>
          ) : (
            <p className="text-dark pt-5 fw-bolder">Your Cart Is Empty</p>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cart;
