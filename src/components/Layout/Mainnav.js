import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";
import ProdContext from "../../store/prodContext";
import { useContext, useState, useRef } from "react";

const Mainnav = (props) => {
  const ctx = useContext(ProdContext);

  const history = useHistory();
  const prodQuantity = ctx.products.length;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold d-none d-md-block ">
            Our <span className="text-warning fs-3 fw-bold">Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
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
          <div className="d-flex" to="/auth">
            {ctx.isLoggedIn ? (
              <Button
                onClick={ctx.logout}
                variant="outline-info"
                className="fw-bold text-dark"
              >
                Log Out
              </Button>
            ) : (
              <Button
                as={Link}
                to="/auth"
                variant="outline-info"
                className="fw-bold text-dark"
              >
                Log In
              </Button>
            )}

            <Button
              onClick={props.onShow}
              variant="warning"
              className="ms-4 px-4 fw-bolder text-dark rounded-pill"
            >
              Cart {prodQuantity}
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Mainnav;
