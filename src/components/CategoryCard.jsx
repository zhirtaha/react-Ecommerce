import React from "react";
import { Spinner, Button, Alert, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../services/product-api";
function CategoryCard() {
  const { data = [], isLoading, isError } = useGetCategoriesQuery();
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
          <Col md={4} className="my-4" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded-circle"
              width="220px"
            />
            <h3 className="text-center pt-1 mt-0">{item.name}</h3>
            <Button
              as={Link}
              to={`/categories/${item.name}`}
              variant="secondary"
              size="lg"
              className="rounded"
            >
              {item.name}
            </Button>
          </Col>
        );
      })}
    </>
  );
}

export default CategoryCard;
