import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../services/product-api";
function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let [register] = useRegisterUserMutation();
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    register(userObj)
      .unwrap()
      .then((data) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Container className="my-3 py-3 col-md-4 col-md-offset-4">
        <h2 className="text-center text-secondary">Create a New Account:</h2>
        <hr />
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brad"
              name="firstname"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pitt"
              name="lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Brad@example.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Must have at least 6 characters"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <div className="text-center">
          <Button variant="success" type="submit">
            Sign Up
          </Button>
          </div>
        </Form>
        <div className="text-center pb-0 pt-3">
          <span className="text-reset">Already Have an Account?</span>{" "}
          <Link to="/login" className="text-success">
            Log in
          </Link>
        </div>
      </Container>
    </>
  );
}

export default RegisterForm;
