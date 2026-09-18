import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AI.css'; // Importing the CSS file for styles

const CostComparisonGuide = () => {
  return (
    <div className="cost-comparison-guide">
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="guide-title">How to Use Cost Comparison AI ?</h2>
            <ul className="guide-list">
              <li><strong>Step 1:</strong> Fill in the required details in the form, including your name, age, medical condition, budget, and location.</li>
              <li><strong>Step 2:</strong> Click on the submit button to process your information.</li>
              <li><strong>Step 3:</strong> The AI will analyze your input and compare costs for various treatments available globally.</li>
              <li><strong>Step 4:</strong> Review the results to find the most cost-effective treatment options tailored to your needs.</li>
              <li><strong>Step 5:</strong> Select a treatment option that suits your budget and requirements.</li>
              <li><strong>Step 6:</strong> Click on the "Book Now" button to schedule your treatment directly from the platform.</li>
              <li><strong>Step 7:</strong> Follow any additional instructions provided to confirm your booking.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CostComparisonGuide;
