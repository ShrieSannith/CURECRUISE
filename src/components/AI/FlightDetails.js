import React from "react";
import { Card, CardBody } from "reactstrap";

const flightInfo = [
  {
    airlineName: "Airline A",
    date: "2024-10-20",
    hours: "10:30 AM",
    cost: "$250",
    additionalFee: "$20",
  },
  {
    airlineName: "Airline B",
    date: "2024-10-21",
    hours: "2:15 PM",
    cost: "$300",
    additionalFee: "$25",
  },
  {
    airlineName: "Airline C",
    date: "2024-10-22",
    hours: "5:00 PM",
    cost: "$350",
    additionalFee: "$30",
  },
  // Additional flight info for testing scroll
  {
    airlineName: "Airline D",
    date: "2024-10-23",
    hours: "7:45 PM",
    cost: "$400",
    additionalFee: "$35",
  },
  {
    airlineName: "Airline E",
    date: "2024-10-24",
    hours: "8:30 AM",
    cost: "$450",
    additionalFee: "$40",
  },
];

function FlightDetails() {
  return (
    <div className="flight-details" style={{ margin: "0 10px" }}>
      <Card
        style={{
          backgroundColor: "#28282B",
          borderRadius: "10px",
          padding: "20px",
          width: "100%", // Ensures it takes full width
        }}
      >
        <h4 style={{ color: "white", textAlign: "center" }}>Flight Details</h4>
        <CardBody
          style={{
            maxHeight: "300px", // Set a max height for the scrollable area
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          {/* Table Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "15px 0",
              borderBottom: "2px solid #444", // thicker border for header
              fontWeight: "bold",
            }}
          >
            <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>Airline Name</div>
            <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>Date</div>
            <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>Hours</div>
            <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>Cost</div>
            <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>Additional Fee</div>
          </div>
          {/* Flight Info Rows */}
          {flightInfo.map((flight, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 0",
                borderBottom: index < flightInfo.length - 1 ? "1px solid #444" : "none",
              }}
            >
              <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>{flight.airlineName}</div>
              <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>{flight.date}</div>
              <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>{flight.hours}</div>
              <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>{flight.cost}</div>
              <div style={{ color: "#fff", flex: 1, padding: "0 10px" }}>{flight.additionalFee}</div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default FlightDetails;
