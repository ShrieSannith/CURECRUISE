import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About Us</h2>
              <h5 className="description">
                At HealMeow, we facilitate affordable healthcare solutions by connecting patients with top medical facilities abroad. Our services include personalized care, cost-effective treatments, and expert guidance throughout the process, ensuring a seamless journey for individuals seeking quality healthcare options worldwide. Your health, our priority!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
