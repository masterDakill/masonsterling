import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-logo">
          <div className="logo-circle">
            <span className="logo-text">MS</span>
          </div>
        </div>
        
        <h1 className="hero-title">MASON STERLING</h1>
        <p className="hero-subtitle">SYNTHWAVE COUNTRY ARTIST</p>
        
        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LISTEN NOW
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth' })}
          >
            TOUR DATES
          </button>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;