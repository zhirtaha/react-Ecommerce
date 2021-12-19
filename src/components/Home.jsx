import React from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Carousel,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import GenderList from "./GenderList";
import { useGetBrandsQuery } from "../services/product-api";
const Home = () => {
  const { data = [], isLoading, isError } = useGetBrandsQuery();
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
    <div>
      <Container fluid>
        <Row style={{ backgroundColor: "#fff" }}>
          <Col className="m-auto" md={6}>
            <h1
              className="text-center fw-bolder display-4"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Welcome to{" "}
              <span className="text-secondary fw-bolder">My Shop</span>
            </h1>
            <h3
              className=" text-center"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Imagine The Fashion Adventures
            </h3>
            <div className="text-center pt-1">
              <Button
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                variant="success"
                size="lg"
                className="rounded-3"
                as={Link}
                to="/products"
              >
                Shop Now
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src="https://cdn-icons-png.flaticon.com/512/2589/2589849.png"
              className="img-fluid"
              alt="background"
              height="200px"
              width="200px"
            />
            <Col md={6} className="d-flex justify-content-center m-2 p-2">
              <img
                data-aos="fade-left"
                data-aos-duration="2000"
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

      <Carousel
        className="carousel my-1"
        fade
        interval={4000}
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 anim"
            src="https://images.unsplash.com/photo-1618329918461-51bb072e0ea5?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=formatfit=cropw=1740q=80"
            alt="first slide"
          />
          <Carousel.Caption>
            <h1 className="display-5 fw-bold">Clothes That Shines You</h1>
            <h3>Explore Your True Style</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 anim"
            src="https://wallpapercave.com/wp/wp3012861.jpg"
            alt="second slide"
          />
          <Carousel.Caption>
            <h1 className="display-5 fw-bold">A Moments of Your Style</h1>
            <h3>Wear Your Best</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 anim"
            src="https://wallpaper.dog/large/5487144.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="display-5 fw-bold">Best Sneakers, for Best Style</h1>
            <h3>A passion of Curiosity</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="d-flex justify-content-center">
        <Row>
          <Col md={12}>
            <h1 className="text-center text-secondary mt-4 fw-bolder">
              {" "}
              Popular Brands
            </h1>
            <hr />
          </Col>
          {data.map((item, index) => {
            return (
              <Col md={3} className="px-5 py-4 pt-5 text-center" key={index}>
                <Link to={`/brands/${item.type}`}>
                  <img
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    src={item.image}
                    alt={item.type}
                    className="img-fluid"
                    width="135px"
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      <Row>
        
      </Row>
      </Container>
      <CategoriesList />
      <GenderList/>
    </div>
  );
};

export default Home;
