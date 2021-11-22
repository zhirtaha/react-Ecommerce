import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";
const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ backgroundColor: "#f7f7f7" }}>
          <Col className="m-auto" md={6}>
            <h1 className="text-center fw-bold display-4">
              Welcome to{" "}
              <span className="text-secondary fw-bold">Shop Circle</span>
            </h1>
            <p className="display-6 text-center">A circle for shopping!</p>
            <div className="text-center">
              <Button variant="success" size="lg" as={Link} to="/products">
                Shop Now
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src="https://cdn-icons.flaticon.com/png/512/2872/premium/2872596.png?token=exp=1637430596~hmac=b81b4746dfe84bdf31ce1829201fea28"
              className="img-fluid"
              alt="background"
              height="200px"
              width="200px"
            />
            <Col md={6} className="d-flex justify-content-center m-2 p-2">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2334/premium/2334872.png?token=exp=1637430172~hmac=83df425922b2604984ff1691411a11d0"
                className="img-fluid"
                alt="background"
                height="200px"
                width="200px"
              />
            </Col>
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
      <CategoriesList />
    </div>
  );
};

export default Home;
