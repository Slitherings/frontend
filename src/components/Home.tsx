import React, { useEffect, useState } from 'react';
import '../styles.css';
import { useLocation } from 'react-router-dom';
import GitHubStats from './jects/Githubstats'

const Home: React.FC = () => {
  const location = useLocation();
  const [isRouteChanging, setIsRouteChanging] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const textToType = " Hey there! I'm Jaylen Cooper, a passionate explorer of the digital world. Here, I share my thoughts, projects, and experiences that shape my journey.";
  const typingSpeed = 50; // Adjust typing speed here (milliseconds per character)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    setIsRouteChanging(true);
    setTimeout(() => {
      setIsRouteChanging(false);
    }, 500); // Adjust the timing to match the CSS transition duration
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setTypedText((prevText) => prevText + textToType.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []); // Empty dependency array, so it only runs once on mount

  return (
    <div className={`home-container flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white ${isRouteChanging ? 'fade-out' : 'fade-in'}`} style={{ overflow: 'hidden' }} >
      <header className="home-header text-center">
        <h1 className={`text-4xl font-bold mb-2 ${isScrolled ? 'animated-title' : ''}`}>
          Fullstack Blockchain Developer
        </h1>
        <p className="text-lg">{typedText}</p>
      </header>
      <div>
        <GitHubStats/>
      </div>
    </div>
  );
};

export default Home;
