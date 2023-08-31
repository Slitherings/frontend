import React, { useState } from 'react';
import './Projects.css';
import FlappyBirdDemo from './jects/FlappyBirdDemo';
import swift from '../images/-xbCmUfc_400x400.png';
import hayha from '../images/xCKR64Mo_400x400.jpg';

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
    'image_url_3.jpg',
  ];

  const sampleGalleryCurrent = [
    // Add URLs or paths to your images for current projects
    'image_url_4.jpg',
    'image_url_5.jpg',
    'image_url_6.jpg',
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

  const navigateGallery = async (direction: 'prev' | 'next', modalType: 'previous' | 'current') => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const currentImageIndex = modalType === 'previous' ? currentImageIndexPrevious : currentImageIndexCurrent;
    const setCurrentImageIndex = modalType === 'previous' ? setCurrentImageIndexPrevious : setCurrentImageIndexCurrent;
    const currentGallery = modalType === 'previous' ? sampleGalleryPrevious : sampleGalleryCurrent;

    const nextIndex = direction === 'prev' ? (currentImageIndex === 0 ? currentGallery.length - 1 : currentImageIndex - 1) :
                                              (currentImageIndex === currentGallery.length - 1 ? 0 : currentImageIndex + 1);

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
        <button onClick={openPreviousModal} className="fade-in">View Gallery</button>
      </div>
      <div className="projects-section current-projects">
        <h2>Current Projects</h2>
        <button onClick={openCurrentModal} className="fade-in">View Gallery</button>
      </div>

      {/* Previous Projects Modal */}
      {showPreviousModal && (
        <div className="modal fade-in">
          <div className="modal-content">
            <button className="close-button" onClick={closePreviousModal}>
              &times;
            </button>
            <div className="gallery">
              <button className="arrow-button left-arrow" onClick={() => navigateGallery('prev', 'previous')}>
                &larr;
              </button>
              <div className="gallery">
                <div className='ImageContainer'>
                  {sampleGalleryPrevious.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Previous Project ${index + 1}`}
                      className={`gallery-img ${imageVisibility.previous[index] ? 'visible' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <button className="arrow-button right-arrow" onClick={() => navigateGallery('next', 'previous')}>
                &rarr;
              </button>
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
              <button className="arrow-button left-arrow" onClick={() => navigateGallery('prev', 'current')}>
                &larr;
              </button>
              <div className="gallery">
                <div className='ImageContainer'>
                  {sampleGalleryCurrent.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Current Project ${index + 1}`}
                      className={`gallery-img ${imageVisibility.current[index] ? 'visible' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <button className="arrow-button right-arrow" onClick={() => navigateGallery('next', 'current')}>
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
