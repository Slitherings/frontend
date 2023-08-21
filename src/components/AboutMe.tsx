import React, { useEffect, useState } from 'react';
import ReactLogo from '../images/react-logo.png'; // Replace with the actual path to your image files
import TypeScriptLogo from '../images/typescript-logo.png';
import PythonLogo from '../images/python-logo.png';
import JavaScriptLogo from '../images/javascript-logo.png';
import SolidityLogo from '../images/solidity-logo.png';
import HTMLLogo from '../images/html-logo.png';
import CSSLogo from '../images/css-logo.png';
import TailwindLogo from '../images/tailwind-logo.png';
import OtherLogo from '../images/other-logo.png';
import { useLocation } from 'react-router-dom';

const AboutMe: React.FC = () => {
  const location = useLocation();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [typedText, setTypedText] = useState('');

  const aboutMeText = [
    " I'm a 24-year-old developer based in Plano, Texas.",
    " I hold an Associate's degree of Arts in General Studies and am currently pursuing a Bachelor's degree of Science in Business Computer Information Systems.",
    " With 4 years of experience in Fullstack Development, I've had the opportunity to work on a variety of projects and contribute to multiple open source GitHub repositories.",
    " Web Applications like Github, Figma, AWS & Other Cloud Computing / Collaborative Work Applications are natural areas of excel.",
    " I have a side hobby of Audio Engineering in Ableton Live 9 & FL Studio 11, Along with Video Editing in Adobe After Effects & Sony Vegas Pro."
  ];

  const typingSpeed = 50; // Adjust typing speed here (milliseconds per character)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-element');
        }
      });
    }, { threshold: 0.5 }); // Adjust the threshold as needed
  
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
    setIsRouteChanging(true);
    setTimeout(() => {
      setIsRouteChanging(false);
    }, 1500); // Adjust the timing to match the CSS transition duration
    let charIndex = 0;
    let sentenceIndex = 0;

    const typingInterval = setInterval(() => {
      if (sentenceIndex < aboutMeText.length) {
        if (charIndex < aboutMeText[sentenceIndex].length) {
          setTypedText((prevText) => prevText + aboutMeText[sentenceIndex].charAt(charIndex));
          charIndex++;
        } else {
          charIndex = 0;
          sentenceIndex++;
          setTypedText(''); // Clear typed text for the next sentence
        }
      } else {
        setIsTyped(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
      observer.disconnect();
    };
  }, [location]);

  return (
    <><div className={`about-me-container ${isRouteChanging ? 'fade-out' : 'fade-in'}`}>
      <h2 className="about-me-title" style={{ textAlign: 'center', color: 'white' }}>Jaylen Cooper</h2>
      <div className="content-box">
        <div className="about-me-content">
          {isTyped ? (
            <React.Fragment>
              <p>{aboutMeText[0]}</p>
              <p>{aboutMeText[1]}</p>
              <p>{aboutMeText[2]}</p>
              <p>{aboutMeText[3]}</p>
              <p>{aboutMeText[4]}</p>
            </React.Fragment>
          ) : (
            <p>{typedText}</p>
          )}
        </div>
      </div>

      <div className="logo-container">
        <img src={ReactLogo} alt="React Logo" />
        <img src={TypeScriptLogo} alt="TypeScript Logo" />
        <img src={PythonLogo} alt="Python Logo"  />
        <img src={JavaScriptLogo} alt="JavaScript Logo" />
        <img src={SolidityLogo} alt="Solidity Logo" />
        <img src={HTMLLogo} alt="HTML Logo" />
        <img src={CSSLogo} alt="CSS Logo" />
        <img src={TailwindLogo} alt="Tailwind CSS Logo" />
        <img src={OtherLogo} alt="Other Logo" />
      </div>
      <div className="button-container">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/your-userid"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          Stack Overflow
        </a>
      </div>
    </div><div className="logo-container">
        {/* ...logo images */}
      </div></>
  );
};

export default AboutMe;
