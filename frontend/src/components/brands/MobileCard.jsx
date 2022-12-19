import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, ListGroup } from "react-bootstrap";

const MobileCard = ({ brand, mobile }) => {
  console.log(mobile);
  // console.log("brand", brand);
  return (
    <>
      <Col className="mb-4 h-100">
        <Card className="bg-light">
          <Card.Img
            variant="top"
            className="m-auto"
            src={`/mobiles/${mobile.image}`}
          />
          <Card.Body>
            <Card.Text
              style={{ fontSize: "14px" }}
              className="text-center"
              as={Link}
              to={`/${brand.slug}/${mobile.slug}`}
            >
              {mobile.name}
            </Card.Text>

            <Card.Text className="mt-2" style={{ fontSize: "14px" }}>
              {mobile.amounts.map((amount) => (
                <div key={amount._id}>
                  <span className="fw-light">৳</span>
                  <span className="fw-semibold"> {amount.price}</span>
                  <span> {amount.variant}</span>
                </div>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MobileCard;
