import React from "react";
import { useGetProductsQuery } from "../services/product-api";
import { Link, useParams } from "react-router-dom";
import { Card, Container, Button, Row, Col,Spinner } from "react-bootstrap";
function ProductByName() {
  const { data = [], isLoading } = useGetProductsQuery();
  const { name } = useParams();
  if (isLoading) return(
    <Spinner animation="grow" variant="secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  )
  let newdata = data.filter((pro) => pro.category === name);
  console.log(newdata);
  return (
    <>
      <Container>
        <Row>
          {newdata.map((item, index) => {
            return (
              <>
                <Col md={4} key={index}>
                  <Card
                    style={{ width: "18rem" }}
                    border="secondary"
                    className="m-5 p-4"
                    key={index}
                  >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body className="text-center">
                      <Card.Text>{item.category}</Card.Text>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>${item.price}</Card.Text>
                      <Button
                        as={Link}
                        to={`/products/${item._id}`}
                        variant="secondary"
                        size="lg"
                      >
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ProductByName;
