import React from "react";
import { useGetProductsQuery } from "../services/product-api";
import { AddToCart } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Card, Container, Button, Row, Col, Spinner } from "react-bootstrap";
function ProductByName() {
  const { data = [], isLoading } = useGetProductsQuery();
  const { name } = useParams();
  const dispatch = useDispatch();
  if (isLoading)
    return (
      <Spinner animation="grow" variant="secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  let newdata = data.filter((pro) => pro.category === name);
  return (
    <>
      <Container>
        <Row>
          {newdata.map((item, index) => {
            return (
              <>
                <Col md={4} key={index}>
                  <Card
                    style={{ width:"18rem"}}
                    border="secondary"
                    className="m-5 p-0"
                    key={index}
                  >
                    <Card.Img variant="top" src={item.image} width="300px" height="300px" />
                    <Card.Body className="text-center">
                      <Card.Text>{item.category}</Card.Text>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>${item.price}</Card.Text>
                      <Button
                        as={Link}
                        to={`/products/${item._id}`}
                        variant="secondary"
                        className="me-2"
                      >
                        Read More
                      </Button>
                      <Button
                        onClick={() => dispatch(AddToCart(item))}
                        variant="secondary"
                      >
                        <i className="fa  fa-shopping-cart"></i>
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
