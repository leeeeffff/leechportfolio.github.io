import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../style/proj/Pluto.css';
import Plutoimg from '../assets/pluto.png';
import css from '../assets/language/css.jpg';
import html from '../assets/language/html.jpg';
import js from '../assets/language/js.jpg';
import react from '../assets/language/react.jpg';
import { images } from '../assets/planets/Container';

const Pluto = () => {
  return (
    <div className='Pluto-container'>
      {/* Back Arrow */}
      <Link to="/projects" className="back-arrow">
        <div className="arrow-left">
          <span></span>
        </div>
        <span className="back-text">Back to Portfolio</span>
      </Link>

      {/* Project Title */}
      <p className='pluto'>Project - Pluto</p>

      {/* Explanation and Button */}
      <div className="left-column">
        <p className='hey'>
          Project Pluto is a website we developed to help users discover movies they'll enjoy by providing recommendations based on their chosen genres. Built during DevSoc using HTML, JavaScript, React, and CSS, we infused the site with a bit of humor and included some Easter eggs to make the experience more engaging. The website offers a wide range of genres for users to select from, so whether you're into action, romance, sci-fi, or anything in between, you'll find movie suggestions that match your interests. Our aim was to create a fun and easy way for people to explore new films that align with their preferences.
        </p>

        {/* Add the button here */}
        <a
          href="https://trainee-pluto-github-i0tiyh5ts-leeeeffffs-projects.vercel.app" // Replace with your project's URL
          className="check-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
        </a>
      </div>
      <img src={Plutoimg} className='plutoimg'></img>

      <img src={images.nep} alt="Neptune" className="nep1" />

      {/* Language Images */}
      <div className="images">
        <img src={css} alt="CSS" />
        <img src={html} alt="HTML" />
        <img src={js} alt="JavaScript" />
        <img src={react} alt="React" />
      </div>
      

    </div>
  );
};

export default Pluto;
