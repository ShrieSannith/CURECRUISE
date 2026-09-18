import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importing Container, Row, and Col for layout
import './AI.css'; // Ensure you have the necessary styles defined

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What information do I need to provide?",
      answer: "You need to provide your name, age, medical condition, budget, and location."
    },
    {
      question: "How does the cost comparison work?",
      answer: "Our AI analyzes treatment options globally and compares costs based on your provided information."
    },
    {
      question: "Is the service free to use?",
      answer: "Yes, our cost comparison service is completely free for users."
    },
    {
      question: "Can I book a treatment through the platform?",
      answer: "Absolutely! You can select a treatment option and click 'Book Now' to schedule your appointment."
    },
    {
      question: "How long does it take to get results?",
      answer: "You will receive results almost instantly after submitting your information."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section" style={{ backgroundColor: '#28282B', padding: '20px' }}>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="faq-title" style={{ color: "white", fontSize: '1.5rem' }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item" style={{ marginBottom: '10px' }}>
                <button
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    textAlign: 'left',
                    fontSize: '1rem', // Decreased font size
                    padding: '10px',
                    width: '100%',
                      cursor: 'pointer',
                      margin: '10px',
                    
                  }}
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <div className="faq-answer" style={{ color: 'white', fontSize: '0.9rem', paddingLeft: '10px', margin: '10px',marginLeft: '30px' }}> {/* Smaller font for answer */}
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrequentlyAskedQuestions;
