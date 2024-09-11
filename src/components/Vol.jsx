import React, { useState } from 'react';
import '../style/Vol.css';
import invest from '../assets/Timeline/volunteering/is.png';
import devsoc from '../assets/Timeline/volunteering/dev.png'; 
import bloom from '../assets/Timeline/volunteering/dev.png'; // Import image for Trainee Lead
import reas from '../assets/language/reactt.png';
import csst from '../assets/language/csst.png';
import htmlt from '../assets/language/htmlt.png';
import jst from '../assets/language/jst.png';
import rt from '../assets/language/rt.png';
import excelt from '../assets/language/excelt.png';
import bird from '../assets/image/bird.jpg'

const Vol = () => {
  const [isCoverFlipped, setIsCoverFlipped] = useState(false);
  const [isCoverFlipped2, setIsCoverFlipped2] = useState(false);
  const [isCoverFlipped3, setIsCoverFlipped3] = useState(false); // State for the third book

  const flipCoverPage = () => {
    setIsCoverFlipped(!isCoverFlipped);
  };

  const flipCoverPage2 = () => {
    setIsCoverFlipped2(!isCoverFlipped2);
  };

  const flipCoverPage3 = () => {
    setIsCoverFlipped3(!isCoverFlipped3); // Toggle flip state for third book
  };



  return (
    <div className="Vol-container">
      {/* First Book */}
      <div className="book book1">
        <div className={`page cover-front ${isCoverFlipped ? 'flipped' : ''}`} onClick={flipCoverPage}>
          <h1 className="cover-uoft">University of Toronto Investment Society</h1>
          <h2 className="cover-uoft1">Economic Analyst</h2>
        </div>
        <div className="page text-page">
          <img src={invest} alt="Invest" className="invest" />
          <h2 className="page-title">Economic Analyst</h2>
          <div className="page-divider"></div>
          <p className="page-text">
            As an Economic Analyst at the University of Toronto Investment Society, I conducted in-depth market analysis, assessed economic trends, and evaluated companies to provide strategic insights for investment decisions.
          </p>
          <img src={ rt }  className="rt" />
          <img src={ excelt }  className="excelt" />
        </div>
      </div>

      {/* Second Book */}
      <div className="book book2">
        <div className={`page cover-front1 ${isCoverFlipped2 ? 'flipped' : ''}`} onClick={flipCoverPage2}>
          <h1 className="cover-unsw">UNSW DevSoc</h1>
          <h2 className="cover-unsw1">Dev Trainee</h2>
        </div>
        <div className="page text-page">
          <img src={devsoc} alt="DevSoc" className="devsoc" />
          <h2 className="page-title">Trainee Developer</h2>
          <div className="page-divider"></div>
          <p className="page-text">
            As a Dev Trainee at UNSW DevSoc, I built a full-stack website called Pluto, a movie recommendation platform with a dynamic database and a ranking system.
          </p>
          <img src={ reas } alt="React1" className="react1" />
          <img src={ jst }  className="jst" />
          <img src={ htmlt }  className="htmlt" />
          <img src={ csst }  className="csst" />
        </div>
      </div>

      <div className="book book3">
        <div className={`page cover-front2 ${isCoverFlipped3 ? 'flipped' : ''}`} onClick={flipCoverPage3}>
          <h1 className="cover-lead">UNSW DevSoc</h1>
          <h2 className="cover-lead1">Trainee Lead</h2>
        </div>
        <div className="page text-page">
          <img src={bloom} alt="Bloom" className="bloom" />
          <h2 className="page-title">Trainee Lead Developer</h2>
          <div className="page-divider"></div>
          <p className="page-text">
            As a Trainee Lead at UNSW DevSoc, I mentored trainees to build Bloom, a full-stack budgeting app that uses an AI-based recommendation system and banking API integrations.
          </p>
          <img src={ reas } alt="React1" className="react1" />
          <img src={ jst }  className="jst" />
          <img src={ htmlt }  className="htmlt" />
          <img src={ csst }  className="csst" />
        </div>
      </div>
    </div>
  );
};

export default Vol;
