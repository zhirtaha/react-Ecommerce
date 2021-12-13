import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login } from "../features/UserSlice";
import { useLoginUserMutation } from "../services/product-api";
function LoginForm() {
  let [loginfunc, { isLoading, data, error }] = useLoginUserMutation();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  return (
    <>
      <Container className="my-3 py-3">
        <h2 className="text-center text-secondary">
          Log in into Your Account:
        </h2>
        <hr />
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
          <Button
            variant="secondary"
            onClick={() => {
              loginfunc({
                email: email,
                password: password,
              })
                .unwrap()
                .then((data) => {
                  console.log("login token", data);
                  dispatch(login(data.token));
                  navigate("/");
                });
            }}
          >
            Log In
          </Button>
        </Form>
        <div className="text-center">
          <span className="text-reset">
            New To Shop Circle, create a new account?
          </span>{" "}
          <Link to="/register" className="text-success">
            Sign Up
          </Link>
        </div>
        {isLoading && "loging in"}
        {token && token}
        {data && localStorage.setItem("authToken", data.token)}
        {error && error.message}
      </Container>
    </>
  );
}

export default LoginForm;
