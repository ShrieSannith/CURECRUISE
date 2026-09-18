import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import '../CSS/Results.css';
import IndexNavbar from "../../../../components/Navbars/IndexNavbar";
import Footer from "../../../../components/Footers/DarkFooter";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

import HospitalAccordian from "../Accordian/HospitalAccordian";
import FlightAccordian from "../Accordian/FlightAccordian";
import HotelAccordian from "../Accordian/HotelAccordian";

function ResultTabs() {
  const [iconPills, setIconPills] = useState("1");
  const [selectedItems, setSelectedItems] = useState({
    hospital: false,
    flight: false,
    hotel: false,
  });
  const [showResultSection, setShowResultSection] = useState(false);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: "",
    country: "",
    phoneNumber: "",
  });

  const resultsRef = useRef(null);
  const navigate = useNavigate();

  const handleNextClick = () => {
    setShowResultSection(true);
    setTimeout(() => {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const toggleModal = () => setModal(!modal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBookingConfirm = () => {
    // Handle booking logic here, if needed
    navigate('/success-page');
  };
    React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
   
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />

      {/* Hero section with background image */}
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("images/travel3.jpg") + ")",
          backgroundSize: "cover",
          minHeight: "700px",
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            marginTop: '-30px'
          }}
        >
          <h1 className="healmeow" style={{ color: "white", fontSize: '30px' }}>Select Your Preferences</h1><br />
          <Row>
            <Col md="12" xl="100">
              <Card style={{ maxWidth: '1500px', width: '100%', backgroundColor: '#28282B' }}>
                <CardHeader><br />
                  <Nav className="justify-content-center" role="tablist" tabs style={{ color: 'white' }}>
                    <NavItem>
                      <NavLink
                        className={`nav-link-hover ${iconPills === "1" ? "active" : ""}`}
                        onClick={(e) => { e.preventDefault(); setIconPills("1"); }}
                      >
                        <i className="now-ui-icons media-2_sound-wave"></i>
                        Hospitals
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={`nav-link-hover ${iconPills === "2" ? "active" : ""}`}
                        onClick={(e) => { e.preventDefault(); setIconPills("2"); }}
                      >
                        <i className="now-ui-icons transportation_air-baloon"></i>
                        Flight
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={`nav-link-hover ${iconPills === "3" ? "active" : ""}`}
                        onClick={(e) => { e.preventDefault(); setIconPills("3"); }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Hotels
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent className="text-center" activeTab={"iconPills" + iconPills}>
                    <TabPane tabId="iconPills1">
                      <HospitalAccordian setSelected={(isChecked) => setSelectedItems(prev => ({ ...prev, hospital: isChecked }))} />
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <FlightAccordian setSelected={(isChecked) => setSelectedItems(prev => ({ ...prev, flight: isChecked }))} />
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <HotelAccordian setSelected={(isChecked) => setSelectedItems(prev => ({ ...prev, hotel: isChecked }))} />
                    </TabPane>
                                  </TabContent>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    <Button
      color="secondary"
      onClick={handleNextClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#0066b2',
        color: 'white',
      }}
    >
      Generate AI Results
    </Button></div>
                              </CardBody>
     
              </Card>
            </Col>
          </Row>
          
        </Container>
      </div>

      {/* White background section for results and other components */}
      {showResultSection && (
        <div ref={resultsRef} style={{ backgroundColor: '#FFFFFF', padding: '50px 0' }}>
          <Container>
            <Row>
              <Col md="6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                  width: '100%',
                  height: '400px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px'
                }}>
                  PDF Viewer Here
                </div>
              </Col>
              <Col md="6">
                <h3>Report Summary</h3>
                <p>This section provides a summary of the generated report with key insights.</p>
                <Button color="primary" style={{ marginRight: '10px' }}>DOWNLOAD</Button>
                <Button color="success" onClick={toggleModal}>BOOK</Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {/* Modal for Booking */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Booking Information</ModalHeader>
        <ModalBody style={{color:'black'}} className="BookingInfo">
          <div>
                      <Input
                          color="black"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              readOnly
                      />
                      <br/>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              readOnly
                      />
                       <br/>
            <Input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
                      />
                       <br/>
            <Input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
                      />
                       <br/>
            <Input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div> <br/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleBookingConfirm}>Confirm Bookings</Button>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Footer />
    </>
  );
}

export default ResultTabs;
