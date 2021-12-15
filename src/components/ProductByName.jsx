import React from "react";
import { useGetProductsQuery } from "../services/product-api";
import { AddToCart } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, Button, Row, Spinner } from "react-bootstrap";
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
              
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <div className="imgBx">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid"
                      />
                    </div>

                    <div className="contentBx">
                      <h3>{item.name}</h3>

                      <div className="category">
                        <h3>Category: {item.category}</h3>
                      </div>

                      <div className="price">
                        <h3>Price: ${item.price}</h3>
                      </div>
                      <Button
                        as={Link}
                        to={`/products/${item._id}`}
                        variant="secondary"
                        className="me-4 rounded"
                      >
                        Read More
                      </Button>
                      <Button
                        onClick={() => dispatch(AddToCart({...item,amount:1}))}
                        variant="secondary"
                        className="rounded"
                      >
                        <i className="fa  fa-shopping-cart"></i>
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

export default ProductByName;
