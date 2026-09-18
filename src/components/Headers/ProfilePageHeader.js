import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import { FaPen } from "react-icons/fa";

function ProfilePageHeader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [name, setName] = useState("Ryan Scheinder");
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Simulate image upload for now (you'll handle the backend integration later)
  const handleImageUpload = () => {
    if (selectedImage) {
      alert("Image will be uploaded to backend.");
    } else {
      alert("Please select an image first.");
    }
  };

  // Handle name edit toggle and save
  const toggleEditingName = () => {
    setIsEditingName(!isEditingName);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const saveName = () => {
    toggleEditingName();
    // Perform any additional logic, like saving to the backend
  };

  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div
            className="photo-container"
            style={{
              position: "relative",
              width: "150px",
              height: "150px",
              overflow: "visible",
              margin: "0 auto", // Centers the image container
            }}
          >
            {/* Display either the uploaded image or the default image */}
            <img
              alt="profile"
              src={imagePreview || require("assets/img/ryan.jpg")}
              style={{
                width: "100%", // Make image take up the full width of the container
                height: "100%", // Make image take up the full height of the container
                borderRadius: "50%", // Ensures the image is always circular
                objectFit: "cover", // Ensures the image covers the circle properly
                zIndex: "1", // ensure the image is at a lower z-index than the pen icon
              }}
            />

            {/* Pen Icon for Edit */}
            <div
              style={{
                position: "absolute",
                bottom: "-1px", // Shift outside of the image from the bottom
                right: "-1px", // Shift outside of the image from the right
                backgroundColor: "#007bff",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
                zIndex: "2", // Ensure pen icon is at a higher layer
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)", // optional: add a shadow for better visibility
              }}
              onClick={() => document.getElementById("imageInput").click()}
            >
              <FaPen color="white" />
            </div>
          </div>

          {/* Name and Edit Icon Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center horizontally
              marginTop: "20px",
            }}
          >
            {/* Display either the name or input field based on editing state */}
            {isEditingName ? (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                />
                <Button color="primary" onClick={saveName}>
                  Save
                </Button>
              </>
            ) : (
              <h3 className="title" style={{ marginRight: "10px" }}>
                {name}
              </h3>
            )}
            {/* Pen Icon for Editing Name */}
            {!isEditingName && (
              <FaPen
                color="gray"
                style={{ cursor: "pointer" }}
                onClick={toggleEditingName}
              />
            )}
          </div>

          {/* Image Upload Section */}
          <div style={{ marginTop: "20px" }}>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
