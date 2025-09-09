import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentHeadshot, setCurrentHeadshot] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const headshots = [
    '/assets/images/headshot/headshot1.jpg',
    '/assets/images/headshot/headshot2.jpg',
    '/assets/images/headshot/headshot3.jpg',
    '/assets/images/headshot/headshot4.jpg'
  ];
  
  useEffect(() => {
    // Rotate headshots every 4 seconds
    const interval = setInterval(() => {
      setCurrentHeadshot((prev) => (prev + 1) % headshots.length);
    }, 4000);
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-3d-gradient"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-headshot-container">
          <div className="headshot-3d-frame">
            <div className="headshot-glow"></div>
            <img 
              src={headshots[currentHeadshot]} 
              alt="Mason Sterling"
              className="hero-headshot"
            />
            <div className="headshot-indicators">
              {headshots.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator ${index === currentHeadshot ? 'active' : ''}`}
                  onClick={() => setCurrentHeadshot(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <h1 className="hero-title">
          <span className="title-gradient">MASON</span>
          <span className="title-accent">STERLING</span>
        </h1>
        
        <div className="hero-brand-fusion">
          <span className="hero-label">MULTIVERSE AUDIO</span>
          <span className="hero-separator">×</span>
          <span className="hero-genre">FUTURISTIC COUNTRY</span>
        </div>
        
        <p className="hero-subtitle">Artist • Producer • Storyteller</p>
        
        <div className="hero-ep-banner">
          <span className="ep-label">NEW EP</span>
          <span className="ep-title">Love's Journey</span>
          <span className="ep-status">NOW STREAMING</span>
        </div>
        
        <div className="hero-actions">
          <button 
            className="btn btn-primary btn-3d"
            onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="btn-text">LISTEN NOW</span>
            <span className="btn-icon">▶</span>
          </button>
          <button 
            className="btn btn-secondary btn-3d"
            onClick={() => document.getElementById('merch')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="btn-text">SHOP MERCH</span>
            <span className="btn-icon">🛍️</span>
          </button>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;