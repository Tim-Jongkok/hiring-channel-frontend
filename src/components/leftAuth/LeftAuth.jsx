import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import img
import logoArka from "../../assets/arkademy.png";
import humanReport from "../../assets/human-report.png";

import "./leftAuth.css";

const LeftAuth = () => {
  return (
    <>
      <div className="component-logo">
        <Container>
          <Row>
            <Col md={12} className="logo-arka">
              <img src={logoArka} alt="logo-arka" />
            </Col>
            <Col md={12} className="logo-human-report">
              <img src={humanReport} alt="logo-human-report" />
            </Col>
            <Col md={12} className="title-hire">
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <p className="hire">
                    Hire Expert freelancers for any job, online
                  </p>
                  <p className="hire-small">
                    Millions of small businesses use Freelancer to turn their
                    ideas into reality.
                  </p>
                </Col>
                <Col md={2}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LeftAuth;
