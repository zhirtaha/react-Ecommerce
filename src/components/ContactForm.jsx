import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
function ContactForm() {
  return (
    <div>
      <Container className="my-4 py-4">
        <Row>
          <Col md={5}>
            <h1 className="text-secondary">Get In Touch</h1>
            <p>
              If You have any Questions Please Do Not Hesitate to Contact us.
            </p>
          </Col>
          <Col md={5} className="m-auto">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
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
