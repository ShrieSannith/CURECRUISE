import React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";
import './AI.css'


// Carousel items
const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States",
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States",
  },
];

// Hotels data
const hotelsToStay = [
  {
    id: 1,
    name: "Hotel Paris",
    description: "A luxurious hotel located in the heart of Paris.",
    imageUrl:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rome Inn",
    description: "A cozy inn offering stunning views of the city.",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Beijing Grand Hotel",
    description: "A grand hotel with exceptional services and amenities.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Hotel Paris",
    description: "A luxurious hotel located in the heart of Paris.",
    imageUrl:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Rome Inn",
    description: "A cozy inn offering stunning views of the city.",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Beijing Grand Hotel",
    description: "A grand hotel with exceptional services and amenities.",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function PlacesToVisit() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => setAnimating(true);
  const onExited = () => setAnimating(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Container style={{ maxWidth: "1500px", margin: "20px" }}>
      <Row>
        <Col lg="6" md="12">
          <div className="title text-center">
            <h4>PLACES TO VISIT</h4>
          </div>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            style={{ maxWidth: "100%" }}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {items.map((item) => (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.caption}</h5>
                </div>
              </CarouselItem>
            ))}
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              <i className="now-ui-icons arrows-1_minimal-left"></i>
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              <i className="now-ui-icons arrows-1_minimal-right"></i>
            </a>
          </Carousel>
        </Col>

        <Col lg="6" md="12">
          <div
            className="hotels-to-stay"
            style={{
              height: "500px", // Set a fixed height for the hotels section
              overflowY: "auto", // Enables vertical scrolling
              
              padding: "15px",
            }}
          >
          <h4 className="text-center">HOTELS TO STAY</h4>
{hotelsToStay.map((hotel) => (
  <Card
    key={hotel.id}
    className="mb-4"
    style={{
      borderRadius: "10px",
      overflow: "hidden",
    }}
  >
    <div className="d-flex flex-column flex-md-row" style={{ padding: "15px" }}>
      <CardImg
        top
        src={hotel.imageUrl}
        alt={hotel.name}
        style={{
          width: "200px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <CardBody style={{ padding: "15px" }}>
        <CardTitle tag="h5" style={{ fontWeight: "bold", color: "black" }}>
          {hotel.name}
        </CardTitle>
        <CardText style={{ color: "black" }}>{hotel.description}</CardText>
      </CardBody>
    </div>
  </Card>

))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PlacesToVisit;
