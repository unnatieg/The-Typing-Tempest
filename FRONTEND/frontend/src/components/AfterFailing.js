import React from 'react';
import { useMediaQuery } from 'react-responsive';
import failedCatImage from '../assets/failedCat.png';
import './AfterFailing.css';

function AfterFailing({ lostWordCount, startWriting, close }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  return (
    <div className="after-failing-container">
      <div className="content">
        <img src={failedCatImage} alt="Failed Cat" className="failed-cat-image" />
        <p className="message">
          Whoops! Your words just ghosted you.
          Maybe next time, try typing a bit faster?
        </p>
        <div className="buttons-container">
          <button className="start-writing-button" onClick={startWriting}>Try Again</button>
          <button className="start-writing-button" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default AfterFailing;
