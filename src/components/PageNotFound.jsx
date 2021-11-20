import React from "react";
import { Link } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
function PageNotFound() {
  return (
    <div>
      <Container className="my-3 py-3 text-center">
        <Alert variant="warning">
          <h2 className="display-5">Sorry!</h2>
          <p className="display-6">That page cannot be found</p>
          <Link to="/" className="text-black">Back to homepage</Link>
        </Alert>
      </Container>
    </div>
  );
}

export default PageNotFound;
