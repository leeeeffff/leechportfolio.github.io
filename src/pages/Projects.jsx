import React, { useEffect, useRef } from 'react';
import '../style/Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const leftBlockRefs = Array(6).fill().map(() => useRef(null)); // Array of left block refs
  const rightBlockRefs = Array(6).fill().map(() => useRef(null)); // Array of right block refs

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.01, // Trigger when 10% of the block is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    // Observe all left and right blocks
    leftBlockRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    rightBlockRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Unobserve all blocks when unmounting
      leftBlockRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      rightBlockRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className='Project-container'>

      <p className='project'>Projects</p>
      <div className="line"></div>

      <div className='block-container'>
        <Link to='/projects/projectpluto' ref={leftBlockRefs[0]} className='block left-block'>
          <p className='emoji'>🌑</p>
          <p1 className='text'>Project Pluto</p1>
        </Link>
        <Link to='/projects/toohak' ref={rightBlockRefs[0]} className='block right-block'>
          <p className='emoji1'>🧾</p>
          <p1 className='text1'>TOOHAK</p1>
        </Link>
      </div>

      <div className='block-container'>
        <Link to='/projects/drive' ref={leftBlockRefs[1]} className='block left-block'>
          <p className='emoji1'>👾</p>
          <p1 className='text1'>Drive</p1>
        </Link>
        <Link to='/projects/unifood' ref={rightBlockRefs[1]} className='block right-block'>
        <p className='emoji2'>🍜</p>
        <p1 className='text2'>Uni-Food</p1>
        </Link>
      </div>

      <div className='block-container'>
        <Link to='/projects/cyclistic' ref={leftBlockRefs[2]} className='block left-block'>
          <p className='emoji11'>🚲</p>
          <p1 className='text11'>cyclistic Data analytics report </p1>
        </Link>
        <Link to='/projects/bcg' ref={rightBlockRefs[2]} className='block right-block'>
          <p className='emoji12'>🤝</p>
          <p1 className='text12'>bcg consulting report</p1>
        </Link>
      </div>

      <div className='block-container'>
        <Link to='/projects/airbnb' ref={leftBlockRefs[3]} className='block left-block'>
          <p className='emoji13'>🏨</p>
          <p1 className='text14'>Airbnb Analysis</p1>
        </Link>
        <Link to='/projects/toromart' ref={rightBlockRefs[3]} className='block right-block'>
          <p className='emoji14'>🛒</p>
          <p1 className='text13'>toromart analysis</p1>
        </Link>
      </div>

      <div className="line1"></div>
    </div>
  );
};

export default Projects;
