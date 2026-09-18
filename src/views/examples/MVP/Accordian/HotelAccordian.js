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
    backgroundColor:'	#343434',
    border: '1px solid black', // Corrected border style
    borderRadius: 1, // Optional: Add some border radius for rounded corners
        padding: 1, // Optional: Add some padding if needed
    
  }}
>

      {/* Checkbox outside the Accordion */}
      <Checkbox
        checked={selected}
        onChange={() => onSelect(heading)}
        color="primary"
        sx={{ marginLeft: 1, backgroundColor:"transparent" }}
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' ,  color: "white",}}>
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
              marginRight: '10px', ight: '10px',
              
            }}>
              {content}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add detailed description inside Accordion */}
          <Typography
              sx={{
                textAlign: "left", // Align text to the left
                     // Optional: add top margin for vertical spacing
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
    setSelectedAccordion(selectedAccordion === heading ? null : heading);
  };

  // Updated data with description
const accordionsData = [
  {
    heading: "Hotel Grandview",
    subheading: "120 Rooms",
    content: "$150 per night",
    description: "Hotel Grandview offers stunning city views, modern amenities, and is known for its excellent service and hospitality.",
  },
  {
    heading: "Sunset Inn",
    subheading: "80 Rooms",
    content: "$100 per night",
    description: "Sunset Inn is a cozy and affordable option, perfect for travelers looking for a comfortable stay close to popular attractions.",
  },
  {
    heading: "Lakeside Resort",
    subheading: "200 Rooms",
    content: "$200 per night",
    description: "Lakeside Resort provides a serene escape with beautiful lake views, luxury facilities, and activities for all ages.",
  },
  {
    heading: "Urban Oasis",
    subheading: "150 Rooms",
    content: "$120 per night",
    description: "Urban Oasis is a trendy hotel located in the heart of downtown, ideal for travelers seeking a modern and convenient stay.",
  },
  {
    heading: "Mountain Retreat",
    subheading: "50 Rooms",
    content: "$180 per night",
    description: "Mountain Retreat offers breathtaking mountain views, a peaceful atmosphere, and is a popular spot for nature lovers.",
  },
  {
    heading: "Beachside Paradise",
    subheading: "100 Rooms",
    content: "$220 per night",
    description: "Beachside Paradise is a premium hotel located right on the beach, featuring luxury rooms and a relaxing ambiance.",
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
    backgroundColor:'#28282B',
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar in Chrome, Safari, and Edge
    },
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
    marginTop:'-30px'
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
      {/* <Button
        variant="contained"
        color="black"
        onClick={handleNextClick}
        sx={{ marginLeft: 2 }}
      >
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