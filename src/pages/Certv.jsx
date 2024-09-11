import React, { useEffect } from 'react';
import '../style/Certv.css';
import Vol from '../components/Vol';
import { useNavigate } from 'react-router-dom';

const Certv = () => {
  // Create an array to generate multiple blocks
  const blocks = new Array(10).fill(0);
  const navigate = useNavigate(); // Use the navigate hook

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    // Ensure the page starts at the top
    window.scrollTo(0, 0);

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Scroll up to navigate to /portfolio and scroll to bottom
      if (scrollTop < lastScrollTop) {
        const scrollThreshold = 100;
        if (scrollTop <= scrollThreshold) {
          navigate('/portfolio', { replace: true }); // Navigate to /portfolio // Scroll to bottom after navigating (small delay for navigation to complete)
        }
      }

      // Scroll down to navigate to /competitions
      if (scrollTop + windowHeight >= documentHeight - 10) {
        navigate('/competitions'); // Navigate to /competitions
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <div className='Certv-container'>
      {/* Falling blocks */}
      {blocks.map((_, index) => (
        <div key={index} className='falling-block' />
      ))}

      <p className='vole'>volunteering</p>
      <div className='Vol'>
        <Vol />
      </div>
    </div>
  );
};

export default Certv;
