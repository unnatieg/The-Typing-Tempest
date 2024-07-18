import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <div className="top"></div>
      <nav id="desktop-nav">
        <div className="logo">the typing<br />tempest</div>
        <ul className="nav-links">
          <li><a href="">intense</a></li>
          <li><a href="">zen</a></li>
          <li><a href="">profile</a></li>
        </ul>
      </nav>
      <div className="clouds">
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud left-top" />
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud left-bottom" />
        <h1>unleash your <br />inner author</h1>
        <p class="intro-text">Welcome to <span class="title"> The Typing Tempest </span>, your ultimate companion to conquer writer's block.</p>
        <p class="intro-text" >Dive into immersive writing sessions designed to ignite your </p>
        <p class="intro-text">creativity and keep you motivated.</p>
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud right-top" />
        <img src={require('../assets/cloud.png')} alt="cloud" className="cloud right-bottom" />
        <img src={require('../assets/CAT.png')} alt="cat" className="cat" />
      </div>
    </div>
  );
};

export default HomePage;