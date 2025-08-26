import React, { useState } from 'react';
import './SoundCloudPlayer.css';

interface SoundCloudPlayerProps {
  url: string;
  title: string;
  artist: string;
  minimal?: boolean;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ 
  url, 
  title, 
  artist, 
  minimal = false 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  // Extraire l'ID SoundCloud de l'URL
  const getSoundCloudEmbedUrl = (soundcloudUrl: string, useMinimal: boolean = false) => {
    const baseUrl = 'https://w.soundcloud.com/player/';
    const params = new URLSearchParams({
      url: soundcloudUrl,
      color: 'ff6b35', // Orange neon
      auto_play: 'false',
      hide_related: 'true',
      show_comments: 'false',
      show_user: 'true',
      show_reposts: 'false',
      show_teaser: 'false',
      visual: useMinimal ? 'false' : 'true',
      show_artwork: 'true',
      show_playcount: 'false',
      sharing: 'true',
      download: 'false',
      buying: 'false'
    });
    
    return `${baseUrl}?${params.toString()}`;
  };

  const handlePlayClick = () => {
    setShowPlayer(true);
    setTimeout(() => setIsLoaded(true), 100);
  };

  if (!url) {
    return (
      <div className="soundcloud-placeholder">
        <div className="placeholder-content">
          <div className="soundcloud-icon">🎵</div>
          <p>Lien SoundCloud bientôt disponible</p>
          <span className="placeholder-info">{title} - {artist}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="soundcloud-player-container">
      {!showPlayer ? (
        <div className="soundcloud-preview" onClick={handlePlayClick}>
          <div className="preview-overlay">
            <div className="play-button-large">
              <div className="play-icon">▶️</div>
            </div>
            <div className="track-info-overlay">
              <h4>{title}</h4>
              <p>{artist}</p>
              <span className="soundcloud-badge">🎵 SoundCloud</span>
            </div>
          </div>
          <div className="preview-background">
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
          </div>
        </div>
      ) : (
        <div className={`soundcloud-embed ${isLoaded ? 'loaded' : ''}`}>
          <iframe
            width="100%"
            height={minimal ? "166" : "300"}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={getSoundCloudEmbedUrl(url, minimal)}
            onLoad={() => setIsLoaded(true)}
            title={`${title} by ${artist} on SoundCloud`}
          />
          {!isLoaded && (
            <div className="embed-loading">
              <div className="loading-spinner"></div>
              <p>Chargement du lecteur SoundCloud...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SoundCloudPlayer;