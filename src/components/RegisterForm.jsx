import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function RegisterForm() {
  return (
    <>
      <Container className="my-3 py-3">
        <h2 className="text-center text-secondary">Create a New Account:</h2>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brad"
              name="firstname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pitt"
              name="lastname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Brad@example.com" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Must have at least 6 characters"
              name="password"
            />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Register
          </Button>
        </Form>
        <div className="text-center">
         <span className="text-reset">Already Have an Account?</span> <Link to="/login" className="text-success">Log in</Link>
       </div>
      </Container>
    </>
  );
}

export default RegisterForm;
