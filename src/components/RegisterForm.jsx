import React from "react";
import {Container,Button,Form} from "react-bootstrap"
function RegisterForm() {
  return <>
  <Container className="my-3 py-3">
    <h2 className="text-center text-secondary">Create a New Account:</h2>
    <hr/>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter Your First Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name:</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Last Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="secondary" type="submit">
    Register
  </Button>
</Form>
  </Container></>;
}

export default RegisterForm;
