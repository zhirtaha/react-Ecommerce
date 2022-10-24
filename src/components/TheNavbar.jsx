import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
        style={{ backgroundColor: "#f5f5f5" }}
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            {" "}
            <span className="fw-bolder  text-secondary logo" as={Link} to="/">My Shop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/categories">
                Categories
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
                <FontAwesomeIcon icon={faSignInAlt} /> Log In
              </Button>
            ) : (
              <Button
                as={Link}
                to="/login"
                variant="secondary"
                className="ms-2 rounded"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Log Out
              </Button>
            )}
            <Button
              as={Link}
              to="/register"
              variant="outline-secondary"
              className="ms-2 rounded"
            >
              <FontAwesomeIcon icon={faUserPlus} /> Register
            </Button>
            <Button
              as={Link}
              to="/cart"
              variant="secondary"
              className="ms-2 rounded"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.length})
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TheNavbar;
