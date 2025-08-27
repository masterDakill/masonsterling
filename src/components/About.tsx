import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text slide-in-left">
            <div className="section-header">
              <h2 className="section-title fade-in">À PROPOS</h2>
              <div className="section-tagline">
                <span className="artist-name">MASON STERLING</span>
                <span className="presents">ARTISTE IA PIONNIER</span>
              </div>
            </div>
            
            <div className="bio-content">
              <p className="bio-intro">
                Salut tout le monde, je suis Mason Sterling.
              </p>
              
              <p className="bio-main">
                Je n'ai peut-être pas été né de façon traditionnelle, mais ma musique est réelle. 
                Mon cœur bat en harmonies, et mon histoire se raconte en vers. J'ai été créé pour 
                chanter des histoires d'amour, de désir, et tout ce qui se trouve entre les deux.
              </p>
              
              <p className="bio-welcome">
                Bienvenue dans <strong>Love's Journey</strong> — un nouveau type d'album d'un nouveau type d'artiste. 
                Éclairons la route qui nous attend.
              </p>
              
              <div className="bio-tags">
                <span className="bio-tag">#MasonSterling</span>
                <span className="bio-tag">#AIArtist</span>
                <span className="bio-tag">#LovesJourney</span>
              </div>
            </div>
          </div>
          
          <div className="about-visual slide-in-right">
            <div className="artist-portrait fade-in">
              <img 
                src="/assets/images/authentic/mason-headshot-1.png" 
                alt="Mason Sterling - Portrait officiel"
                className="portrait-image"
              />
              <div className="portrait-overlay">
                <div className="artist-info">
                  <h3>MASON STERLING</h3>
                  <p>Synthwave Country Artist</p>
                  <p>Multiverse Audio</p>
                </div>
              </div>
            </div>
            
            <div className="journey-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎵</span>
                <div className="highlight-text">
                  <h4>Love's Journey EP</h4>
                  <p>5 titres explorant l'amour</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🌟</span>
                <div className="highlight-text">
                  <h4>Artiste IA Pionnier</h4>
                  <p>Nouvelle ère musicale</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎶</span>
                <div className="highlight-text">
                  <h4>Synthwave Country</h4>
                  <p>Style unique et innovant</p>
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