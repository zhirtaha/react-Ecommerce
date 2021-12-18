import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Container className="my-4 py-4">
        <Row>
          <Col md={5} data-aos="fade-right" data-aos-duration="2000">
            <h1 className="text-secondary fw-bold">Get In Touch</h1>
            <p>
              If you have any questions please do not Hesitate to Contact us.
            </p>
          </Col>
          <Col md={5} className="m-auto" data-aos="fade-left" data-aos-duration="2000">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Brad@example.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Brad Pitt" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please enter your message here"
                />
              </Form.Group>

              <Button variant="secondary rounded" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactForm;
