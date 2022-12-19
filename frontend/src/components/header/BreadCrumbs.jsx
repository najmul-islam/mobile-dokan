import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, Container, Row, Col, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const pathnames = pathname.split("/").filter(Boolean);

  const capitalizeFirstLetter = (string) => {
    const str = string.split("-");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return (string = str.join(" "));
  };

  return (
    <Container>
      <Row className="border-bottom align-items-center justify-content-between">
        <Col xs="auto" className="">
          <Button variant="outline-primary" onClick={() => navigate(-1)}>
            <FaChevronLeft />
          </Button>
        </Col>
        <Col xs="auto">
          <Breadcrumb className="align-items-center pt-3">
            <Breadcrumb.Item onClick={() => navigate("/")}>
              Home
            </Breadcrumb.Item>
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              return isLast ? (
                <Breadcrumb.Item active key={name}>
                  {capitalizeFirstLetter(name)}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={name} onClick={() => navigate(routeTo)}>
                  {capitalizeFirstLetter(name)}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </Col>
        <Col xs="auto">
          <Button variant="outline-primary" onClick={() => navigate(+1)}>
            <FaChevronRight />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadCrumbs;
