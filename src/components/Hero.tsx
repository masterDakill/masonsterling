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
            <span className="logo-text">MA</span>
          </div>
        </div>
        
        <h1 className="hero-title">MASON STERLING</h1>
        <div className="hero-brand-fusion">
          <span className="hero-label">MULTIVERSE AUDIO</span>
          <span className="hero-separator">×</span>
          <span className="hero-genre">SYNTHWAVE COUNTRY</span>
        </div>
        <p className="hero-subtitle">Artist • Producer • Multiverse Explorer</p>
        
        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('multiverse')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORER LE MULTIVERSE
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
          >
            NEWSLETTER
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