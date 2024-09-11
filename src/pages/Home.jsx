import React, { Suspense, useRef, useEffect } from 'react';
import '../style/Home.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/three'; // Import react-spring for animations
import Computer from '../../public/Computer'; // Ensure this path is correct

const RotatingComputer = () => {
  const computerRef = useRef();

  useFrame(() => {
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.01;
    }
  });

  // Animation for the computer to appear from bottom to top
  const computerSpring = useSpring({
    position: [-0.3, -0.4, 0.0],
    from: { position: [-0.3, -2, 0.0] }, // Starts below the view
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.group position={computerSpring.position}>
      <Computer ref={computerRef} />
    </animated.group>
  );
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 1;

      if (scrollPosition >= scrollThreshold) {
        navigate('/portfolio'); // Redirect to portfolio when scrolled beyond the threshold
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  // Animation for the "Leef" text to appear from bottom to top
  const textSpring = useSpring({
    position: [0, 0, 0],
    from: { position: [0, -2, 0] }, // Starts below the view
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className='home-container'>
      <Canvas
        camera={{
          position: [5, 1, 0.1], // Position the camera
          fov: 20, // Field of view, adjust if necessary
          near: 0.1,
          far: 2000,
        }}
        antialias={true}
      >
        <ambientLight />
        <OrbitControls
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Infinity}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />

        <Suspense fallback={null}>
          {/* Animated "Leef" text */}
          <animated.group position={textSpring.position}>
            <Text
              fontSize={0.5}
              color="#333"
              anchorX="center"
              anchorY="middle"
            >
              Leef
            </Text>
          </animated.group>

          {/* Rotating 3D model */}
          <RotatingComputer />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
