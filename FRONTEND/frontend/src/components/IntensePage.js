import React, { useState } from 'react';
import './IntensePage.css';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

const IntensePage = () => {
  const [time, setTime] = useState(2);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const navigate = useNavigate();

  const increaseTime = () => {
    const intervals = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    const currentIndex = intervals.findIndex(interval => interval > time);
    const nextInterval = intervals[currentIndex];
    if (nextInterval) {
      setTime(nextInterval);
    }
  };

  const decreaseTime = () => {
    const intervals = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    const currentIndex = intervals.findIndex(interval => interval >= time) - 1;
    const prevInterval = intervals[currentIndex];
    if (prevInterval >= 2) {
      setTime(prevInterval);
    }
  };

  const startWriting = () => {
    navigate('/intenseWriting', { state: { time } });
  };

  return (
    <div>
      <div className="top"></div>
      <nav id="desktop-nav">
        <div className="logo">the typing<br />tempest</div>
        <ul className={`nav-links ${isSmallScreen ? 'mobile' : ''}`}>
          <li><a href="">zen</a></li>
          <li><a href="">profile</a></li>
        </ul>
      </nav>
      <div className="content">
        <p className="writing-question">How long would you like to write?</p>
        <div className="stopwatch">
          <button className="change-time" onClick={decreaseTime} disabled={time === 2}>-</button>
          <span className="time-display">{time}:00</span>
          <button className="change-time" onClick={increaseTime} disabled={time === 60}>+</button>
        </div>
        <button className="start-writing-button" onClick={startWriting}>Start Writing</button>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', textAlign: 'center', marginTop: '160px' }}>
          make sure you don't pause for more than 10 seconds, your texts may disappear!
        </p>
      </div>
    </div>
  );
};

export default IntensePage;
