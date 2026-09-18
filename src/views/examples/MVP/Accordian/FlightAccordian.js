import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Checkbox,
  Snackbar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function HospitalAccordion({ heading, subheading, content, description, selected, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        margin: '20px',
        alignItems: "center",
        color: "white",
        marginBottom: 1,
        backgroundColor: '#343434',
        border: '1px solid black',
        borderRadius: 1,
        padding: 1,
      }}
    >
      <Checkbox
        checked={selected}
        onChange={() => onSelect(heading, !selected)} // Pass the current selection state
        color="primary"
        sx={{ marginLeft: 1, backgroundColor: "transparent" }}
      />
      <Accordion
        sx={{
          flex: 1,
          boxShadow: "none",
          marginLeft: 1,
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: "white", }}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6" fontSize="1rem">{heading}</Typography>
              <Typography variant="subtitle2" fontSize="0.9rem">{subheading}</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{
              padding: '6px 12px',
              border: '1px solid #ccc',
              borderRadius: '20px',
              backgroundColor: '#0066b2',
              cursor: 'default',
              alignSelf: 'center',
              color: 'white',
              marginRight: '10px',
            }}>
              {content}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ textAlign: "left" }}>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

function AccordionExample() {
  const [selectedAccordion, setSelectedAccordion] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNextClick = () => {
    if (selectedAccordion) {
      console.log(selectedAccordion); // Log the selected heading
    } else {
      setSnackbarOpen(true); // Show snackbar if no selection
    }
  };

  const handleSelect = (heading, isSelected) => {
    // Log the value based on the checkbox state
    console.log("Checkbox clicked:", heading, "Selected:", isSelected);
    setSelectedAccordion(isSelected ? heading : null); // Set selected based on checkbox state
  };

  const accordionsData = [
    {
      heading: "Airway 1",
      subheading: "New York - Los Angeles",
      content: "$450",
      description: "Airway 1 offers reliable and comfortable flights with an emphasis on customer service and punctuality.",
    },
    {
      heading: "Airway 2",
      subheading: "Chicago - Miami",
      content: "$300",
      description: "Airway 2 provides affordable flights with modern amenities, making travel easy and enjoyable.",
    },
    {
      heading: "Airway 3",
      subheading: "Dallas - San Francisco",
      content: "$550",
      description: "Airway 3 is known for its premium service and in-flight experience, focusing on passenger comfort and convenience.",
    },
    {
      heading: "Airway 4",
      subheading: "Boston - Seattle",
      content: "$400",
      description: "Airway 4 provides reliable and comfortable flights with an emphasis on customer service and punctuality.",
    },
    {
      heading: "Airway 5",
      subheading: "Atlanta - Denver",
      content: "$320",
      description: "Airway 5 is renowned for its friendly staff and seamless travel experience.",
    },
    {
      heading: "Airway 6",
      subheading: "Las Vegas - Orlando",
      content: "$600",
      description: "Airway 6 offers a luxurious travel experience, with attentive service and excellent amenities.",
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          maxHeight: {
            xs: 200,
            sm: 350,
          },
          overflowY: "auto",
          padding: 2,
          marginBottom: 2,
          backgroundColor: '#28282B',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          marginTop: '-30px'
        }}
      >
        {accordionsData.map((item, index) => (
          <HospitalAccordion
            key={index}
            heading={item.heading}
            subheading={item.subheading}
            content={item.content}
            description={item.description}
            selected={selectedAccordion === item.heading}
            onSelect={handleSelect}
          />
        ))}
      </Box>
      {/* Uncomment the button to handle navigation or next step */}
      {/* <Button variant="contained" color="black" onClick={handleNextClick} sx={{ marginLeft: 2 }}>
        Next
      </Button> */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Select one accordion option"
      />
    </Container>
  );
}

export default AccordionExample;