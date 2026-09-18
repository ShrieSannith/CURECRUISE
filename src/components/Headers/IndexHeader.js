import React, { useState } from "react";
import { HashRouter as Router, useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import "../../App.css";

function IndexHeader() {
  let pageHeader = React.createRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    country: "",
    medicalCondition: "",
    travelDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    navigate("/results");
  };

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("images/mountain.jpg") + ")",
            filter: "brightness(0.5)",
          }}
          ref={pageHeader}
        ></div>
        <Container
          className="form-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "white",
          }}
        >
          <h1 className="healmeow" style={{ color: "white" }}>
            CureCruise
          </h1>
          <h3>
            Discover Your Perfect Medical Journey with Our Expert AI Assistant
          </h3>
          <Link to="/signup-page" style={{ textDecoration: "none" }}>
            <Button
              style={{ backgroundColor: "#0066b2", marginBottom: "20px" }}
            >
              Signup to book your plan now
            </Button>
          </Link>

          <br />
          <Form
            onSubmit={handleSubmit}
            style={{ width: "100%", maxWidth: "800px" }}
          >
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="firstName" style={{ color: "white" }}>
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      padding: "10px 15px",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="email" style={{ color: "white" }}>
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      padding: "10px 15px",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="country" style={{ color: "white" }}>
                    Country
                  </Label>
                  <Input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      padding: "10px 15px",
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="medicalCondition" style={{ color: "white" }}>
                    Medical Condition
                  </Label>
                  <Input
                    type="text"
                    name="medicalCondition"
                    id="medicalCondition"
                    placeholder="Enter medical condition"
                    value={formData.medicalCondition}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      padding: "10px 15px",
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="travelDate" style={{ color: "white" }}>
                    Travel Date
                  </Label>
                  <Input
                    type="date"
                    name="travelDate"
                    id="travelDate"
                    value={formData.travelDate}
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      padding: "10px 15px",
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              style={{ backgroundColor: "#0066b2" }}
              type="submit"
              color="primary"
            >
              Submit to get started
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
