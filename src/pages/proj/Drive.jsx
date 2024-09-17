import React from 'react'
import '../../style/proj/Drive.css'
import { Link } from 'react-router-dom';
import Driveimg from '../../assets/driveimg.png'
import { images } from '../../assets/planets/Container';
import css from '../../assets/language/css.jpg';
import html from '../../assets/language/html.jpg';
import js from '../../assets/language/js.jpg';
import react from '../../assets/language/react.jpg';

const Drive = () => {
  return (
    <div className='Drive-container'>
      <Link to="/projects" className="back-arrow">
        <div className="arrow-left">
          <span></span>
        </div>
        <span className="back-text">Back to Portfolio</span>
      </Link>

      <p className='pluto'>Project - Drive</p>
      <div className="left-column">
        <p className='hey'>
        Drive is a web and mobile application we created during a hackathon hosted by UniHack and Atlassian. The app motivates exercise through a unique social media twist: users or their friends upload an embarrassing photo of the user, which stays locked in the app. To prevent the photo from being released, the user must complete weekly exercise tasks like running, gym sessions, or specific workouts like doing 10 squats. This playful approach encourages users to stay active and meet fitness goals.

We built Drive using Figma for design and JavaScript, CSS, and HTML for development. Our goal was to inspire everyone to get healthier by making fitness fun and socially engaging.
        </p>
        <a
          href="https://www.canva.com/design/DAF-aek3x2I/PTLqFSGMHdv63Y3V46Cekg/view?utm_content=DAF-aek3x2I&utm_campaign=designshare&utm_medium=link&utm_source=editor" // Replace with your project's URL
          className="check-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
        </a>
      </div>

      <img src={Driveimg} className='plutoimg2'></img>

      <img src={images.moon} alt="Neptune" className="nep3" />

      <div className="images2">
        <img src={css} alt="CSS" />
        <img src={html} alt="HTML" />
        <img src={js} alt="JavaScript" />
      </div>

    </div>
  )
}

export default Drive