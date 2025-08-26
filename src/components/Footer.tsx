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
            <p className="brand-tagline">❤️ Singing about love & healing, one verse at a time! 🎶✨</p>
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
                <li><a href="https://youtube.com/playlist?list=PL_2ylY9_71_tyc69170HmzFItt72LoVzs&si=yk7OeAG0oIl33oGO" target="_blank" rel="noopener noreferrer">Drawn to the Unknown</a></li>
                <li><a href="https://soundcloud.com/masonsterling" target="_blank" rel="noopener noreferrer">More than my Name</a></li>
                <li><a href="http://www.masonsterling-ai.com" target="_blank" rel="noopener noreferrer">Love's Journey EP</a></li>
                <li><a href="https://www.youtube.com/@MasonSterling-r3p" target="_blank" rel="noopener noreferrer">Latest Singles</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Connect</h4>
              <div className="social-links-footer">
                <a href="https://youtube.com/playlist?list=PL_2ylY9_71_tyc69170HmzFItt72LoVzs&si=yk7OeAG0oIl33oGO" className="social-link-footer" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🎵</span>
                  Drawn to Unknown
                </a>
                <a href="https://www.youtube.com/@MasonSterling-r3p" className="social-link-footer" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">📺</span>
                  YouTube
                </a>
                <a href="https://soundcloud.com/masonsterling" className="social-link-footer" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🎵</span>
                  SoundCloud
                </a>
                <a href="http://www.tiktok.com/@mason_sterling" className="social-link-footer" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🎬</span>
                  TikTok
                </a>
                <a href="https://www.instagram.com/mason683847" className="social-link-footer" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">📷</span>
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=61578043131723" className="social-link-footer" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">👥</span>
                  Facebook
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