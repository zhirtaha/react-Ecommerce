import React from "react";
import { Button, Container, Alert, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveFromCart } from "../features/CartSlice";
import { Increase_Quantity } from "../features/CartSlice";
import { Decrease_Quantity } from "../features/CartSlice";
function Cart() {
  const { cart } = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();

  const emptycart = () => {
    return (
      <Container>
        <div className="text-center">
          <Alert variant="warning">
            it appears that your cart is currently empty.{" "}
            <Link className="text-dark" to="/products">
              Browse the collection to find the products
            </Link>
          </Alert>
        </div>
      </Container>
    );
  };

  return (
    <>
      <Container>
        <Row>
        <Col md={8}>
          <h4 className="mt-3 fw-bold">Shopping cart</h4>
        </Col>
        <Col>
          <div className="text-right  mt-3">items: {cart.length}</div>
        </Col>
        </Row>
        {cart.map((item, index) => {
          return (
            <Row key={index}>
              <Row className="border-top border-bottom">
                <Row className="align-items-center mt-3 mb-3">
                  <Col md={2}>
                    <img
                      src={item.image}
                      alt={item.image}
                      className="img-fluid w-75 "
                    />
                  </Col>
                  <Col md={4}>
                    <Row>
                      <div className="text-muted">{item.category}</div>
                    </Row>
                    <Row>
                      <div className="fw-bold">{item.name}</div>
                    </Row>
                  </Col>
                  <Col>
                    <div className="fw-bold">${item.price}</div>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => dispatch(Decrease_Quantity(item._id))}
                      variant="secondary"
                      size="sm"
                    >
                      -
                    </Button>{" "}
                    <span className="fw-bolder">{item.quantity}</span>{" "}
                    <Button
                      onClick={() => dispatch(Increase_Quantity(item._id))}
                      variant="secondary"
                      size="sm"
                    >
                      +
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => dispatch(RemoveFromCart(item._id))}
                      variant="danger"
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </Row>
            </Row>
          );
        })}
        {cart.length === 0 && emptycart()}
      </Container>
    </>
  );
}

export default Cart;
