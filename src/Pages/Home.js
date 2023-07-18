import { Container, Row, Col, Button } from "react-bootstrap";
import backGroundImage from "../assets/images/home.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="pb-5">
        <Container>
          <Row className="justify-content-center align-items-center  mt-5">
            <Col lg={6}>
              <div className="text-center  pt-5">
                <h1>
                  Our <span className="text-warning fw-bold">Store</span>{" "}
                </h1>
                <p className="w-50 mx-auto py-2">
                  Shop the latest trends and must-have items from the comfort of
                  your own home. Our online store offers everything you need to
                  elevate your style and simplify your life.
                </p>
                <span className="fst-italic fs-4 fw-bolder text-info">
                  Ultraright Features
                </span>
                {"   "}
                <span className="fst-italic fs-4 fw-bolder text-warning">
                  Ultraright Pricetag
                </span>
              </div>
            </Col>
            <Col lg={6}>
              <img className="w-100 bg-danger" src={backGroundImage} alt="" />
            </Col>
          </Row>
          <div className=" d-flex justify-content-center">
            <Button
              as={Link}
              to="/products"
              variant="info"
              className="fw-bolder px-4 border"
            >
              Shop Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
