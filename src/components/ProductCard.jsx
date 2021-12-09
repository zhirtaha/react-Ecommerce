import React from "react";
import { Spinner, Alert,Card,Button, Container,Row,Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/CartSlice";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product-api";
function ProductCard() {
  const { data = [], isLoading, isError } = useGetProductsQuery();

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
 return(
   <>
    <Container>
        <Row>
          {data.map((item, index) => {
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
 )
}

export default ProductCard;
