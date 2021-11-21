import React from "react";
import { Row, Col, Button, Container, Alert } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
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
              <Col md={2}>
                <h4 className="text-center text-secondary">Product Image</h4>
                <hr />
                <div className="text-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                    height="180px"
                    width="180px"
                  />
                </div>
              </Col>
              <Col md={2}>
                <h4 className="text-center text-secondary">Product Name</h4>
                <hr />
                <h5 className="text-center">{item.name}</h5>
              </Col>
              <Col md={2}>
                <h4 className="text-center text-secondary">Price</h4>
                <hr />
                <h5 className="text-center">${item.price}</h5>
              </Col>
              <Col md={2}>        
                <h4 className="text-center text-secondary">Quantity</h4>
                <hr />
                <div className="text-center">
                  <Button
                    variant="secondary"
                    size="sm"            
                    className="m-1"                          
                    onClick={() => dispatch(Decrease_Quantity(item._id))}
                  >
                    -
                  </Button>
                  <div className="m-1 d-inline">{item.quantity}</div>
                  <Button
                    variant="secondary"
                    size="sm"           
                    className="m-1"
                    onClick={() => dispatch(Increase_Quantity(item._id))}
                  >
                    +
                  </Button>
                </div>
              </Col>
              <Col md={2}>
                <h4 className="text-center text-secondary">Total Price</h4>
                <hr />
                <h5 className="text-center">{item.price * item.quantity}</h5>
              </Col>
              <Col md={2}>                                                                                                                              
                <h4 className="text-center text-secondary">Remove</h4>
                <hr />
                <div className="text-center">
                  <Button
                    variant="danger"
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
