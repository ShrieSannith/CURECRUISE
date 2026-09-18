import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 150 ||
        document.body.scrollTop > 150
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    const handleResize = () => {
      // Reset collapse state when the window is resized to above 991px
      if (window.innerWidth > 991) {
        setCollapseOpen(false);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
      window.removeEventListener("resize", handleResize); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand tag={Link} to="/" id="navbar-brand">
              HealMeow
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Go to Home
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav>
                {/*<DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons business_bulb-63"></i>
                  <p>Artificial Intelligence</p>
                </DropdownToggle>*/}
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/cost">
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Cost Comparison AI
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/travel">
                    <i className="now-ui-icons location_pin"></i>
                    Travel Assistance AI
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                {/* <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons files_paper"></i>
                  <p>Others</p>
                </DropdownToggle> */}
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/insurance">
                    <i className="now-ui-icons business_briefcase-24"></i>
                    Insurance
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/visa">
                    <i className="now-ui-icons transportation_bus-front-12"></i>
                    VISA
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <Link
                    to="/login-page"
                    style={{ marginLeft: "10px", color: "blue" }}
                  >
                    Login
                  </Link>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Become a member!
                </UncontrolledTooltip>
              </NavItem>
              {/* Social media links */}
              <NavItem>
                <NavLink
                  href="https://twitter.com"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
