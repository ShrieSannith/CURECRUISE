import React, { useState, useRef } from "react";
import Select from "react-select";
import axios from "axios";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Button,
} from "reactstrap";

import TreatmentResults from "../../components/AI/ccCard";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footers/DarkFooter";
import Guide from "../../components/AI/ccGuide";
import FrequentlyAskedQuestions from "components/AI/ccFAQ";

function CostComparison() {
  // =====================================================
  // Country Options
  // =====================================================

  const countryOptions = [
    { value: "Switzerland", label: "Switzerland" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Iceland", label: "Iceland" },
    { value: "Norway", label: "Norway" },
    { value: "Sweden", label: "Sweden" },
    { value: "Israel", label: "Israel" },
    { value: "USA", label: "USA" },
    { value: "Ireland", label: "Ireland" },
    { value: "Bahamas", label: "Bahamas" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Australia", label: "Australia" },
    { value: "Finland", label: "Finland" },
    { value: "Denmark", label: "Denmark" },
    { value: "Barbados", label: "Barbados" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Austria", label: "Austria" },
    { value: "Singapore", label: "Singapore" },
    { value: "UK", label: "UK" },
    { value: "Italy", label: "Italy" },
    { value: "Costa Rica", label: "Costa Rica" },
    { value: "Belgium", label: "Belgium" },
    { value: "Canada", label: "Canada" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Japan", label: "Japan" },
    { value: "Spain", label: "Spain" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Germany", label: "Germany" },
    { value: "Cyprus", label: "Cyprus" },
    { value: "France", label: "France" },
    { value: "Brazil", label: "Brazil" },
    { value: "Aruba", label: "Aruba" },
    { value: "Montserrat", label: "Montserrat" },
    { value: "UA Emirates", label: "UA Emirates" },
    { value: "Kuwait", label: "Kuwait" },
    { value: "Tr.&Tobago", label: "Tr.&Tobago" },
    { value: "Saint Lucia", label: "Saint Lucia" },
    { value: "Ant.& Barb.", label: "Ant.& Barb." },
    { value: "Greece", label: "Greece" },
    { value: "Chile", label: "Chile" },
    { value: "Qatar", label: "Qatar" },
    { value: "Malta", label: "Malta" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Portugal", label: "Portugal" },
    { value: "Panama", label: "Panama" },
    { value: "Oman", label: "Oman" },
    { value: "Angola", label: "Angola" },
    { value: "Honduras", label: "Honduras" },
    { value: "Djibouti", label: "Djibouti" },
    { value: "South Korea", label: "South Korea" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "Mexico", label: "Mexico" },
    { value: "Belize", label: "Belize" },
    { value: "Dominica", label: "Dominica" },
    { value: "Swaziland", label: "Swaziland" },
    { value: "St. Vincent & ...", label: "St. Vincent & ..." },
    { value: "Grenada", label: "Grenada" },
    { value: "Estonia", label: "Estonia" },
    { value: "South Africa", label: "South Africa" },
    { value: "Namibia", label: "Namibia" },
    { value: "Brunei", label: "Brunei" },
    { value: "Mauritius", label: "Mauritius" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Argentina", label: "Argentina" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Seychelles", label: "Seychelles" },
    { value: "Gabon", label: "Gabon" },
    { value: "Ivory Coast", label: "Ivory Coast" },
    { value: "China", label: "China" },
    { value: "Morocco", label: "Morocco" },
    { value: "Iraq", label: "Iraq" },
    { value: "El Salvador", label: "El Salvador" },
    { value: "Peru", label: "Peru" },
    { value: "Lesotho", label: "Lesotho" },
    { value: "Croatia", label: "Croatia" },
    { value: "Eq. Guinea", label: "Eq. Guinea" },
    { value: "Guyana", label: "Guyana" },
    { value: "Slovakia", label: "Slovakia" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Domin. Rep.", label: "Domin. Rep." },
    { value: "Niger", label: "Niger" },
    { value: "Haiti", label: "Haiti" },
    { value: "R. of Congo", label: "R. of Congo" },
    { value: "Paraguay", label: "Paraguay" },
    { value: "Hungary", label: "Hungary" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Chad", label: "Chad" },
    { value: "Latvia", label: "Latvia" },
    { value: "Jordan", label: "Jordan" },
    { value: "C.A. Republic", label: "C.A. Republic" },
    { value: "Maldives", label: "Maldives" },
    { value: "Lithuania", label: "Lithuania" },
    { value: "Fiji", label: "Fiji" },
    { value: "Mali", label: "Mali" },
    { value: "Poland", label: "Poland" },
    { value: "Togo", label: "Togo" },
    { value: "Bolivia", label: "Bolivia" },
    { value: "Botswana", label: "Botswana" },
    { value: "Bosnia & Herz.", label: "Bosnia & Herz." },
    { value: "Zimbabwe", label: "Zimbabwe" },
    { value: "Guinea", label: "Guinea" },
    { value: "Philippines", label: "Philippines" },
    { value: "Cape Verde", label: "Cape Verde" },
    { value: "Jamaica", label: "Jamaica" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Czechia", label: "Czechia" },
    { value: "Colombia", label: "Colombia" },
    { value: "Ghana", label: "Ghana" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "DR Congo", label: "DR Congo" },
    { value: "Comoros", label: "Comoros" },
    { value: "Malawi", label: "Malawi" },
    { value: "Thailand", label: "Thailand" },
    { value: "Burundi", label: "Burundi" },
    { value: "Mozambique", label: "Mozambique" },
    { value: "Mauritania", label: "Mauritania" },
    { value: "Benin", label: "Benin" },
    { value: "Tunisia", label: "Tunisia" },
    { value: "Senegal", label: "Senegal" },
    { value: "Kenya", label: "Kenya" },
    { value: "Liberia", label: "Liberia" },
    { value: "G.-Bissau", label: "G.-Bissau" },
    { value: "S.T.&Principe", label: "S.T.&Principe" },
    { value: "Burkina Faso", label: "Burkina Faso" },
    { value: "Suriname", label: "Suriname" },
    { value: "Montenegro", label: "Montenegro" },
    { value: "Zambia", label: "Zambia" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Nigeria", label: "Nigeria" },
    { value: "Iran", label: "Iran" },
    { value: "Gambia", label: "Gambia" },
    { value: "Russia", label: "Russia" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Nicaragua", label: "Nicaragua" },
    { value: "Armenia", label: "Armenia" },
    { value: "Algeria", label: "Algeria" },
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "Georgia", label: "Georgia" },
    { value: "Serbia", label: "Serbia" },
    { value: "Romania", label: "Romania" },
    { value: "Bulgaria", label: "Bulgaria" },
    { value: "Pakistan", label: "Pakistan" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Sierra Leone", label: "Sierra Leone" },
    { value: "North Macedonia", label: "North Macedonia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Turkey", label: "Turkey" },
    { value: "Tajikistan", label: "Tajikistan" },
    { value: "Belarus", label: "Belarus" },
    { value: "Uganda", label: "Uganda" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "Mongolia", label: "Mongolia" },
    { value: "India", label: "India" },
    { value: "Albania", label: "Albania" },
    { value: "Laos", label: "Laos" },
    { value: "Burma", label: "Burma" },
    { value: "Nepal", label: "Nepal" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Bhutan", label: "Bhutan" },
    { value: "Egypt", label: "Egypt" },
    { value: "Sudan", label: "Sudan" },
    { value: "Ukraine", label: "Ukraine" },
  ];

  const [formData, setFormData] = useState({
    locations: [null, null],
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const resultsRef = useRef(null);

  const handleLocationChange = (index, option) => {
    const updated = [...formData.locations];
    updated[index] = option;

    setFormData({
      ...formData,
      locations: updated,
    });
  };

  const addLocation = () => {
    setFormData({
      ...formData,
      locations: [...formData.locations, null],
    });
  };

  const removeLocation = (index) => {
    if (formData.locations.length <= 2) return;

    setFormData({
      ...formData,
      locations: formData.locations.filter((_, i) => i !== index),
    });
  };
  // =====================================================
  // Submit Form
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedLocations = formData.locations
      .filter((loc) => loc !== null)
      .map((loc) => loc.value);

    if (selectedLocations.length < 2) {
      alert("Please select at least two countries.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        locations: selectedLocations,
      });

      alert(response.data.recommendation);

      setSubmittedData(response.data);

      setShowResults(true);

      setTimeout(() => {
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);
    } catch (err) {
      console.error(err);
      alert("Unable to connect to the Machine Learning server.");
    }
  };

  // =====================================================
  // Page Setup
  // =====================================================

  // React.useEffect(() => {
  //   document.body.classList.add("index-page");
  //   document.body.classList.add("sidebar-collapse");

  //   document.documentElement.classList.remove("nav-open");

  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;

  //   return function cleanup() {
  //     document.body.classList.remove("index-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // }, []);

  // =====================================================
  // React Select Styling
  // =====================================================

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#2c2c2c",
      border: "none",
      minHeight: "45px",
      boxShadow: "none",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "#2c2c2c",
      color: "white",
      zIndex: 9999,
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1e88e5" : "#2c2c2c",
      color: "white",
      cursor: "pointer",
    }),

    input: (provided) => ({
      ...provided,
      color: "white",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#bdbdbd",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  // =====================================================
  // Sample Data
  // =====================================================

  const treatments = [
    {
      name: "Healthcare Comparison",
      location: "",
      cost: 0,
      successRate: 0,
    },
  ];

  // =====================================================
  // JSX
  // =====================================================

  return (
    <>
      <IndexNavbar />

      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("images/travel3.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="black">
              <Form className="form" onSubmit={handleSubmit}>
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Cost Comparison
                  </CardTitle>

                  <p
                    style={{
                      color: "#9A9A9A",
                      marginTop: 10,
                      fontSize: 14,
                    }}
                  >
                    Compare healthcare prices across countries using Machine
                    Learning.
                  </p>
                </CardHeader>

                <CardBody>
                  {formData.locations.map((location, index) => (
                    <InputGroup
                      key={index}
                      className="no-border"
                      style={{
                        marginBottom: 20,
                        alignItems: "center",
                      }}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>

                      <div
                        style={{
                          flex: 1,
                          minWidth: 0,
                        }}
                      >
                        <Select
                          value={location}
                          options={countryOptions}
                          styles={customSelectStyles}
                          placeholder={`Select Country ${index + 1}`}
                          isSearchable
                          onChange={(selected) =>
                            handleLocationChange(index, selected)
                          }
                        />
                      </div>

                      {index >= 2 && (
                        <Button
                          color="danger"
                          type="button"
                          style={{
                            marginLeft: 10,
                            height: 45,
                          }}
                          onClick={() => removeLocation(index)}
                        >
                          <i className="now-ui-icons ui-1_simple-remove"></i>
                        </Button>
                      )}
                    </InputGroup>
                  ))}

                  <div className="text-center" style={{ marginTop: 25 }}>
                    <Button
                      color="primary"
                      className="btn-round"
                      type="button"
                      onClick={addLocation}
                    >
                      <i className="now-ui-icons ui-1_simple-add"></i>
                      &nbsp; Add Another Country
                    </Button>
                  </div>
                </CardBody>

                <CardFooter className="text-center">
                  <Button
                    color="info"
                    size="lg"
                    className="btn-neutral btn-round"
                    type="submit"
                  >
                    Compare Prices
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
        </Container>
      </div>

      {/* ======================================================
          Results Section
      ====================================================== */}

      {showResults && (
        <div
          ref={resultsRef}
          className="section"
          style={{
            backgroundColor: "#28282B",
            padding: "60px 0",
          }}
        >
          <Container>
            <div
              className="text-center"
              style={{
                color: "white",
                marginBottom: 40,
              }}
            >
              <h2 className="title">Machine Learning Recommendation</h2>

              <p
                style={{
                  color: "#CFCFCF",
                  maxWidth: 750,
                  margin: "0 auto",
                }}
              >
                The selected countries have been analyzed using our Random
                Forest Machine Learning model. The model predicts the Healthcare
                Price Index for each country and recommends the most
                cost-effective destination.
              </p>
            </div>
            {/* 
            <Row>
              <TreatmentResults
                treatments={treatments}
                submittedData={submittedData}
              />
            </Row> */}
          </Container>
        </div>
      )}

      {/* ======================================================
          Guide
      ====================================================== */}

      {/* <Guide /> */}

      {/* ======================================================
          FAQ
      ====================================================== */}

      {/* <FrequentlyAskedQuestions /> */}

      {/* ======================================================
          Footer
      ====================================================== */}

      <Footer />
    </>
  );
}

export default CostComparison;
