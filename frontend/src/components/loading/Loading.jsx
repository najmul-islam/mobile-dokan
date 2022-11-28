import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Loading.module.css";
const Loading = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={style.ldsfacebook}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
