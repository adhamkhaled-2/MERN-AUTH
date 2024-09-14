import { Container, Col, Row } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="card p-4">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
