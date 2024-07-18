import React, { useState } from 'react';
import './IntensePage.css';

const IntensePage = () => {
  const [time, setTime] = useState(5);

  const increaseTime = () => {
    if(time < 60){
    setTime(time + 5);
    }
  };

  const decreaseTime = () => {
    if (time > 5) {
      setTime(time - 5);
    }
  };

  return (
    <div>
      <div className="top"></div>
      <nav id="desktop-nav">
        <div className="logo">the typing<br />tempest</div>
        <ul className="nav-links">
          <li><a href="">zen</a></li>
          <li><a href="">profile</a></li>
        </ul>
      </nav>
      <div className="content">
        <p className="writing-question">How long would you like to write?</p>
        <div className="stopwatch">
          <button className="change-time" onClick={decreaseTime} disabled={time === 5}>-</button>
          <span className="time-display">{time}:00</span>
          <button className="change-time" onClick={increaseTime} disabled={time === 60}>+</button>
        </div>
        <button className="start-writing-button">Start Writing</button>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', textAlign: 'center', marginTop: '160px' }}>
          make sure you don't pause for more than 10 seconds, your texts may disappear!
        </p>
      </div>
    </div>
  );
};

export default IntensePage;
