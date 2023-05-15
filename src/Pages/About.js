import { Container, Row, Col, Button } from "react-bootstrap";
import aboutimage from "../assets/images/about.jpg";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
const About = () => {
  return (
    <>
      <section className=" mt-5">
        <Container className=" py-auto ">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="text-center py-4">
                <h1>
                  About <span className="text-info">Us</span>{" "}
                </h1>
                <i className="bi bi-person fs-1 display-1 text-warning"></i>
                <p className="w-75 mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo maxime iste deleniti cumque voluptas nobis ex iusto,
                  necessitatibus tempore dolorum tempora veritatis voluptatem
                  facere aperiam perferendis quos, praesentium nemo molestiae
                  ducimus aliquid minus voluptate ipsam itaque. Nostrum,
                  incidunt odit? Quis velit tenetur totam mollitia dolores!
                  Quasi itaque nisi quo alias.
                </p>
                <Button variant="outline-info" className="fw-bold mt-3">
                  See More..
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img src={aboutimage} className="d-block w-100" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
