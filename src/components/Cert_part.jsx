import React from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, Sticky, ZoomIn } from 'react-scroll-motion';
import '../style/Cert_part.css';

const Cert_part = () => {
  // Define animation combinations with smaller movement
  const leftAnimation = batch(Fade(), MoveIn(-100, 50), Sticky(), ZoomIn(0.2));
  const rightAnimation = batch(Fade(), MoveIn(100, 50), Sticky(), ZoomIn(0.2));

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={leftAnimation}>
          <div className="cert-item">
            <h3>Certificate 1</h3>
            <p>Description of Certificate 1</p>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={rightAnimation}>
          <div className="cert-item">
            <h3>Certificate 2</h3>
            <p>Description of Certificate 2</p>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={leftAnimation}>
          <div className="cert-item">
            <h3>Certificate 3</h3>
            <p>Description of Certificate 3</p>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <Animator animation={rightAnimation}>
          <div className="cert-item">
            <h3>Certificate 4</h3>
            <p>Description of Certificate 4</p>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Cert_part;
