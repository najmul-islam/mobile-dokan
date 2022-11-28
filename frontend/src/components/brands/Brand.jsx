import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const Brand = ({ brand }) => {
  return (
    <Col className="my-3">
      <Card className="bg-light">
        <Card.Img variant="top" src={`/brands/${brand.logo}`} />
        <Card.Body>
          <Card.Text as={Link} to={`/brands/${brand.name.toLowerCase()}`}>
            {brand.name}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Brand;
