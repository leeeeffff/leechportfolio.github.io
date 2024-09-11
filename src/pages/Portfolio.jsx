import React, { useEffect, useState } from 'react';
import '../style/Portfolio.css';
import { ScrollContainer, ScrollPage, Animator, batch, Sticky, MoveOut } from 'react-scroll-motion';
import { useNavigate } from 'react-router-dom';
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
import mountain from '../assets/mountain1.png';
import Education from '../components/Education';

const Portfolio = () => {
  const navigate = useNavigate();
  const [raindrops, setRaindrops] = useState([]);

  // Create raindrops dynamically
  useEffect(() => {
    const createRaindrop = () => {
      const drops = [];
      for (let i = 0; i < 100; i++) { // Adjust the number of raindrops
        const dropStyle = {
          left: `${Math.random() * 100}vw`, // Random horizontal position
          animationDuration: `${Math.random() * 2 + 2}s`, // Random fall speed
          animationDelay: `${Math.random() * 5}s` // Random delay before falling
        };
        drops.push(<div key={i} className="raindrop" style={dropStyle}></div>);
      }
      setRaindrops(drops);
    };
    createRaindrop();
  }, []);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user is scrolling up
      if (scrollTop < lastScrollTop) {
        const scrollThreshold = 100;
        if (scrollTop <= scrollThreshold) {
          navigate('/');
        }
      }

      // Check if the user is at the bottom of the page
      if (scrollTop + windowHeight >= documentHeight - 10) {
        navigate('/certv');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  const animation = batch(Sticky(), MoveOut(0, -3000));
  const animation1 = batch(Sticky(), MoveOut(0, -6000));

  return (
    <div className='portfolio'>
      {/* Raindrop Container */}
      <div className="rain-container">
        {raindrops}
      </div>
      <h1 className='h1'>Portfolio</h1>
      <ScrollContainer>
        <ScrollPage className="scroll-page">
          <Animator animation={animation}>
            <div style={{ marginTop: '3100px' }}>
              <div className='scroller' data-speed="fast">
                <div className='scroller__inner'>
                  <img src={c} alt="C" className="language-image" />
                  <img src={cloud} alt="Cloud" className="language-image" />
                  <img src={css} alt="CSS" className="language-image" />
                  <img src={excel} alt="Excel" className="language-image" />
                  <img src={html} alt="HTML" className="language-image" />
                  <img src={js} alt="JavaScript" className="language-image" />
                  <img src={python} alt="Python" className="language-image" />
                  <img src={r} alt="R" className="language-image" />
                  <img src={react} alt="React" className="language-image" />
                  <img src={sql} alt="SQL" className="language-image" />
                  {/* Duplicated content for seamless scrolling */}
                  <img src={c} alt="C" className="language-image" />
                  <img src={cloud} alt="Cloud" className="language-image" />
                  <img src={css} alt="CSS" className="language-image" />
                  <img src={excel} alt="Excel" className="language-image" />
                  <img src={html} alt="HTML" className="language-image" />
                  <img src={js} alt="JavaScript" className="language-image" />
                  <img src={python} alt="Python" className="language-image" />
                  <img src={r} alt="R" className="language-image" />
                  <img src={react} alt="React" className="language-image" />
                  <img src={sql} alt="SQL" className="language-image" />
                </div>
              </div>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <div className='education'>
        <Education />
      </div>

      <ScrollContainer>
        <ScrollPage className="scroll-page">
          <Animator animation={animation}>
            <div>
              <h2 className='h2'>Skills</h2>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <ScrollContainer>
        <ScrollPage className="scroll-page1">
          <Animator animation={animation}>
            <h3 className='h3'>
              Education
            </h3>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <ScrollContainer>
        <ScrollPage className="mountain-sroll">
          <Animator animation={animation1}>
            <div>
              <img src={mountain} alt="Mountain" className='mountain'/>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default Portfolio;
