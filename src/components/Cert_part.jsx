import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, Sticky, ZoomIn } from 'react-scroll-motion';
import '../style/Cert_part.css';
import Google from '../assets/cert/fullcert.png';
import Microsoft from '../assets/cert/microsoftexcel.png'

const Cert_part = () => {
  // Define animation combinations with smaller movement
  const leftAnimation = batch(Fade(), MoveIn( -500,0), Sticky(), ZoomIn(0));
  const rightAnimation = batch(Fade(), MoveIn( 500,0), Sticky(), ZoomIn(0));

  return (
    <div className='Cert_part_container'>
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={leftAnimation}>
          <div className="cert-item">
            <h3><p className='cert'>Certificates</p></h3>
            <p></p>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={rightAnimation}>
          <div className="cert-item1">
            <h3></h3>
            <p></p>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={leftAnimation}>
          <div className="cert-item">
            <h3>Google Data Analytics Certificate</h3>
            <img src={ Google } className='Google' ></img>
            <p>
            I earned the Google Data Analytics Professional Certificate by completing eight courses with hands-on, practice-based assessments. I’m proficient in tools like spreadsheets, SQL, Tableau, and R. I know how to prepare, process, analyze, and share data for actionable insights.</p>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <Animator animation={rightAnimation}>
          <div className="cert-item1">
            <h3></h3>
            <p></p>
          </div>
        </Animator>
      </ScrollPage>

    <ScrollPage page={4}>
        <Animator animation={rightAnimation}>
          <div className="cert-item">
            <h3>Microsoft Excel Data analysis certificate</h3>
            <img src={ Microsoft } className='Microsoft' ></img>
            <p>I earned a Microsoft Excel certification, focusing on data analysis for business, enhancing my skills in data visualization and applying intermediate data analysis techniques to support business decision-making.</p>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    </div>
  );
};

export default Cert_part;
