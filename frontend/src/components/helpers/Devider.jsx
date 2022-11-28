import React from "react";
import { Row, Col } from "react-bootstrap";

const Devider = () => {
  return (
    <Row xs={2} className="justify-content-center pt-2 pb-5">
      <Col className="border-top border-3 border-primary rounded"></Col>
    </Row>
  );
};

export default Devider;
