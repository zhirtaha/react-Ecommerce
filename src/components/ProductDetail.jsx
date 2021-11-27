import React from "react";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/CartSlice";
import { useGetProductByIdQuery } from "../services/product-api";
const ProductDetail = () => {
  const { id } = useParams();
  const { data = [], isLoading, isError } = useGetProductByIdQuery(id);

  const dispatch = useDispatch();
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
      <Container className="py-4 my-2">
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2 className="text-center">{data.name}</h2>
            <hr />
            <h3 className="text-center">${data.price}</h3>
            <p className="text-center">{data.description}</p>
            <div className="text-center">
              <Button
                onClick={() => dispatch(AddToCart(data))}
                className="btn btn-secondary rounded mb-4 m-2 p-2"
                variant="success"
              >
               <i className="fa fa-shopping-cart"></i> Add
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={data.image}
              alt={data.name}
              height="150px"
              width="300px"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
