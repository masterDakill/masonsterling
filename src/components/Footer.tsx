import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-circle-small">
                <span className="logo-text-small">MS</span>
              </div>
            </div>
            <h3 className="brand-name">MASON STERLING</h3>
            <p className="brand-tagline">Synthwave Country Artist</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-title">Navigation</h4>
              <ul className="footer-list">
                <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                <li><button onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}>Music</button></li>
                <li><button onClick={() => document.getElementById('tour')?.scrollIntoView({ behavior: 'smooth' })}>Tour</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Music</h4>
              <ul className="footer-list">
                <li><a href="#">Love's Journey</a></li>
                <li><a href="#">Endless Journey</a></li>
                <li><a href="#">Roads We Travel</a></li>
                <li><a href="#">Latest Singles</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Connect</h4>
              <div className="social-links-footer">
                <a href="#" className="social-link-footer">
                  <span className="social-icon">🎵</span>
                  Spotify
                </a>
                <a href="#" className="social-link-footer">
                  <span className="social-icon">🍎</span>
                  Apple Music
                </a>
                <a href="#" className="social-link-footer">
                  <span className="social-icon">📺</span>
                  YouTube
                </a>
                <a href="#" className="social-link-footer">
                  <span className="social-icon">📷</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Mason Sterling. All rights reserved.</p>
            <p className="footer-credits">Built with passion for synthwave country music.</p>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop}>
            <span className="scroll-arrow-up">↑</span>
            <span className="scroll-text">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;