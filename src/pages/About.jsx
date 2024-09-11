import React, { useState } from 'react'; 
import { Banner } from '../components/Banner';
import '../style/About.css';
import headerImg from "../assets/image/face.jpg";
import { images } from '../assets/planets/Container';
import { contacts_images } from '../assets/contacts/contacts';
import c from '../assets/language/c.jpg';
import cloud from '../assets/language/cloud.jpg';
import css from '../assets/language/css.jpg';
import excel from '../assets/language/excel.jpg';
import html from '../assets/language/html.jpg';
import js from '../assets/language/js.jpg';
import python from '../assets/language/python.jpg';
import r from '../assets/language/r.jpg';
import react from '../assets/language/react.jpg';
import sql from '../assets/language/SQL.jpg';

function Home() {
  const [isShaking, setIsShaking] = useState(false); 

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500); 
  };

  return (
    <div className='home'>
      <Banner />

      <a href="https://github.com/leeeeffff" target="_blank" rel="noopener noreferrer">
        <img src={contacts_images.github} alt="Github" className="github" />
      </a>

      <a href="https://www.instagram.com/h._yuh/" target="_blank" rel="noopener noreferrer">
        <img src={contacts_images.insta} alt="Insta" className="insta" />
      </a>

      <a href="https://au.linkedin.com/in/chang-hyun-lee-0aa445254" target="_blank" rel="noopener noreferrer">
        <img src={contacts_images.linkedin} alt="Linkedin" className="linkedin" />
      </a>

      <button onClick={handleShake} className="smile-button">
        <img
          src={contacts_images.smile}
          alt="Smile"
          className="smile"
          style={{ cursor: 'pointer' }}
        />
      </button>

      <img
        className={`home-image ${isShaking ? 'shake' : ''}`} // Conditionally apply the shake class
        src={headerImg}
        alt="Header Img"
        style={{ marginLeft: '-50px' }}
      />
      <img src={c} className="c" />
      <img src={cloud} className="cloud" />
      <img src={css} className="css" />
      <img src={excel} className="excel" />
      <img src={html} className="html" />
      <img src={js} className="js" />
      <img src={python} className="python" />
      <img src={r} className="r" />
      <img src={react} className="react" />
      <img src={sql} className="sql" />

      <img src={images.moon} alt="Moon" className="moon" />
      <img src={images.jup} alt="Jupiter" className="jup" />
      <img src={images.mars} alt="Mars" className="mars" />
      <img src={images.nep} alt="Neptune" className="nep" />
      <img src={images.plus} alt="Plus" className="plus" />
      <img src={images.plus} alt="Plus" className="plus1" />
      <img src={images.plus} alt="Plus" className="plus2" />
      <img src={images.plus} alt="Plus" className="plus3" />
      <img src={images.diamond_star} alt="Diamond Star" className="diamond_star" />
      <img src={images.diamond_star} alt="Diamond Star" className="diamond_star1" />
      <img src={images.diamond_star} alt="Diamond Star" className="diamond_star2" />
      <img src={images.diamond_star} alt="Diamond Star" className="diamond_star3" />
      <img src={images.bigger_rock} alt="Bigger_rock" className="bigger_rock" />
      <img src={images.bigger_rock} alt="Bigger_rock" className="bigger_rock1" />
      <img src={images.bigger_rock} alt="Bigger_rock" className="bigger_rock2" />
      <img src={images.troid} alt="Troid" className="troid" />
      <img src={images.troid} alt="Troid" className="troid1" />
      <img src={images.troid} alt="Troid" className="troid2" />
      <img src={images.smaller_rock} alt="Smaller_rock" className="smaller_rock1" />
      <img src={images.smaller_rock} alt="Smaller_rock" className="smaller_rock2" />
      <img src={images.big_plus} alt="Big_plus" className="big_plus" />
    </div>
  );
}

export default Home;
