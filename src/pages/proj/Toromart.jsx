import React from 'react'
import '../../style/proj/Toromart.css'
import { Link } from 'react-router-dom';
import Toromartimg from '../../assets/toromarkimg.png'
import { images } from '../../assets/planets/Container';

const Toromart = () => {
  return (
    <div className='Toromart-container'>
       <Link to="/projects" className="back-arrow">
        <div className="arrow-left">
          <span></span>
        </div>
        <span className="back-text">Back to Portfolio</span>
      </Link>

      <p className='pluto'>Case study - Toromark</p>
      <div className="left-column">
        <p className='hey'>
        During a project with Toromark Digital Marketing, our team of four conducted an analysis to help the company decide between two potential cities—Austin, Texas, and Charlotte, North Carolina—for their geographical expansion. We evaluated factors like population demographics, economic indicators, transportation infrastructure, communication systems, and real estate to develop accurate and efficient recommendations for their expansion strategy.

Our aim was to provide Toromark with actionable insights to help them make informed decisions about entering markets with high growth potential, ultimately contributing to their success in new regions.
        </p>
        <a
          href="https://docs.google.com/document/d/1OnBIx8c7aBISRtJWwT_bQRnBPcrAgl8kKGamyIaZX5o/edit?usp=sharing" // Replace with your project's URL
          className="check-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
        </a>
      </div>

      <img src={Toromartimg} className='plutoimg3'></img>

      <img src={images.bigger_rock} alt="Neptune" className="nep3" />
    </div>
  )
}

export default Toromart