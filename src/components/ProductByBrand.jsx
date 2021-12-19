import React from "react";
import { useGetProductsQuery } from "../services/product-api";
import { Link, useParams } from "react-router-dom";
import { Container, Button, Row, Spinner } from "react-bootstrap";
import "./ProductCard.css";
function ProductByBrand() {
  const { data = [], isLoading } = useGetProductsQuery();
  const { name } = useParams();

  if (isLoading)
    return (
      <Spinner animation="grow" variant="secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  let newdata = data.filter((pro) => pro.brand === name);
  return (
    <div>
      <Container>
        <Row>
          {newdata.map((item, index) => {
            return (
              <div
                className="col-md-4 mt-4 mb-4 "
                key={index}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="card">
                  <div className="imgBx">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>

                  <div className="contentBx">
                    <h2 className="fw-bold">{item.name}</h2>

                    <div className="category">
                      <h3>brand: {item.brand}</h3>
                    </div>

                    <div className="price">
                      <h3>Price: ${item.price}</h3>
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
    </div>
  );
}

export default ProductByBrand;
