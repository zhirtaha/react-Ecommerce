import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ backgroundColor: "#f7f7f7" }}>
          <Col className="m-auto" md={6} xs={12}>
            <h1 className="text-center fw-bold display-4">
              Welcome to <span className="text-secondary">Shop Circle</span>
            </h1>
            <p className="lead text-center">Explore New Products!</p>
            <div className="text-center">
              <Button variant="secondary" size="lg" as={Link} to="/products">Shop Now</Button>
            </div>
          </Col>
          <Col md={6} xs={12} className=" d-flex justify-content-center">
            <img
              src="https://www.clipartkey.com/mpngs/m/118-1180313_jordan-sneakers-shoe-air-clip-art-sneaker-clipart.png"
              className="img-fluid"
              alt="background"
              height="450px"
              width="450px"
            />
          </Col>
        </Row>
      </Container>

      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={12}>
            <h1 className="text-center text-secondary mt-5"> Popular Brands</h1>
            <hr />
          </Col>
          <Col md={3} className="px-5">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/230_Nike_logo-512.png"
              alt="Nike"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/5_Adidas_logo_logos-512.png"
              alt="Addidas"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3}>
            <img
              src="https://seeklogo.com/images/P/polo-ralph-lauren-logo-C2CA8A53DF-seeklogo.com.png"
              alt="Polo"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3}>
            <img
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/0003/brand.gif?itok=nxUfLayt"
              alt="Levis"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
        </Row>
      </Container>
      <ProductList />
    </div>
  );
};

export default Home;
