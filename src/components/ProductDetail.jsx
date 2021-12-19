import React, { useState } from "react";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { AddToCart } from "../features/CartSlice";
import { useGetProductByIdQuery } from "../services/product-api";
import "./ProductCard.css";
const ProductDetail = () => {
  const { id } = useParams();
  const [btn, setBtn] = useState("Add to cart");
  const [icon, setIcon] = useState(faShoppingCart);
  const { data = [], isLoading, isError } = useGetProductByIdQuery(id);
  const dispatch = useDispatch();

  const handleBtn = (product) => {
    if (btn === "Add to cart") {
      dispatch(AddToCart({ ...product, amount: 1 }));
      setBtn("Added to cart");
      setIcon(faCheck)
    } 
  };

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
      <Container className="py-3 my-4">
        <Row>
          <Col md={5} className="d-flex justify-content-center">
            <img
              src={data.image}
              alt={data.name}
              width="300px"
              className="img-fluid"
            />
          </Col>
          <Col
            md={5}
            className="m-auto"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2 className="text-center p-3">{data.name}</h2>
            <p className="text-center">{data.description}</p>
            <div className="text-center">
              <h4 className="d-inline-block p-2 mb-1 text-success">
               <span className="text-dark"> Price:</span> ${data.price}
              </h4>
              <h4 className="d-inline-block ps-3 text-success">
                <span className="text-dark">quantity:</span> {data.quantity}
              </h4>
            </div>
            <div className="text-center">
              <label className="text-dark h4">Size: </label>{" "}
              <select className="my-3 text-success psize">
                <option className="pe-2 border border-1 p-1 m-2">
                  {data.size[0]}
                </option>
                <option className="pe-2 border border-1 p-1 m-2">
                  {data.size[1]}
                </option>
                <option className="pe-2 border border-1 p-1 m-2">
                  {data.size[2]}
                </option>
                <option className="pe-2 border border-1 p-1 m-2">
                  {data.size[3]}
                </option>
              </select>
            </div>

            <div className="text-center">
              <Button
                onClick={() => handleBtn(data)}
                className="rounded-3 mb-4 m-1 p-2"
                variant="success"
              >
               <FontAwesomeIcon icon={icon}/> {btn}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
