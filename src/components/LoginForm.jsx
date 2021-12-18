import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { login } from "../features/UserSlice";
import { useLoginUserMutation } from "../services/product-api";
function LoginForm() {
  let [loginfunc, { data, error }] = useLoginUserMutation();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  return (
    <>
      <Container className="my-3 py-3 col-md-4 col-md-offset-4">
        <h2 className="text-center fw-bold text-secondary">
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
              required
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
              required
              minlength="6"
              maxlength="30"
              placeholder="Must have at least 6 characters"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <div className="text-center">
            <Button
              variant="success"
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
          </div>
        </Form>
        <div className="text-center p-3 pb-0">
          <span className="text-reset">
            New To Shop Circle? create a new account.
          </span>{" "}
          <Link to="/register" className="text-success">
            Sign Up
          </Link>
        </div>
        {token && token}
        {data && localStorage.setItem("authToken", data.token)}
        {error && error.message}
      </Container>
    </>
  );
}

export default LoginForm;
