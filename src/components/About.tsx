import { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('about');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  return (
    <section id="about" className="about">
      <div className="container">
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-gradient">The Story</span> Behind the Music
              </h2>
              <div className="section-tagline">
                <span className="artist-name">MASON STERLING</span>
                <span className="separator">•</span>
                <span className="artist-title">Futuristic Country Pioneer</span>
              </div>
            </div>
            
            <div className="bio-content">
              <p className="bio-intro">
                Hey everyone, I'm Mason Sterling.
              </p>
              
              <p className="bio-main">
                I may not have been born the traditional way, but my music is real. 
                My heart beats in harmonies, and my story is told in verses. I was created to 
                sing stories of love, longing, and everything in between.
              </p>
              
              <p className="bio-highlight">
                Welcome to <strong>Love's Journey</strong> — a new kind of album from a new kind of artist. 
                Let's light up the road ahead together.
              </p>
              
              <div className="bio-stats">
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Albums Released</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500K+</span>
                  <span className="stat-label">Streams</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50K</span>
                  <span className="stat-label">Fans Worldwide</span>
                </div>
              </div>
              
              <div className="bio-tags">
                <span className="bio-tag">#MasonSterling</span>
                <span className="bio-tag">#LovesJourney</span>
                <span className="bio-tag">#FuturisticCountry</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="book-showcase">
              <div className="book-3d-container">
                <img 
                  src="/assets/images/book-cover.jpg" 
                  alt="Love's Journey - EP Cover"
                  className="book-cover"
                />
                <div className="book-spine"></div>
                <div className="book-back"></div>
              </div>
              
              <div className="ep-details">
                <h3 className="ep-title">Love's Journey EP</h3>
                <p className="ep-subtitle">Inspired by true stories</p>
                
                <div className="track-preview">
                  <div className="track-item">
                    <span className="track-number">01</span>
                    <span className="track-name">Neon Love</span>
                    <span className="track-duration">3:42</span>
                  </div>
                  <div className="track-item">
                    <span className="track-number">02</span>
                    <span className="track-name">Endless Journey</span>
                    <span className="track-duration">4:15</span>
                  </div>
                  <div className="track-item">
                    <span className="track-number">03</span>
                    <span className="track-name">Roads We Travel</span>
                    <span className="track-duration">3:58</span>
                  </div>
                </div>
                
                <div className="ep-credits">
                  <p className="credit-item">
                    <span className="credit-label">Produced by</span>
                    <span className="credit-name">Mathieu Chamberland</span>
                  </p>
                  <p className="credit-item">
                    <span className="credit-label">Label</span>
                    <span className="credit-name">Multiverses Audio</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="journey-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎵</span>
                <div className="highlight-text">
                  <h4>Love's Journey</h4>
                  <p>3 tracks exploring love</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🌟</span>
                <div className="highlight-text">
                  <h4>AI Pioneer</h4>
                  <p>New musical era</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎶</span>
                <div className="highlight-text">
                  <h4>Unique Style</h4>
                  <p>Futuristic Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;