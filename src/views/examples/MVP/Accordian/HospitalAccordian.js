import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Checkbox,
  Button,
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
      {/* Checkbox outside the Accordion */}
      <Checkbox
        checked={selected}
        onChange={() => onSelect(heading)} // Return the heading on checkbox change
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: "white" }}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h6" fontSize="1rem">{heading}</Typography>
              <Typography variant="subtitle2" fontSize="0.9rem">{subheading}</Typography>
            </Box>
            {/* Style content to look like a button */}
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
          {/* Add detailed description inside Accordion */}
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
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
  
  const handleSelect = (heading) => {
    // Toggle selection
    setSelectedAccordion(selectedAccordion === heading ? null : heading);
  };

  // Updated data with description
  const accordionsData = [
    {
      heading: "Hospital 1",
      subheading: "Chennai",
      content: "90% Success",
      description: "Hospital 1 in Chennai is known for its high success rate in surgeries and patient care. It has modern facilities and experienced staff.",
    },
    {
      heading: "Hospital 2",
      subheading: "Mumbai",
      content: "95% Success",
      description: "Hospital 2 in Mumbai offers excellent healthcare services with advanced technology and a dedicated team of professionals.",
    },
    {
      heading: "Hospital 3",
      subheading: "Hyderabad",
      content: "82% Success",
      description: "Hospital 3 in Hyderabad is reputed for its patient-centric approach and state-of-the-art medical equipment.",
    },
     {
      heading: "Hospital 1",
      subheading: "Chennai",
      content: "90% Success",
      description: "Hospital 1 in Chennai is known for its high success rate in surgeries and patient care. It has modern facilities and experienced staff.",
    },
    {
      heading: "Hospital 2",
      subheading: "Mumbai",
      content: "95% Success",
      description: "Hospital 2 in Mumbai offers excellent healthcare services with advanced technology and a dedicated team of professionals.",
    },
    {
      heading: "Hospital 3",
      subheading: "Hyderabad",
      content: "82% Success",
      description: "Hospital 3 in Hyderabad is reputed for its patient-centric approach and state-of-the-art medical equipment.",
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          maxHeight: {
            xs: 200, // 200px for mobile phones
            sm: 350, // 350px for small devices and up
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