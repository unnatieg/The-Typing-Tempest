import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <section class="first">
      <div className="top"></div>
      <nav id="desktop-nav">
        <div className="logo">the typing<br />tempest</div>
        <ul className="nav-links">
          <li><a href="#">intense</a></li>
          <li><a href="#">zen</a></li>
          <li><a href="#">profile</a></li>
        </ul>
      </nav>
      <div className="clouds">
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud left-top" />
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud left-bottom" />
        <h1>unleash your <br />inner author</h1>
        <p className="intro-text">Welcome to <span className="title"> The Typing Tempest </span>, your ultimate companion to conquer writer's block.</p>
        <p className="intro-text">Dive into immersive writing sessions designed to ignite your creativity and keep you motivated.</p>
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud right-top" />
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud right-bottom" />
        <img src={require('../assets/CAT.png')} alt="cat" className="cat" />
      </div>
      </section>
      <section className="new-section">
        <div className="card">
          <div>
            <h2 className="card-heading">Intense Mode</h2>
            <p>Push your limits with timed writing sessions and penalties for pausing, keeping you in the zone.</p>
            <a href="#" className="card-link">
              Try Now
              <img src={require('../assets/arrow.png')} alt="arrow" />
            </a>
          </div>
          
          <img src={require('../assets/character.png')} alt="character" className="character" />
        </div>
        <div className="card">
          <div>
            <h2 className="card-heading">Focus Mode</h2>
            <p>Achieve your writing goals with distraction-free, full-screen sessions tailored to enhance your focus.</p>
            <a href="#" className="card-link">
              Try Now
              <img src={require('../assets/arrow.png')} alt="arrow" />
            </a>
          </div>
          <img src={require('../assets/character2.png')} alt="character" className="character" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;