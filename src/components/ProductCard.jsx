import React from "react";
import { Spinner, Alert, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product-api";
import "./ProductCard.css";
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
      <Container>
        <Row>
          {data.map((item, index) => {
            return (
              <div className="col-md-4" key={index} data-aos="fade-right" data-aos-duration="2000">
                <div className="card">
                  <div className="imgBx">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>

                  <div className="contentBx">
                    <h2>{item.name}</h2>

                    <div className="category">
                      <h3>Category: {item.category}</h3>
                    </div>

                    <div className="price">
                      <h3>Price: ${item.price}</h3>
                    </div>
                    <div>
                      <div class="size">
                        <h3>Size :</h3>
                         <span>{item.size[0]}</span>
                         <span>{item.size[1]}</span>
                         <span>{item.size[2]}</span>
                         <span>{item.size[3]}</span>
                      </div>
                      
                    </div>
                    <Button
                      as={Link}
                      to={`/products/${item._id}`}
                      variant="secondary"
                      size="lg"
                      className="me-4 rounded-3"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ProductCard;
