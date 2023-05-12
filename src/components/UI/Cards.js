import ProdContext from "../../store/prodContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

const Cards = (props) => {
  const ctx = useContext(ProdContext);

  const addItemToCart = () => {
    ctx.addToCart({
      ...props,
    });
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
          <div className="d-flex justify-content-between">
            <Card.Title>{props.title}</Card.Title>
            <div>
              <span>${props.price}</span>
            </div>
          </div>

          <Button variant="primary" className="px-4 fw-bold mt-1">
            Buy{" "}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
