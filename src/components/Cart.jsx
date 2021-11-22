import React from "react";
import { Button, Container, Alert, Table } from "react-bootstrap";
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
          <Alert variant="info" className="display-6">
            Your Cart Is Empty
          </Alert>
        </div>
      </Container>
    );
  };

  const checkbtn = () => {
    return (
      <div className="text-center mb-3">
        <Button as={Link} to="/checkout" variant="success" size="lg">
          Checkout
        </Button>
      </div>
    );
  };

  return (
    <>
      <Container className="my-4 py-4">
        <div>
          <Table bordered responsive>
            <thead>
              <tr>
                <th>#</th>
                <th className="text-center">Product Image</th>
                <th className="text-center">Product Name</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td></td>
                    <td className="text-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                        height="160px"
                        width="160px"
                      />
                    </td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.price}</td>
                    <td>
                      <div className="text-center col-xs-12">
                        <Button
                          className="me-1"
                          variant="secondary"
                          onClick={() => dispatch(Decrease_Quantity(item._id))}
                        >
                          -
                        </Button>
                        {item.quantity}
                        <Button
                          className="ms-1"
                          variant="secondary"
                          onClick={() => dispatch(Increase_Quantity(item._id))}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td className="text-center">
                      {item.price * item.quantity}
                    </td>
                    <td>
                      <div className="text-center">
                        <Button
                          variant="danger"
                          onClick={() => dispatch(RemoveFromCart(item._id))}
                        >
                          <i className="fa fa-trash"></i> Remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {cart.length === 0 && emptycart()}
        {cart.length !== 0 && checkbtn()}
      </Container>
    </>
  );
}

export default Cart;
