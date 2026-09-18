import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Button,
} from "reactstrap";
import PlacesToVisit from '../../components/AI/PlacesToVisit';
import HotelsToStay from "components/AI/HotelsToStay";
import FlightDetails from "components/AI/FlightDetails";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/DarkFooter";

function Travel() {
  const [formData, setFormData] = useState({
    location: '',
    destination: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  
  // Create a reference for the results section
  const resultsRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setShowResults(true); // Show results after form submission

    // Use setTimeout to ensure the DOM is updated before scrolling
    setTimeout(() => {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
      React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("images/travel2.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Card className="card-signup" data-background-color="black">
              <Form className="form" onSubmit={handleSubmit}>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Travel Assistance
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons location_pin"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Source Location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                  <InputGroup className="no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons location_pin"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Destination Location"
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    size="lg"
                    type="submit"
                  >
                    Submit
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>

      {showResults && ( // Conditional rendering based on showResults state
        <div
          className="section"
          ref={resultsRef} // Attach the reference here
          style={{
            backgroundColor: '#28282B',
            padding: '50px 0',
            color: 'white', // Changed to white for better readability
          }}
        >
          <Container className="center">
            <PlacesToVisit />
            <FlightDetails />
            {/* Uncomment if you want to include HotelsToStay */}
            {/* <HotelsToStay /> */}
          </Container>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Travel;
