import React, { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import AnimatedCircle from './AnimatedCircle';


const LaunchTimer = () => {
  const launchDate = new Date('July 15, 2023 10:30:00');
  const currentDate = new Date();
  const diffTime = launchDate - currentDate;
  const [timeLeft, setTimeLeft] = useState(0);

  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <Container>
     
    
    <Row>

    <Col className='box_col' >
    <Col className='digit_col'>{days}</Col>
    <Col className='aplha_col' >Days</Col>
    </Col>

    <Col className='box_col'>
    <Col className='digit_col'>{hours}</Col>
    <Col className='aplha_col'>Hours</Col>
    </Col>

    <Col className='box_col'>
    <Col className='digit_col'>{minutes}</Col>
    <Col className='aplha_col'>Minutes</Col>
    </Col>

  </Row>
  <Row>
    <Col className='digit_col'>{seconds}</Col>
  </Row>
  <Row>
    <Col  className='bounce_col'><AnimatedCircle/></Col>
  </Row>
  {/* <div className='Time_div'> {seconds} Seconds</div> */}
      <div className='null_factor'>{timeLeft}</div>
      
  </Container>
  );  													  
};  

 export default LaunchTimer;