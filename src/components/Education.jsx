import React, { useState } from 'react';
import '../style/Education.css';
import GIS from '../assets/Timeline/gis.png'
import UOFT from '../assets/Timeline/uoft.png'
import UNSW from '../assets/Timeline/unsw.png'

const Education = () => {
  const [selectedSection, setSelectedSection] = useState('');

  const handleTextClick = (section) => {
    setSelectedSection(section); // Update the state with the selected section
  };

  return (
    <div className='education'>
      <h2
        className={`high-school-button ${selectedSection === 'high-school' ? 'selected' : ''}`}
        onClick={() => handleTextClick('high-school')}
      >
        High School - GIS
      </h2>

      <h2
        className={`uoft-button ${selectedSection === 'university-uoft' ? 'selected' : ''}`}
        onClick={() => handleTextClick('university-uoft')}
      >
        University - UOFT
      </h2>

      <h2
        className={`unsw-button ${selectedSection === 'university-unsw' ? 'selected' : ''}`}
        onClick={() => handleTextClick('university-unsw')}
      >
        University - UNSW
      </h2>

      {/* Display content conditionally based on selected section */}
      {selectedSection === 'high-school' && (
        <div className="high-school-content">
          <img className='gis' src={GIS} />
          <p className='gis-text'>Garden International School</p>
          <p className='gis-text0'>Rayong, Thailand</p>
          <p className='gis-text1'>2009-2022</p>
          <p className='gis-text2'>International Baccalaureate</p>
        </div>
      )}

      {selectedSection === 'university-uoft' && (
        <div className="university-content">
          <img className='uoft' src={UOFT} />
          <p className='uoft-text'>University of Toronto</p>
          <p className='uoft-text0'>Toronto, Canada</p>
          <p className='uoft-text1'>2022 - 2023</p>
          <p className='uoft-text2'>Bachelor of Business - Major in Economics and Finance</p>
        </div>
      )}

      {selectedSection === 'university-unsw' && (
        <div className="university1-content">
          <img className='unsw' src={UNSW} />
          <p className='unsw-text'>University of New South Wales</p>
          <p className='unsw-text0'>Sydney, Australia</p>
          <p className='unsw-text1'>2023 - Present</p>
          <p className='unsw-text2'>Bachelor of Computer Science and Commerce</p>
          <p className='unsw-text3'>Major in AI and Finance</p>
        </div>
      )}
    </div>
  );
};

export default Education;
