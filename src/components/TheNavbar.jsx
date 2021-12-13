import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/UserSlice";
import { Link } from "react-router-dom";
const TheNavbar = () => {
  const { cart } = useSelector((state) => state.CartSlice);
  const { isAuth } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#f1f1f1" }}
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Brand className="fw-bold">Shop Circle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/categories">
                Categories
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {!isAuth ? (
              <Button
                as={Link}
                to="/login"
                variant="outline-secondary"
                className="ms-2 rounded"
              >
                <i className="fa fa-sign-in"></i> Log In
              </Button>
            ) : (
              <Button
                as={Link}
                to="/"
                variant="secondary"
                className="ms-2 rounded"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <i className="fa fa-sign-out"></i>Log Out
              </Button>
            )}
            <Button
              as={Link}
              to="/register"
              variant="outline-secondary"
              className="ms-2 rounded"
            >
              <i className="fa fa-user-plus"></i> Register
            </Button>
            <Button
              as={Link}
              to="/cart"
              variant="secondary"
              className="ms-2 rounded"
            >
              <i className="fa fa-shopping-cart"></i> Cart ({cart.length})
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TheNavbar;
