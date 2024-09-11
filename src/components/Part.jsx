import React, { useState } from 'react';
import '../style/Part.css';
import InvestImg from '../assets/Timeline/Competitions/investmentsociety.png'; // Replace with actual paths
import UniImg from '../assets/Timeline/Competitions/unihack.png'; 
import AtlaImg from '../assets/Timeline/Competitions/atlassian.png'; 
import BcgImg from '../assets/Timeline/Competitions/BCG.png'; 
import FactImg from '../assets/Timeline/Competitions/factset.png'; 

const competitions = {
  "Investment Society": {
    title: "Investment Society",
    subtitle: "University of toronto - Investment Case Competition",
    description: "The Investment Society competition challenges participants to analyze markets, identify investment opportunities, and pitch strategies. In a simulated commodities trading environment, prices of gold and oil fluctuate based on real-time news and competitor actions. Across four rounds, participants must adapt their strategies and outmaneuver rivals in a dynamic trading scenario.",
    image: InvestImg
  },
  "Unihack X Atlassian": {
    title: "Unihack X Atlassian",
    subtitle: "UNSW - UNIHACK X ATLASSIAN HACKATHON",
    description: "A collaborative hackathon where students build innovative tech projects, showcasing creativity and problem-solving. Our team created Drive, a gym-focused social media app that motivates users to stay consistent by enforcing consequences for missing scheduled workouts.",
    image: [UniImg, AtlaImg]
  },
  bcg: {
    title: "BCG Case Competition",
    subtitle: "UNSW - BCG CONSULTING CASE COMPETITION",
    description: "The BCG Case Competition, a business challenge that tests participants' problem-solving, analytical thinking, and presentation skills. Our team tackled a consulting case for a theoretical clothing brand facing expansion challenges and struggling to define its identity between luxury and streetwear markets. We conducted market sizing to assess the brand's growth potential in different markets, helping inform strategic recommendations for positioning and expansion.",
    image: BcgImg
  },
  factset: {
    title: "Factset Challenge",
    subtitle: "UNSW - FACTSET INVESTMENT CASE COMPETITION",
    description: "The Factset Challenge is an investment competition where students analyze data, make investment recommendations, and justify their decisions. Our case focused on Australian stocks listed on the ASX, requiring a deep dive into market trends and company performance.",
    image: FactImg
  }
};
const Part = () => {
  const [activePoint, setActivePoint] = useState(0); // Track active point

  const handleClick = (competitionKey, pointNumber) => {
    setActivePoint(pointNumber); // Set the active point when clicked
  };

  return (
    <div className='Part-container'>
      {/* Horizontal line with dynamic progress */}
      <div className="horizontal-line">
        {/* Points with dynamic active classes */}
        <div className={`point ${activePoint >= 1 ? 'active' : ''}`} onClick={() => handleClick('Investment Society', 1)}></div>
        <div className={`point ${activePoint >= 2 ? 'active' : ''}`} onClick={() => handleClick('Unihack X Atlassian', 2)}></div>
        <div className={`point ${activePoint >= 3 ? 'active' : ''}`} onClick={() => handleClick('bcg', 3)}></div>
        <div className={`point ${activePoint >= 4 ? 'active' : ''}`} onClick={() => handleClick('factset', 4)}></div>

        {/* Green progress line */}
        <div className={`progress-line ${activePoint >= 1 ? 'progress' : ''} ${activePoint >= 2 ? 'progress-2' : ''} ${activePoint >= 3 ? 'progress-3' : ''} ${activePoint >= 4 ? 'progress-4' : ''}`}></div>
      </div>

      <div className="competition-info-container">
        {Object.keys(competitions).map((key) => (
          <div
            key={key}
            className={`competition-info ${activePoint === Object.keys(competitions).indexOf(key) + 1 ? 'active' : ''}`}
          >
            <h2 className='title'>{competitions[key].title}</h2>
            <h3 className="subtitle">{competitions[key].subtitle}</h3>
            <p className="description">{competitions[key].description}</p>
            {Array.isArray(competitions[key].image) ? (
              <div>
                {competitions[key].image.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt={competitions[key].title} style={{ width: '100px', margin: '10px' }} />
                ))}
              </div>
            ) : (
              <img src={competitions[key].image} alt={competitions[key].title} style={{ width: '200px', margin: '10px', height: 'auto' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part;
