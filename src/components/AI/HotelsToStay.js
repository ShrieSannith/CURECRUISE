import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";

const hotelsToStay = [
  {
    id: 1,
    name: "Hotel Paris",
    description: "A luxurious hotel located in the heart of Paris.",
    imageUrl: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Rome Inn",
    description: "A cozy inn offering stunning views of the city.",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Beijing Grand Hotel",
    description: "A grand hotel with exceptional services and amenities.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const HotelsToStay = () => {
  return (
    <div className="hotels-to-stay" style={{ margin: "0 20px" }}>
      {hotelsToStay.map(hotel => (
        <Card key={hotel.id} className="mb-4" style={{ borderRadius: "10px", overflow: "hidden" }}>
          <div className="d-flex" style={{ padding: "15px" }}>
            <CardImg
              top
              src={hotel.imageUrl}
              alt={hotel.name}
              style={{
                width: "200px",  // Fixed width for the image
                height: "150px", // Fixed height for the image
                objectFit: "cover", // Ensures the image covers the area without distortion
                borderRadius: "10px",
              }}
            />
            <CardBody style={{ padding: "15px" }}>
              <CardTitle tag="h5" style={{ fontWeight: "bold" }}>{hotel.name}</CardTitle>
              <CardText>{hotel.description}</CardText>
            </CardBody>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default HotelsToStay;
