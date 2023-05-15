import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ProdContext from "../../store/prodContext";
import { useContext, useEffect } from "react";

const Mainnav = (props) => {
  const ctx = useContext(ProdContext);
  const prodQuantity = ctx.products.length;

  let useremail;
  if (ctx.email) {
    useremail = ctx.email.replace(/[@.]/g, "");
  }

  const onClickHandler = () => {
    props.onShow();
  };

  useEffect(() => {
    async function fetchCartItems() {
      const response = await fetch(
        `https://crudcrud.com/api/${ctx.crudApiEndPoint}/cart${useremail}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        data.map((item) => ctx.addToCart({ ...item }));
      } else {
        const error = data.error.message;
        alert(error);
      }
    }

    fetchCartItems();
  }, [useremail]);

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
            {!!ctx.idToken ? (
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
              onClick={onClickHandler}
              variant="warning"
              className="ms-4 px-4 fw-bolder text-dark rounded-pill"
            >
              Cart {!!ctx.idToken ? prodQuantity : 0}
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Mainnav;
