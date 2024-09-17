import React from 'react'
import '../../style/proj/Bcg.css'
import { Link } from 'react-router-dom';
import BCGimg from '../../assets/BCGcase.png'
import { images } from '../../assets/planets/Container';

const Bcg = () => {
  return (
    <div className='BCG-container'>
       <Link to="/projects" className="back-arrow">
        <div className="arrow-left">
          <span></span>
        </div>
        <span className="back-text">Back to Portfolio</span>
      </Link>

      <p className='pluto'>Consulting - BCG Comp</p>
      <div className="left-column">
        <p className='hey'>
        During the BCG Consulting Competition, our team of four worked on a case study for Viora, a clothing company facing challenges in choosing new markets for expansion—both geographically and in target demographics. We conducted financial analysis, market sizing, and market research to develop accurate and efficient recommendations for their expansion strategy.

Our aim was to provide Viora with actionable insights to help them make informed decisions about entering markets with high growth potential, ultimately contributing to their success in new regions.
        </p>
        <a
          href="https://unsw-my.sharepoint.com/:p:/g/personal/z5414090_ad_unsw_edu_au/EUKh875Ue8FNlCG7UlJlSigBlQF4hPI8L36njEVdc1pFHg?e=NqW5LW" // Replace with your project's URL
          className="check-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out
        </a>
      </div>

      <img src={BCGimg} className='plutoimg3'></img>

      <img src={images.troid} alt="Neptune" className="nep6" />

    </div>
  )
}

export default Bcg