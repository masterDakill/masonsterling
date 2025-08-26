import React, { useState } from 'react';
import './SocialShare.css';

interface SocialShareProps {
  title: string;
  url?: string;
  artist?: string;
  track?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ 
  title, 
  url = window.location.href, 
  artist = "Mason Sterling",
  track 
}) => {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = track 
    ? `🎵 Découvrez "${track}" par ${artist} ! #MasonSterling #Musique`
    : `🎵 Découvrez l'univers musical de ${artist} ! #MasonSterling #Multiverse`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(shareText)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`,
    tiktok: `https://www.tiktok.com/`, // TikTok n'a pas d'API de partage direct
    instagram: `https://www.instagram.com/` // Instagram non plus
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(
      shareUrl,
      'share',
      'width=600,height=400,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="social-share-container">
      <button 
        className="share-toggle-btn"
        onClick={() => setShowShare(!showShare)}
        title="Partager"
      >
        <span className="share-icon">📤</span>
        <span className="share-text">Partager</span>
      </button>

      <div className={`share-dropdown ${showShare ? 'active' : ''}`}>
        <div className="share-header">
          <h4>Partager cette musique</h4>
          <p>{title}</p>
        </div>

        <div className="share-buttons">
          <button
            className="share-btn facebook"
            onClick={() => openShareWindow(shareLinks.facebook)}
            title="Partager sur Facebook"
          >
            <span className="btn-icon">📘</span>
            <span>Facebook</span>
          </button>

          <button
            className="share-btn twitter"
            onClick={() => openShareWindow(shareLinks.twitter)}
            title="Partager sur Twitter"
          >
            <span className="btn-icon">🐦</span>
            <span>Twitter</span>
          </button>

          <button
            className="share-btn whatsapp"
            onClick={() => openShareWindow(shareLinks.whatsapp)}
            title="Partager sur WhatsApp"
          >
            <span className="btn-icon">💬</span>
            <span>WhatsApp</span>
          </button>

          <button
            className="share-btn telegram"
            onClick={() => openShareWindow(shareLinks.telegram)}
            title="Partager sur Telegram"
          >
            <span className="btn-icon">✈️</span>
            <span>Telegram</span>
          </button>

          <button
            className="share-btn tiktok"
            onClick={() => window.open(shareLinks.tiktok, '_blank')}
            title="Ouvrir TikTok"
          >
            <span className="btn-icon">🎬</span>
            <span>TikTok</span>
          </button>

          <button
            className="share-btn instagram"
            onClick={() => window.open(shareLinks.instagram, '_blank')}
            title="Ouvrir Instagram"
          >
            <span className="btn-icon">📸</span>
            <span>Instagram</span>
          </button>
        </div>

        <div className="copy-link-section">
          <div className="url-display">
            <input 
              type="text" 
              value={url} 
              readOnly 
              className="url-input"
            />
            <button
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopyLink}
              title="Copier le lien"
            >
              {copied ? '✅' : '📋'}
            </button>
          </div>
          {copied && <span className="copy-feedback">Lien copié !</span>}
        </div>
      </div>

      {showShare && (
        <div 
          className="share-overlay"
          onClick={() => setShowShare(false)}
        />
      )}
    </div>
  );
};

export default SocialShare;