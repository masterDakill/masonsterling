import React, { useState } from 'react';
import './SocialShare.css';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
  hashtags?: string[];
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  title,
  url,
  description = '',
  hashtags = [],
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&hashtags=${hashtags.join(',')}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  };

  const handleShare = (_platform: string, shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const socialPlatforms = [
    { key: 'facebook', name: 'Facebook', icon: '📘', color: '#1877f2' },
    { key: 'twitter', name: 'Twitter/X', icon: '🐦', color: '#1da1f2' },
    { key: 'linkedin', name: 'LinkedIn', icon: '💼', color: '#0077b5' },
    { key: 'whatsapp', name: 'WhatsApp', icon: '💬', color: '#25d366' },
    { key: 'telegram', name: 'Telegram', icon: '✈️', color: '#0088cc' },
    { key: 'reddit', name: 'Reddit', icon: '🤖', color: '#ff4500' }
  ];

  return (
    <div className={`social-share ${className} ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="share-trigger"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Partager"
      >
        <span className="share-icon">🔗</span>
        <span className="share-text">Partager</span>
        <span className={`expand-arrow ${isExpanded ? 'rotated' : ''}`}>▼</span>
      </button>

      <div className="share-dropdown">
        <div className="share-header">
          <h4>Partager "{title}"</h4>
          <button 
            className="close-btn"
            onClick={() => setIsExpanded(false)}
          >
            ✕
          </button>
        </div>

        <div className="share-platforms">
          {socialPlatforms.map((platform) => (
            <button
              key={platform.key}
              className="platform-btn"
              onClick={() => handleShare(platform.key, shareLinks[platform.key as keyof typeof shareLinks])}
              style={{ '--platform-color': platform.color } as React.CSSProperties}
            >
              <span className="platform-icon">{platform.icon}</span>
              <span className="platform-name">{platform.name}</span>
            </button>
          ))}
          
          <button
            className="platform-btn copy-btn"
            onClick={handleCopyLink}
          >
            <span className="platform-icon">{copySuccess ? '✅' : '📋'}</span>
            <span className="platform-name">
              {copySuccess ? 'Copié !' : 'Copier le lien'}
            </span>
          </button>
        </div>

        <div className="share-footer">
          <p className="share-description">
            {description && `"${description}"`}
          </p>
          {hashtags.length > 0 && (
            <div className="hashtags">
              {hashtags.map((tag) => (
                <span key={tag} className="hashtag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialShare;