import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Programmer", "프로그래머", "プログラマー", "程序员", "प्रोग्रामर", "Programador"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(100); 
    } else {
        setDelta(200 - Math.random() * 100); 
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200 - Math.random() * 100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} className="content">
            <span className="tagline">Chang Hyun Lee</span>
            <h1>
              {"I think i am a"} <span className="wrap">{text}</span>
            </h1>
            <p>
              Hi, I'm Lee. I'm currently studying at UNSW, where I'm pursuing a dual degree in Computer Science and Commerce with specializations in Artificial Intelligence and Finance. I was born in Korea but moved to Thailand when I was 6 years old, where I grew up. After high school, I spent my first year at the University of Toronto studying business before transferring to UNSW. (BTW, this is all hand-drawn.)
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
