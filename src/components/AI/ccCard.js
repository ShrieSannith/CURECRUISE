import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AI.css'; // Make sure to import your CSS file if you created a new one

const TreatmentResults = ({ treatments }) => {
  return (
    <Container className="mt-5">
      <Row>
        {treatments.map((treatment, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card 
                className={`shadow fade-in`} 
                style={{
                    padding: '30px', 
                    borderRadius: '15px', 
                    color: 'white', 
                    transition: 'transform 0.2s',
                    animationDelay: `${index * 0.2}s`, // Delay each card's animation based on its index
                    backgroundColor: 'transparent'
                }}
                >
              <Card.Body>
                <Card.Title className="text-center" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                  {treatment.name}
                </Card.Title>
                <Card.Text>
                  <strong>Location:</strong> {treatment.location}
                </Card.Text>
                <Card.Text>
                  <strong>Cost:</strong> ${treatment.cost}
                </Card.Text>
                <Card.Text>
                  <strong>Success Rate:</strong> {treatment.successRate}%
                </Card.Text>
                <Button 
                  variant="light" 
                  className="w-100" 
                  color='blue' 
                  style={{ backgroundColor: '#3498DB', borderColor: 'white', color: 'white' }}
                >
                  Book Treatment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TreatmentResults;
