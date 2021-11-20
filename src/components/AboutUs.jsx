import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const AboutUs = () => {
  return (
    <div>
      <Container className="my-4 py-4">
        <Row>
          <Col md={6}>
            <h1 className="text-secondary mb-3">About us</h1>
            <p className="text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              a et dolore libero quibusdam nostrum quia, animi excepturi aperiam
              expedita ad nihil dolorem debitis inventore? Tenetur sequi, quo
              eligendi facilis ducimus eveniet iste non voluptate,
              necessitatibus asperiores porro corporis magni veritatis assumenda
              quas at, nihil perspiciatis quos. Ab libero atque reprehenderit
              earum dignissimos rerum. Sapiente sunt mollitia veritatis
              distinctio labore deserunt perspiciatis at animi, quae quasi,
              porro veniam quia corporis reprehenderit, ab ipsum. Sit minus,
              atque iure quibusdam qui eum accusamus numquam doloribus
              perferendis quidem ea culpa totam ipsum autem dolore obcaecati?
              Cumque doloribus labore repudiandae officiis fuga unde
              repellendus.
            </p>
          </Col>
          <Col md={6} className="m-auto text-center">
            <img
              src="https://cdn2.iconfinder.com/data/icons/work-34/200/about-our-team-3--about-our-team-COMPANY-BUSINESS-COWORKING-COLLAB-WORK-OFFICE-COLLEAGUES-512.png"
              alt="About"
              className="img-fluid"
              height="300px"
              width="300px"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
