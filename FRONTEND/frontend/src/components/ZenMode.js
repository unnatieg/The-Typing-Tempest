import React, { useState } from 'react';
import './ZenMode.css';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import roomambience from '../assets/roomambience.png';

const IntensePage = () => {
  const [time, setTime] = useState(300);
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected ambience card
  const [selectedSoundtrack, setSelectedSoundtrack] = useState(null); // State to track selected soundtrack card
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const navigate = useNavigate();

  const increaseTime = () => {
    const intervals = [300, 500, 800, 1000, 1300, 1500, 1800, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 10000];
    const currentIndex = intervals.findIndex(interval => interval > time);
    const nextInterval = intervals[currentIndex];
    if (nextInterval) {
      setTime(nextInterval);
    }
  };

  const decreaseTime = () => {
    const intervals = [300, 500, 800, 1000, 1300, 1500, 1800, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 10000];
    const currentIndex = intervals.findIndex(interval => interval >= time) - 1;
    const prevInterval = intervals[currentIndex];
    if (prevInterval >= 300) {
      setTime(prevInterval);
    }
  };

  const startWriting = () => {
    navigate('/intenseWriting', { state: { time } });
  };

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  const handleSoundtrackClick = (soundtrackId) => {
    setSelectedSoundtrack(soundtrackId);
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
        <p className="writing-question">How many words would you like to write?</p>
        <div className="stopwatch">
          <button className="change-time" onClick={decreaseTime} disabled={time === 300}>-</button>
          <span className="time-display">{time}</span>
          <button className="change-time" onClick={increaseTime} disabled={time === 10000}>+</button>
        </div>
        <p className="select-ambience">Select an ambience</p>
        <div className="ambience-cards">
          <div
            className={`card ${selectedCard === 1 ? 'selected' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <div className="selection-circle"></div>
            <img src={roomambience} alt="Cozy Corner" />
            <p>Cozy Corner</p>
          </div>
          <div
            className={`card ${selectedCard === 2 ? 'selected' : ''}`}
            onClick={() => handleCardClick(2)}
          >
            <div className="selection-circle"></div>
            <img src={roomambience} alt="Gentle Waves" />
            <p>Gentle Waves</p>
          </div>
          <div
            className={`card ${selectedCard === 3 ? 'selected' : ''}`}
            onClick={() => handleCardClick(3)}
          >
            <div className="selection-circle"></div>
            <img src={roomambience} alt="Lunar Glow" />
            <p>Lunar Glow</p>
          </div>
          <div
            className={`card ${selectedCard === 4 ? 'selected' : ''}`}
            onClick={() => handleCardClick(4)}
          >
            <div className="selection-circle"></div>
            <img src={roomambience} alt="Golden Hour" />
            <p>Golden Hour</p>
          </div>
        </div>

        <p className="select-soundtrack">Select a soundtrack</p>
        <div className="soundtrack-cards">
          <div
            className={`cardsoundtrack ${selectedSoundtrack === 1 ? 'selected' : ''}`}
            onClick={() => handleSoundtrackClick(1)}
          >
            <div className="selection-circle"></div>
            <p>Cafe noise</p>
          </div>
          <div
            className={`cardsoundtrack ${selectedSoundtrack === 2 ? 'selected' : ''}`}
            onClick={() => handleSoundtrackClick(2)}
          >
            <div className="selection-circle"></div>
            <p>Quiet Rain</p>
          </div>
          <div
            className={`cardsoundtrack ${selectedSoundtrack === 3 ? 'selected' : ''}`}
            onClick={() => handleSoundtrackClick(3)}
          >
            <div className="selection-circle"></div>
            <p>Gentle Waves</p>
          </div>
          <div
            className={`cardsoundtrack ${selectedSoundtrack === 4 ? 'selected' : ''}`}
            onClick={() => handleSoundtrackClick(4)}
          >
            <div className="selection-circle"></div>
            <p>Dreamy Beats</p>
          </div>
        </div>

        <button className="start-writing-button" onClick={startWriting}>Start Writing</button>
        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', textAlign: 'center', marginTop: '30px' }}>
          Unleash your creativity in the perfect ambience!
        </p>
      </div>
    </div>
  );
};

export default IntensePage;
