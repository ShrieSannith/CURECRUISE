import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import '../../App.css'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/DarkFooter";

// Add custom styles
const styles = {
  curvedButton: {
    borderRadius: '20px', // Adjust the value as needed for more or less curvature
  },
  emailVerifyContainer: {
    display: 'flex', // Flexbox for horizontal alignment
    alignItems: 'center', // Center items vertically
    marginTop: '15px', // Add top margin for spacing
  },
  placeholderStyle: {
    color: 'white', // Set the placeholder color to white
  },
  iconStyle: {
    color: 'white', // Set the icon color to white
  },
};

function LoginPage() {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleVerifyEmail = () => {
    // Simulate email verification logic
    alert(`Verification email sent to ${email}`);
    setIsEmailVerified(true);
  };
      React.useEffect(() => {
    // document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      // document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")",
            filter: 'brightness(20%)',
            height: '100vh',
            width: '100%',
            color: 'white',
          }}
        ></div>
        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-signup card-plain">
                <Form className="form">
                  <CardHeader className="text-center">
                    <h2>Sign In</h2>
                  </CardHeader>
                  <CardBody>
                    {/* Email and Verify Button */}
                    <div style={styles.emailVerifyContainer}>
                      <InputGroup
                        className={
                          "no-border input-lg" + (emailFocus ? " input-group-focus" : "")
                        }
                        style={{ flex: 1 }} // Allow input to take up available space
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText style={styles.iconStyle}>
                            <i className="now-ui-icons ui-1_email-85"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email..."
                          type="email"
                          value={email}
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ height: '46px', color: 'white' }} // Match the height of the button
                          placeholderStyle={styles.placeholderStyle} // Placeholder color
                        />
                      </InputGroup>
                    </div>

                    {/* Password Input */}
                    <InputGroup
                      className={
                        "no-border input-lg" + (passwordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText style={styles.iconStyle}>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                        style={{ color: 'white' }} // Text color
                        placeholderStyle={styles.placeholderStyle} // Placeholder color
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                    >
                      Sign In
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <Link to="/signup-page" style={{ color: 'white', fontSize: '10px' }}>
                          Create an account?
                        </Link>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <Link to="/forgot-password" style={{ color: 'white', fontSize: '10px' }}>
                          Forgot password?
                        </Link>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
