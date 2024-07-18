import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './IntenseWriting.css';

import moonIcon from '../assets/darkmode.svg';
import expandingIcon from '../assets/expandingicon.svg';

function IntenseWriting() {
    const [value, setValue] = useState('');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  
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
        </div>
      </div>
    );
  }
  
  export default IntenseWriting;