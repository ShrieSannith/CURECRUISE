import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import Footer from "components/Footers/DarkFooter";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  // Function to determine the text color based on the active tab
  const getTextColor = (tabId) => {
    return pills === tabId ? "blue" : "inherit"; // Change 'blue' to your desired color
  };

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">My Portfolio</h4>
                <div className="nav-align-center">
                  <Nav className="nav-pills-info nav-pills-just-icons" pills role="tablist">
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons business_money-coins"></i>
                        <p style={{ color: getTextColor("1") }}>Insurance</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons media-2_sound-wave"></i>
                        <p style={{ color: getTextColor("2") }}>Medical</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_basket"></i>
                        <p style={{ color: getTextColor("3") }}>Bookings</p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      {/* Form Inserted Here */}
                      
                    
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img alt="..." className="img-raised" src={require("assets/img/bg6.jpg")} />
                        <img alt="..." className="img-raised" src={require("assets/img/bg11.jpg")} />
                      </Col>
                      <Col md="6">
                        <img alt="..." className="img-raised" src={require("assets/img/bg7.jpg")} />
                        <img alt="..." className="img-raised" src={require("assets/img/bg8.jpg")} />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img alt="..." className="img-raised" src={require("assets/img/bg3.jpg")} />
                        <img alt="..." className="img-raised" src={require("assets/img/bg8.jpg")} />
                      </Col>
                      <Col md="6">
                        <img alt="..." className="img-raised" src={require("assets/img/bg7.jpg")} />
                        <img alt="..." className="img-raised" src={require("assets/img/bg6.jpg")} />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
