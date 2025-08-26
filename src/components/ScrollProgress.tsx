import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScroll / totalHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(currentScroll > 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`scroll-progress-container ${isVisible ? 'visible' : ''}`}>
      <div className="scroll-progress-track">
        <div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="scroll-progress-glow"></div>
        </div>
      </div>
      <div className="scroll-progress-labels">
        <span className="progress-label start">🌌 UNIVERS</span>
        <span className="progress-label middle">🎵 SINGLES</span>
        <span className="progress-label end">💝 JOURNEY</span>
      </div>
    </div>
  );
};

export default ScrollProgress;