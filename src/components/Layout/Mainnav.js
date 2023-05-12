import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
const Mainnav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold">
          Our <span className="text-warning fs-3 fw-bold">Store</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4">
            <Nav.Link className="fs-5 fw-bold" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="fs-5 fw-bold" as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link className="fs-5 fw-bold" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="fs-5 fw-bold" as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Mainnav;
