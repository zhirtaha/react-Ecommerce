import React, { useState } from "react";
import { useRegisterUserMutation } from "../services/product-api";
import { Container, Button, Form } from "react-bootstrap";
function RegisterForm() {
  const [input, setInput] = useState({});
  const [registerUser, { data, error }] = useRegisterUserMutation();

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  if (data) {
    return <p>{JSON.stringify(data)}</p>;
  }
  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(input);
    setInput({});
  };

  return (
    <>
      <Container className="my-3 py-3">
        <h2 className="text-center text-secondary">Create a New Account:</h2>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your First Name"
              onChange={handlechange}
              value={input.firstname || ""}
              name="firstname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Last Name"
              onChange={handlechange}
              name="lastname"
              value={input.lastname || ""}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handlechange}
              name="email"
              value={input.email || ""}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlechange}
              name="password"
              value={input.password || ""}
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default RegisterForm;
