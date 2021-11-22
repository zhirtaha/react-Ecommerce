import React from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product-api";
function ProductCard() {
  const { data = [], isLoading, isError } = useGetProductsQuery();
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
      {data.map((item, index) => {
        return (
          <Card
            style={{ width: "17rem" }}
            border="secondary"
            className="m-5 p-2"
            key={index}
          >
            <Card.Img
              variant="top"
              height="250px"
              width="250px"
              src={item.image}
            />
            <Card.Body>
              <Card.Text>{item.category}</Card.Text>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
              <Button
                as={Link}
                to={`/products/${item._id}`}
                variant="secondary"
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default ProductCard;
