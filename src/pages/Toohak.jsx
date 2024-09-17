import React from 'react'
import '../style/proj/Toohak.css'
import { Link } from 'react-router-dom';
import js from '../assets/language/js.jpg';
import python from '../assets/language/python.jpg';
import { images } from '../assets/planets/Container';
import Toohakimg from '../assets/toohakimg.jpeg'


const Toohak = () => {
  return (
   <div className='Toohak-container'>
    <Link to="/projects" className="back-arrow">
        <div className="arrow-left">
          <span></span>
        </div>
        <span className="back-text">Back to Portfolio</span>
      </Link>

      <p className='pluto'>Project - Toohak</p>
      <div className="left-column">
        <p className='hey'>
        Toohak is a web and mobile application I developed with a team of three others, focusing on the backend. Designed for university students and inspired by Kahoot, it enhances learning through interactive quizzes. We built it using JavaScript, TypeScript, and Python.

Key features include user authentication, real-time peer communication, and live scoring updates. Administrators can manage sessions by removing participants or changing answers. Additionally, users can upload and share their own quizzes, creating a diverse, community-driven platform without relying solely on in-house content. Our aim with Toohak was to create an engaging and collaborative learning tool that promotes interaction among students.
        </p>

        {/* Add the button here */}
        <a
          href="https://github.com/leeeeffff/project-backends" // Replace with your project's URL
          className="check-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
        </a>
      </div>

      <img src={Toohakimg} className='plutoimg1'></img>

      <img src={images.jup} alt="Neptune" className="nep2" />

      <div className="images1">
        <img src={python} alt="Python" />
        <img src={js} alt="JavaScript" />

      </div>
      
    </div>
  );
};

export default Toohak