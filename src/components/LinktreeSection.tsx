import './LinktreeSection.css';

const LinktreeSection = () => {
  const socialLinks = [
    {
      name: 'Complete Linktree',
      url: 'https://linktr.ee/masonsterling', // À ajuster selon votre vraie URL
      icon: '🌳',
      description: 'All my links in one place',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      featured: true
    },
    {
      name: 'Drawn to the Unknown',
      url: 'https://youtube.com/playlist?list=PL_2ylY9_71_tyc69170HmzFItt72LoVzs&si=yk7OeAG0oIl33oGO',
      icon: '🎵',
      description: 'Latest YouTube Playlist',
      color: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)'
    },
    {
      name: 'Official Website',
      url: 'http://www.masonsterling-ai.com',
      icon: '🌐',
      description: 'Experience the full journey',
      color: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)'
    },
    {
      name: 'YouTube Channel',
      url: 'https://www.youtube.com/@MasonSterling-r3p',
      icon: '📺',
      description: 'Subscribe for new content',
      color: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)'
    },
    {
      name: 'SoundCloud',
      url: 'https://soundcloud.com/masonsterling',
      icon: '🎵',
      description: 'Stream my tracks',
      color: 'linear-gradient(135deg, #ff8500 0%, #ff6100 100%)'
    },
    {
      name: 'TikTok',
      url: 'http://www.tiktok.com/@mason_sterling',
      icon: '🎬',
      description: 'Short-form content',
      color: 'linear-gradient(135deg, #ff0050 0%, #00f2ea 100%)'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mason683847',
      icon: '📸',
      description: 'Behind the scenes',
      color: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61578043131723',
      icon: '👥',
      description: 'Connect with the community',
      color: 'linear-gradient(135deg, #1877f2 0%, #0d5bd9 100%)'
    }
  ];

  return (
    <section id="linktree" className="linktree-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connect with Mason Sterling</h2>
          <p className="section-subtitle">
            ❤️ Singing about love & healing, one verse at a time! 🎶✨<br/>
            <strong>Find me everywhere - Choose your preferred platform</strong>
          </p>
        </div>

        <div className="links-grid">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              className={`link-card ${link.featured ? 'featured' : ''}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                '--gradient': link.color,
                animationDelay: `${index * 0.1}s`
              } as React.CSSProperties}
            >
              <div className="link-icon">
                <span>{link.icon}</span>
              </div>
              <div className="link-content">
                <h3 className="link-name">{link.name}</h3>
                <p className="link-description">{link.description}</p>
              </div>
              <div className="link-arrow">
                <span>→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="linktree-cta">
          <div className="cta-content">
            <div className="cta-icon">🌳</div>
            <h3>Complete Link Collection</h3>
            <p>Visit my Linktree for the complete collection of all my platforms and latest updates</p>
            <a 
              href="https://linktr.ee/masonsterling" 
              className="cta-button"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span>Open Linktree</span>
              <span className="button-icon">🚀</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinktreeSection;