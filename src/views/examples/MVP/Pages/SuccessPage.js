import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import Footer from "../../../../components/Footers/DarkFooter";
import IndexNavbar from "../../../../components/Navbars/IndexNavbar";
import Lottie from 'lottie-react';
import fireworksAnimation from './fireworks.json'; // Adjust the path according to your project structure
import '../CSS/Success.css';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true); // Trigger the animation on component mount
  }, []);

  const handleGoHome = () => {
    navigate('/index'); // Navigate to the home page
  };

  return (
    <>
      <div className="section" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'relative' }}>
        {showAnimation && (
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <Lottie animationData={fireworksAnimation} loop={false} />
          </div>
        )}
        <Container className="text-center">
          <Row className="justify-content-center">
            <Col md="8">
              <div style={{ fontSize: '100px', color: '#28a745', marginBottom: '20px' }}>
                ✔️
              </div>
              <h1 style={{ color: '#28a745' }}>Success!</h1>
              <p style={{ fontSize: '20px' }}>
                Your booking has been confirmed. Thank you for choosing our service!
              </p>
              <Button color="success" onClick={handleGoHome}>
                Go to Home
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default SuccessPage;
