import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './IntenseWriting.css';

import moonIcon from '../assets/darkmode.svg';
import expandingIcon from '../assets/expandingicon.svg';

function IntenseWriting() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [value, setValue] = useState('');
  const [timeLeft, setTimeLeft] = useState(state ? state.time * 60 : 0); // time in seconds
  const [wordCount, setWordCount] = useState(0);
  const timerRef = useRef(null);
  const deleteTextTimeoutRef = useRef(null);

  const handleChange = (event) => {
    const text = event.target.value;
    setValue(text);
    if (!timerRef.current) {
      startTimer();
    }
    // Update word count
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);

    // Reset delete text timeout
    clearTimeout(deleteTextTimeoutRef.current);
    if (text !== '') {
      deleteTextTimeoutRef.current = setTimeout(() => {
        deleteText();
      }, 5000); // Start deleting after 5 seconds of no input
    }
  };

  const deleteText = () => {
    const textLength = value.length;
    let remainingText = value;

    const deleteInterval = setInterval(() => {
      if (remainingText === '') {
        clearInterval(deleteInterval);
        setValue('');
        setWordCount(0);
        setTimeLeft(state ? state.time * 60 : 0); // Reset timer
        navigate('/Users/jazlynjose/Documents/the-typing-tempest/the-typing-tempest-web/FRONTEND/frontend/src/components/AfterFailing.js'); // Navigate to AfterFailing.js
      } else {
        const words = remainingText.trim().split(/\s+/);
        const newWords = words.slice(5);
        remainingText = newWords.join(' ');
        setValue(remainingText);
        setWordCount(newWords.length);
      }
    }, 200); // Delete 5 words every 200 milliseconds
  };

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      clearTimeout(deleteTextTimeoutRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="intense-writing-container">
      <div className="icons-container">
        <img src={moonIcon} alt="Moon Icon" className="moon-icon" />
        <img src={expandingIcon} alt="Expanding Icon" className="expanding-icon" />
      </div>
      <div className="content-container">
        <textarea
          placeholder="Start typing..."
          value={value}
          onChange={handleChange}
          className="seamless-input"
        />
        <div className="timer" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', position: 'absolute', bottom: '10px', left: '40px', top: '850px' }}>
          {formatTime(timeLeft)}
        </div>
        <div className="word-count" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', position: 'absolute', bottom: '10px', right: '40px', top: '850px' }}>
          Words: {wordCount}
        </div>
      </div>
    </div>
  );
}

export default IntenseWriting;
