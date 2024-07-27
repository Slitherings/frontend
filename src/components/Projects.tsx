import React, { useState } from "react";
import "./Projects.css";
import swift from "../images/-xbCmUfc_400x400.png";
import hayha from "../images/xCKR64Mo_400x400.jpg";
import kosher from '../images/5K3Fwa1Y_400x400.jpg';

const Projects: React.FC = () => {
  const [showPreviousModal, setShowPreviousModal] = useState(false);
  const [showCurrentModal, setShowCurrentModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentImageIndexPrevious, setCurrentImageIndexPrevious] = useState(0);
  const [currentImageIndexCurrent, setCurrentImageIndexCurrent] = useState(0);

  const sampleGalleryPrevious = [
    // Add URLs or paths to your images for previous projects
    swift,
    hayha,
    kosher,
  ];

  const sampleGalleryCurrent = [
    // Add URLs or paths to your images for current projects
    "image_url_4.jpg",
    "image_url_5.jpg",
    "image_url_6.jpg",
  ];

  const projectTitles = [
    "SwiftSole",
    "Hayha Bots",
    "Kosher Kit"
  ];

  const projectDescriptions = [
    "Helped Maintain React/Typescript (User, Settings Pages). Along with helping on the Electron, React Prototype Fullstack Application.",
    "Worked on the Original Hayha Application Version 2, with Python and Javascript on the Electron Application.",
    "Created the NFT Smart Contract with Solidity, Deployed Smart Contract and created Smart Contract Functions for Product Renewal."
  ];

  const projectTimeWorked = [
    "3 months",
    "6 weeks",
    "4 months"
  ];

  const openPreviousModal = () => {
    setShowPreviousModal(true);
  };

  const closePreviousModal = () => {
    setShowPreviousModal(false);
  };

  const openCurrentModal = () => {
    setShowCurrentModal(true);
  };

  const closeCurrentModal = () => {
    setShowCurrentModal(false);
  };

  const [imageVisibility, setImageVisibility] = useState({
    previous: Array(sampleGalleryPrevious.length).fill(false),
    current: Array(sampleGalleryCurrent.length).fill(false),
  });

  const navigateGallery = async (
    direction: "prev" | "next",
    modalType: "previous" | "current"
  ) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const currentImageIndex =
      modalType === "previous"
        ? currentImageIndexPrevious
        : currentImageIndexCurrent;
    const setCurrentImageIndex =
      modalType === "previous"
        ? setCurrentImageIndexPrevious
        : setCurrentImageIndexCurrent;
    const currentGallery =
      modalType === "previous" ? sampleGalleryPrevious : sampleGalleryCurrent;

    const nextIndex =
      direction === "prev"
        ? currentImageIndex === 0
          ? currentGallery.length - 1
          : currentImageIndex - 1
        : currentImageIndex === currentGallery.length - 1
        ? 0
        : currentImageIndex + 1;

    const updatedVisibility = { ...imageVisibility };
    updatedVisibility[modalType][currentImageIndex] = false;
    updatedVisibility[modalType][nextIndex] = true;

    setImageVisibility(updatedVisibility);

    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for the fade out transition

    setCurrentImageIndex(nextIndex);
    setIsTransitioning(false);
  };

  return (
    <div className="projects-container">
      <div className="projects-section previous-projects">
        <h2>Previous Projects</h2>
        <button onClick={openPreviousModal} className="fade-in">
          View Gallery
        </button>
      </div>
      <div className="projects-section current-projects">
        <h2>Current Projects</h2>
        <button onClick={openCurrentModal} className="fade-in">
          View Gallery
        </button>
      </div>

      {/* Previous Projects Modal */}
      {showPreviousModal && (
        <div className="modal fade-in">
          <div className="modal-content">
            <button className="close-button" onClick={closePreviousModal}>
              &times;
            </button>
            <div className="gallery">
              <button
                className="arrow-button left-arrow"
                onClick={() => navigateGallery("prev", "previous")}
              >
                &larr;
              </button>
              <div className="gallery">
                <div className="ImageContainer">
                  {sampleGalleryPrevious.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Previous Project ${index + 1}`}
                      className={`gallery-img ${
                        imageVisibility.previous[index] ? "visible" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                className="arrow-button right-arrow"
                onClick={() => navigateGallery("next", "previous")}
              >
                &rarr;
              </button>
            </div>
            <div className="gallery-info" style={{top:'150px', position:'absolute'}}>
              <h2 className="gallery-slide-title">
                {projectTitles[currentImageIndexPrevious]}
              </h2>
              <p className="gallery-slide-description">
                {projectDescriptions[currentImageIndexPrevious]}
              </p>
              <p className="gallery-slide-time-worked">
                Time worked: {projectTimeWorked[currentImageIndexPrevious]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Current Projects Modal */}
      {showCurrentModal && (
        <div className="modal fade-in">
          <div className="modal-content">
            <button className="close-button" onClick={closeCurrentModal}>
              &times;
            </button>
            <div className="gallery">
              <button
                className="arrow-button left-arrow"
                onClick={() => navigateGallery("prev", "current")}
              >
                &larr;
              </button>
              <div className="gallery">
                <div className="ImageContainer">
                  {sampleGalleryCurrent.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Current Project ${index + 1}`}
                      className={`gallery-img ${
                        imageVisibility.current[index] ? "visible" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                className="arrow-button right-arrow"
                onClick={() => navigateGallery("next", "current")}
              >
                &rarr;
              </button>
            </div>
            <div className="gallery-info">
              <h2 className="gallery-slide-title">
                {projectTitles[currentImageIndexCurrent]}
              </h2>
              <p className="gallery-slide-description">
                {projectDescriptions[currentImageIndexCurrent]}
              </p>
              <p className="gallery-slide-time-worked">
                Time worked: {projectTimeWorked[currentImageIndexCurrent]}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Current Projects Modal */}
      {showCurrentModal && (
        <div className="modal fade-in">
          <div className="modal-content">
            <button className="close-button" onClick={closeCurrentModal}>
              &times;
            </button>
            <div className="gallery">
              <button
                className="arrow-button left-arrow"
                onClick={() => navigateGallery("prev", "current")}
              >
                &larr;
              </button>
              <div className="gallery">
                <div className="ImageContainer">
                  {sampleGalleryCurrent.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Current Project ${index + 1}`}
                      className={`gallery-img ${
                        imageVisibility.current[index] ? "visible" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                className="arrow-button right-arrow"
                onClick={() => navigateGallery("next", "current")}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
