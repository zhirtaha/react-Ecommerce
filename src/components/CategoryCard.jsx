import React from "react";
import { Spinner, Card, Button, Alert } from "react-bootstrap";
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
        <Alert variant="danger">An Error Occured while fetching the data.</Alert>
      </div>
    );
  return (
    <>
      {data.map((item, index) => {
        return (
          <Card
            border="secondary"
            style={{ width: "18rem" }}
            key={index}
            className="m-5 p-4"
          >
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description.substring(0, 20)}</Card.Text>
              <Button
                as={Link}
                to={`/categories/${item.name}`}
                variant="secondary"
                size="lg"
                className="rounded"
              >
                {item.name}
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default CategoryCard;
