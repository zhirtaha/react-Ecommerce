import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function LoginForm() {
  const [input, setinput] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinput({ ...input, [name]: value });
  };
  return (
    <>
      <Container className="my-3 py-3">
        <h2 className="text-center text-secondary">Log in into Your Account:</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Brad@example.com"
              name="email"
              value={input.email || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Must have at least 6 characters"
              name="password"
              value={input.password || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Log In
          </Button>
        </Form>
       <div className="text-center">
         <span className="text-reset">New To Shop Circle, create a new account?</span> <Link to="/register" className="text-success">Register</Link>
       </div>
      </Container>
    </>
  );
}

export default LoginForm;
