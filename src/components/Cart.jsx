import React from "react";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from "../features/CartSlice";
function Cart() {
  const cart = useSelector((state) => state.CartSlice.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const emptycart = () => {
    return (
      <Container>
        <div className="text-center">
          <Alert variant="info" className="display-6">
            Your Cart Is Empty
          </Alert>
        </div>
      </Container>
    );
  };

  
  return (
    <>
      {cart.map((item, index) => {
        return (
          <Container key={index} className="my-4 py-4">
            <Row>
              <Col md={4} className="">
                <h2 className="text-center text-secondary">Product Image</h2>
                <hr />
                <div className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                    height="200px"
                    width="200"
                  />
                </div>
              </Col>
              <Col md={4}>
                <h2 className="text-center text-secondary">Product</h2>
                <hr />
                <h3 className="text-center">{item.name}</h3>
                <h4 className="text-center my-4">
                  Number of Items: {item.quantity}
                </h4>
                <h5 className="text-center my-4">Price: ${item.price}</h5>
              </Col>
              <Col md={4}>
                <h2 className="text-center text-secondary">Remove Product</h2>
                <hr />
                <div className="text-center">
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => dispatch(RemoveFromCart(item._id))}
                  >
                    <i className="fa fa-trash fa-lg"></i> Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        );
      })}
      {cart.length === 0 && emptycart()}
    </>
  );
}

export default Cart;
