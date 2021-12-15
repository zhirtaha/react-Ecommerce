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
      className="bg-light"
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Brand> <span className="fw-bolder  text-secondary">My Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
               <i className="fa fa-home"></i> Home
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
                className="ms-2"
              >
                <i className="fa fa-sign-in fa-lg"></i> Log In
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
                <i className="fa fa-sign-out fa-lg"></i>Log Out
              </Button>
            )}
            <Button
              as={Link}
              to="/register"
              variant="outline-secondary"
              className="ms-2 rounded"
            >
              <i className="fa fa-user-plus fa-lg"></i> Register
            </Button>
            <Button
              as={Link}
              to="/cart"
              variant="secondary"
              className="ms-2 rounded"
            >
              <i className="fa fa-shopping-cart fa-lg"></i> Cart ({cart.length})
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TheNavbar;
