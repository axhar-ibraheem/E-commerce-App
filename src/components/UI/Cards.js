import ProdContext from "../../store/prodContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const Cards = (props) => {
  const ctx = useContext(ProdContext);
  const useremail = ctx.email.replace(/[@.]/g, "");

  const addItemToCart = async () => {
    const response = await fetch(
      `https://crudcrud.com/api/${ctx.crudApiEndPoint}/cart${useremail}`,
      {
        method: "POST",
        cors: "no-cors",
        body: JSON.stringify({
          title: props.title,
          price: props.price,
          quantity: props.quantity,
          id: props.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      ctx.addToCart({
        ...data,
      });
    } else {
      const error = data.error.message;
      alert(error);
    }
  };
  return (
    <Col md="6" className="mb-4">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Link to={`/products/${props.id}`}>
          <Card.Img variant="top" src={props.image} />
        </Link>

        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Card.Title className="fw-bold m-0">{props.title}</Card.Title>
            <div>
              <span className="fw-bold fs-5">${props.price}</span>
            </div>
          </div>

          <Button
            onClick={addItemToCart}
            variant="info"
            className="px-3 fw-bold mt-1"
          >
            Add to Cart{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
