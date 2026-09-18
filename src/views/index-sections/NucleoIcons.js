import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "./NucleoIcons.css"; // Custom styles
import { Link } from "react-router-dom"; // Import Link for navigation
function NucleoIcons() {
  const [visibleSection, setVisibleSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust based on when you want the fade to trigger
    );

    const sections = document.querySelectorAll(".text-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section section-nucleo-icons">
      <Container>
        <Row>
          {/* Left Text Column */}
          <Col lg="6" md="12">
            <div className="text-section" id="section1">
              <h2 className="title">Cost Comparison AI</h2>
              <h5 className="description" style={{ color: "black" }}>
                The Cost Comparison AI is an innovative solution designed to
                help individuals navigate the complex landscape of medical
                treatment costs across different countries. In today's
                globalized world, healthcare pricing and quality can vary
                significantly, making informed decisions essential.
                <br />
                <br />
                To get started, users fill out a simple form detailing their
                medical needs and insurance coverage. Our advanced AI algorithms
                then analyze this information to provide a personalized
                comparison of treatment costs, highlighting not only price
                differences but also the quality of services available.
                <br />
                <br />
                A key advantage of the Cost Comparison AI is its ability to
                assess insurance coverage, helping users understand their
                benefits and avoid unexpected expenses. This feature empowers
                users to explore treatment options that align with their
                insurance, minimizing financial burdens.
                <br />
                <br />
                Our dedicated team is committed to providing accurate
                information to help you make significant healthcare decisions.
                We encourage you to use our Cost Comparison AI to find the best
                medical care options, ensuring high-quality treatment at
                competitive prices.
              </h5>

              <Button color="primary">
                <Link
                  to="/cost"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Get Cost Comparison
                </Link>
              </Button>
            </div>

            <div className="text-section" id="section2">
              <h2 className="title">Travel Assistance AI</h2>
              <h5 className="description">
                Travel Assistance is your ultimate companion for seamless
                journeys. Designed to provide personalized support, it helps you
                navigate various travel logistics, ensuring a hassle-free
                experience. Whether you're booking flights, finding
                accommodations, or exploring local attractions, our AI is here
                to assist you every step of the way.
                <br />
                <br />
                Simply input your travel preferences, and our app will curate
                tailored recommendations that suit your needs. With real-time
                updates on flight statuses and local events, you'll never miss
                out on crucial information.
                <br />
                <br />
                The Travel Assistance also understands your budgetary
                constraints and offers cost-effective solutions to maximize your
                travel experience without overspending. Enjoy access to
                exclusive deals and discounts that cater to your preferences.
                <br />
                <br />
                Empower your adventures with our Travel Assistance and make
                informed decisions effortlessly. Travel smarter, explore more,
                and create unforgettable memories with the help of our advanced
                technology.
              </h5>
              {/* <Button color="primary">
                <Link
                  to="/travel"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Get travel Assistance
                </Link>
              </Button> */}
            </div>

            {/* <div className="text-section" id="section3">
              <h2 className="title">Automation</h2>
              <h5 className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac libero sed metus bibendum tempor sit amet eu erat. Aliquam erat volutpat. Etiam condimentum ipsum at sapien cursus tincidunt. 
                Nulla facilisi. In ut risus vel elit convallis vulputate ac in ligula. Donec pellentesque semper turpis, at pulvinar ligula auctor at. Duis a hendrerit felis. Pellentesque id orci et nulla luctus feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac libero sed metus bibendum tempor sit amet eu erat. Aliquam erat volutpat. Etiam condimentum ipsum at sapien cursus tincidunt. 
                Nulla facilisi. In ut risus vel elit convallis vulputate ac in ligula. Donec pellentesque semper turpis, at pulvinar ligula auctor at. Duis a hendrerit felis. Pellentesque id orci et nulla luctus feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac libero sed metus bibendum tempor sit amet eu erat. Aliquam erat volutpat. Etiam condimentum ipsum at sapien cursus tincidunt. 
                Nulla facilisi. In ut risus vel elit convallis vulputate ac in ligula. Donec pellentesque semper turpis, at pulvinar ligula auctor at. Duis a hendrerit felis. Pellentesque id orci et nulla luctus feugiat.
              </h5>
            </div> */}
          </Col>

          {/* Right Image Column */}
          <Col lg="6" md="12">
            <div className="sticky-image-container">
              <img
                src="https://images.unsplash.com/photo-1654263937085-48fb17a63d66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={`fade-img ${
                  visibleSection === "section1" ? "visible" : "hidden"
                }`}
                alt="Section 1"
              />
              <img
                src="https://images.unsplash.com/photo-1465070845512-2b2dbdc6df66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={`fade-img ${
                  visibleSection === "section2" ? "visible" : "hidden"
                }`}
                alt="Section 2"
              />
              {/* <img 
                src="https://images.unsplash.com/photo-1506526794364-ba711a0d97fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={`fade-img ${visibleSection === "section3" ? "visible" : "hidden"}`}
                alt="Section 3"
              /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NucleoIcons;
