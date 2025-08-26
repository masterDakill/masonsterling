import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <div className="brand-main">
            <span className="brand-text">MASON STERLING</span>
            <span className="brand-label">MULTIVERSE AUDIO</span>
          </div>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('home')}
          >
            HOME
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('multiverse')}
          >
            MULTIVERSE
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('newsletter')}
          >
            NEWSLETTER
          </button>
        </div>

        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;