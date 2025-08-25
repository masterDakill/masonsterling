import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">ABOUT MASON STERLING</h2>
            <div className="text-content">
              <p className="intro-text">
                Bridging the gap between nostalgia and the future, Mason Sterling creates 
                a unique sound that marries the heart of country music with the electric 
                pulse of synthwave.
              </p>
              
              <p>
                Born from the endless highways and neon-lit nights of the American landscape, 
                Mason's music tells stories of love, loss, and the journey that defines us all. 
                His distinctive synthwave country style has captivated audiences worldwide, 
                creating an entirely new genre that speaks to both the past and the future.
              </p>
              
              <p>
                With influences ranging from classic country legends to modern electronic 
                pioneers, Mason Sterling has forged a path that's uniquely his own. Each song 
                is a cinematic journey through the heart of America, painted with synthesizers 
                and powered by authentic emotion.
              </p>
              
              <div className="achievements">
                <div className="achievement-item">
                  <span className="achievement-number">3</span>
                  <span className="achievement-label">Albums Released</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">1M+</span>
                  <span className="achievement-label">Streams Worldwide</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">50+</span>
                  <span className="achievement-label">Live Shows</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="artist-frame">
              <div className="artist-placeholder">
                <span className="artist-icon">🎵</span>
                <p className="artist-caption">SYNTHWAVE COUNTRY ARTIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;