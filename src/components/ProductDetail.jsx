import React, { useState } from "react";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/CartSlice";
import { RemoveFromCart } from "../features/CartSlice";
import { useGetProductByIdQuery } from "../services/product-api";
const ProductDetail = () => {
  const { id } = useParams();
  const [btn, setBtn] = useState("Add to cart");
  const [color, setColor] = useState("secondary");
  const { data = [], isLoading, isError } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  const handleBtn = (product) => {
    if (btn === "Add to cart" && color === "secondary") {
      dispatch(AddToCart({ ...product, amount: 1 }));
      setBtn("Remove from cart");
      setColor("danger");
    } else {
      dispatch(RemoveFromCart(product._id));
      setBtn("Add to cart");
      setColor("secondary");
    }
  };

  if (isLoading)
    return (
      <Spinner animation="grow" variant="secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  if (isError)
    return (
      <div className="text-center">
        <Alert variant="danger">
          An Error Occured while fetching the data.
        </Alert>
      </div>
    );

  return (
    <>
      <Container className="py-3 my-4">
        <Row>
          <Col md={5} className="d-flex justify-content-center">
            <img
              src={data.image}
              alt={data.name}
              width="300px"
              className="img-fluid anim"
            />
          </Col>
          <Col md={5} className="m-auto">
            <h2 className="text-center p-3">{data.name}</h2>
            <p className="text-center">{data.description}</p>
            <div className="text-center">
              <h5 className="d-inline-block p-2 text-success">
                price: ${data.price}
              </h5>
              <h5 className="d-inline-block ps-3 text-success">
                quantity: {data.quantity}
              </h5>
            </div>
            <div className="text-center">
              <Button
                onClick={() => handleBtn(data)}
                className="btn btn-secondary rounded mb-4 m-1 p-2"
                variant={color}
              >
                <i className="fa fa-shopping-cart"></i> {btn}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
