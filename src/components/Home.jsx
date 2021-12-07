import React from "react";
import { Row, Col, Container, Button, Carousel } from "react-bootstrap";
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
              src="https://cdn-icons-png.flaticon.com/512/2331/2331716.png"
              className="img-fluid"
              alt="background"
              height="200px"
              width="200px"
            />
            <Col md={6} className="d-flex justify-content-center m-2 p-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5499/5499206.png"
                className="img-fluid"
                alt="background"
                height="200px"
                width="200px"
              />
            </Col>
          </Col>
        </Row>
      </Container>

      
        <Carousel className="carousel my-2" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="display-5">Explore New Shoes</h1>
              <p>%30 sales for all shoes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1618329918461-51bb072e0ea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="display-5">The season to be joyful</h1>
              <p>Explore New clothes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1607702648223-d0c66d38bea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="display-5">Find your own line</h1>
              <p>gifting season is here</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      

      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={12}>
            <h1 className="text-center text-secondary mt-5"> Popular Brands</h1>
            <hr />
          </Col>
          <Col md={3} className="px-5 pt-3 text-center">
            <img
              src="https://seeklogo.com/images/N/nike-logo-47A65A59D5-seeklogo.com.png"
              alt="Nike"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="pt-3 text-center">
            <img
              src="https://seeklogo.com/images/A/adidas-logo-9AA835C1C2-seeklogo.com.png"
              alt="Addidas"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="pt-3 text-center">
            <img
              src="https://seeklogo.com/images/N/New_Balance-logo-F34722CB97-seeklogo.com.png"
              alt="NB"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="pt-3 text-center">
            <img
              src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/0003/brand.gif?itok=nxUfLayt"
              alt="Levis"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="px-5 pt-4 text-center">
            <img
              src="https://seeklogo.com/images/T/The_North_Face-logo-C87D970193-seeklogo.com.png"
              alt="The North Face"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="px-5 pt-4 text-center">
            <img
              src="https://seeklogo.com/images/V/Vans-logo-318E41535C-seeklogo.com.png"
              alt="Vans"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="px-5 pt-4 text-center">
            <img
              src="https://seeklogo.com/images/A/air-jordan-logo-66B3A1FAAF-seeklogo.com.png"
              alt="Air Jordan"
              className="img-fluid"
              height="140px"
              width="140px"
            />
          </Col>
          <Col md={3} className="px-5 pt-4 text-center">
            <img
              src="https://seeklogo.com/images/C/Converse-logo-F92AAE1D2F-seeklogo.com.png"
              alt="Converse"
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
