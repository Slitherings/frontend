import React, { useState } from 'react';
import './Projects.css';
import FlappyBirdDemo from './jects/FlappyBirdDemo';

const Projects: React.FC = () => {
  const [showPreviousModal, setShowPreviousModal] = useState(false);
  const [showCurrentModal, setShowCurrentModal] = useState(false);

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

  return (
    <div className="projects-container">
      <div className="projects-section previous-projects">
        <h2>Previous Projects</h2>
        <button onClick={openPreviousModal}>View Gallery</button>
        {/* Add content for previous projects */}
      </div>
      <div className="projects-section current-projects">
        <h2>Current Projects</h2>
        <button onClick={openCurrentModal}>View Gallery</button>
        {/* Add content for current projects */}
      </div>

      {/* Previous Projects Modal */}
      {showPreviousModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closePreviousModal}>
              Close
            </button>
            {/* Add your gallery content for previous projects */}
          </div>
        </div>
      )}

      {/* Current Projects Modal */}
      {showCurrentModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeCurrentModal}>
              Close
            </button>
            {/* Add your gallery content for current projects */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
