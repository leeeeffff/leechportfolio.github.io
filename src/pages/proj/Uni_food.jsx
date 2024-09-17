import React from 'react'
import '../../style/proj/Uni_food.css'
import { Link } from 'react-router-dom'; // Import Link for navigation
import Unimg from '../../assets/unifoodimg.png';
import css from '../../assets/language/css.jpg';
import html from '../../assets/language/html.jpg';
import js from '../../assets/language/js.jpg';
import react from '../../assets/language/react.jpg';
import { images } from '../../assets/planets/Container';

const Uni_food = () => {
  return (
    <div className='Uni-container'>
      <Link to="/projects" className="back-arrow">
        <div className="arrow-left">
          <span></span>
        </div>
        <span className="back-text">Back to Portfolio</span>
      </Link>
      <p className='pluto'>Project - Uni Foods</p>
      <div className="left-column">
        <p className='hey'>
        Uni Foods is a website we developed to help UNSW students discover dining options in the Kingsford area beyond the campus. Built with HTML, CSS, and JavaScript, it offers a curated list of local restaurants tailored for student exploration.

We introduced a fun rating system with categories like "This Sh*t Bussin," "Good," "Mid," and "I'd Rather Eat Maccas," allowing students to assess eateries in a relatable way. Each listing links directly to the restaurant's website or Google Maps location.

Our goal with Uni Foods was to encourage students to explore new culinary options in their community, making it easier and more enjoyable to find great food nearby.
        </p>

        {/* Add the button here */}
        <a
          href="https://food-uni-devsoc-github-p0w7spacj-leeeeffffs-projects.vercel.app/" // Replace with your project's URL
          className="check-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
        </a>
      </div>
      <img src={Unimg} className='plutoimg2'></img>

      <img src={images.mars} alt="Neptune" className="nep4" />

      <div className="images2">
        <img src={css} alt="CSS" />
        <img src={html} alt="HTML" />
        <img src={js} alt="JavaScript" />
      </div>
    </div>
  )
}

export default Uni_food