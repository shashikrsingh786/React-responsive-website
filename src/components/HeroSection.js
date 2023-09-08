import React from 'react';
import { Button } from "./Button";
import './HeroSection.css';
import '../App.css';


const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1 data-aos="fade-down">ADVENTURE AWAITS</h1>
      <p data-aos="fade-up">What are you waiting for?</p>
      <div className="hero-btns" data-aos="fade-up">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;