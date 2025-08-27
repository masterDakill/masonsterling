import { useState, useRef } from 'react';
import './Multiverse.css';

interface MultiverseTrack {
  id: string;
  title: string;
  artist: string;
  style: string;
  description: string;
  cover: string;
  audioFile: string;
  soundcloudUrl: string;
  isAvailable: boolean;
  gradient: string;
  styleIcon: string;
}

const multiverseTracks: MultiverseTrack[] = [
  {
    id: 'drawn-to-unknown',
    title: "DRAWN TO THE UNKNOWN",
    artist: "MASON STERLING", 
    style: "Single",
    description: "Le premier single de Mason Sterling - Une exploration sonore de l'inconnu avec des mélodies captivantes",
    cover: "/assets/images/authentic/desert-highway-banner.png",
    audioFile: "/assets/audio/drawn-to-the-unknown.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/drawn-to-the-unknown",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF8C00, #FFA500, #FFD700)",
    styleIcon: "🌌"
  },
  {
    id: 'neon-love',
    title: "NEON LOVE",
    artist: "MASON STERLING",
    style: "Single - Love's Journey EP", 
    description: "Un titre vibrant aux couleurs néon - Une exploration de l'amour moderne dans un monde électronique",
    cover: "/assets/images/authentic/neon-love-cover.png",
    audioFile: "/assets/audio/authentic/neon-love.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/neon-love",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF6B9D, #C44569, #8B2635)", 
    styleIcon: "💖"
  },
  {
    id: 'road-we-travel',
    title: "ROAD WE TRAVEL",
    artist: "MASON STERLING",
    style: "Single - Love's Journey EP",
    description: "Un voyage musical sur les routes de l'amour - Des mélodies envoûtantes pour un roadtrip émotionnel",
    cover: "/assets/images/authentic/road-we-travel-cover.png",
    audioFile: "/assets/audio/authentic/road-we-travel.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/road-we-travel",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF8C00, #FF7043, #FF5722)",
    styleIcon: "🛣️"
  },
  {
    id: 'star-above',
    title: "STARS ABOVE",
    artist: "MASON STERLING",
    style: "Single - Love's Journey EP",
    description: "Sous un ciel étoilé - Une ballade romantique qui élève l'âme vers les étoiles",
    cover: "/assets/images/authentic/sunset-motorcycle-banner.png",
    audioFile: "/assets/audio/authentic/star-above.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/stars-above",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #4A90E2, #7B68EE, #9370DB)",
    styleIcon: "⭐"
  },
  {
    id: 'more-than-my-name',
    title: "MORE THAN MY NAME",
    artist: "MASON STERLING",
    style: "Single (For Samantha)", 
    description: "Un titre personnel et émotionnel dédié à Samantha - Une ballade touchante sur l'identité et l'amour",
    cover: "/assets/images/authentic/mason-headshot-2.png",
    audioFile: "/assets/audio/more-than-my-name-for-samantha.wav",
    soundcloudUrl: "https://on.soundcloud.com/2EJrQkb3FySBQeyCEf",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF6B9D, #C44569, #8B2635)", 
    styleIcon: "💝"
  }
];

const MultiverseTrackCard = ({ track }: { track: MultiverseTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowPlayer(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="multiverse-card">
      <div className="track-visual" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${track.cover}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="track-fallback show">
          <span className="style-icon">{track.styleIcon}</span>
          <div className="track-title-overlay">{track.title}</div>
        </div>
        
        <div className="track-overlay">
          <button 
            className={`play-button ${isPlaying ? 'playing' : ''}`}
            onClick={handlePlay}
            disabled={!track.isAvailable}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>

      <div className="track-info">
        <div className="track-style">{track.style}</div>
        <h3 className="track-title">{track.title}</h3>
        <p className="track-artist">{track.artist}</p>
        <p className="track-description">{track.description}</p>
      </div>

      {showPlayer && (
        <div className="audio-player">
          <div className="player-controls">
            <div className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      )}

      <div className="track-actions">
        {track.isAvailable ? (
          <>
            {track.soundcloudUrl ? (
              <button 
                className="soundcloud-btn"
                onClick={() => window.open(track.soundcloudUrl, '_blank')}
              >
                🎵 ÉCOUTER SUR SOUNDCLOUD
              </button>
            ) : (
              <button 
                className="soundcloud-btn disabled"
                disabled
              >
                🎵 LIEN SOUNDCLOUD BIENTÔT
              </button>
            )}
          </>
        ) : (
          <div className="coming-soon-actions">
            <button className="coming-soon-btn" disabled>
              🎵 BIENTÔT DISPONIBLE
            </button>
            <p className="release-info">EP Love's Journey arrive prochainement</p>
          </div>
        )}
      </div>

      <audio
        ref={audioRef}
        src={track.audioFile}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  );
};

const Multiverse = () => {
  return (
    <section id="multiverse" className="multiverse">
      <div className="container">
        <div className="section-header">
          <div className="multiverse-logo">
            <div className="logo-placeholder">
              🎵 MULTIVERSE AUDIO
            </div>
          </div>
          <div className="section-brand">
            <div className="section-tagline">
              <span className="artist-name">MASON STERLING</span>
              <span className="presents">DISCOGRAPHIE OFFICIELLE</span>
            </div>
            <h2 className="section-title">SINGLES & EP</h2>
          </div>
          <p className="section-subtitle">
            Découvrez l'univers musical complet de Mason Sterling.<br/>
            <strong>Des singles touchants à l'EP "Love's Journey" - Une exploration de l'amour et de l'émotion.</strong>
          </p>
        </div>
        
        <div className="multiverse-grid">
          {multiverseTracks.map((track) => (
            <MultiverseTrackCard key={track.id} track={track} />
          ))}
        </div>

        <div className="media-links">
          <h3>MASON STERLING × MULTIVERSE AUDIO</h3>
          <p className="media-subtitle">❤️ Singing about love & healing, one verse at a time! 🎶✨</p>
          <div className="social-links">
            <a href="https://youtube.com/playlist?list=PL_2ylY9_71_tyc69170HmzFItt72LoVzs&si=yk7OeAG0oIl33oGO" className="social-link youtube-playlist" target="_blank" rel="noopener noreferrer">
              🎵 Drawn to the Unknown - Playlist
            </a>
            <a href="https://www.youtube.com/@MasonSterling-r3p" className="social-link youtube" target="_blank" rel="noopener noreferrer">
              📺 YouTube
            </a>
            <a href="https://soundcloud.com/masonsterling" className="social-link soundcloud" target="_blank" rel="noopener noreferrer">
              🎵 SoundCloud  
            </a>
            <a href="http://www.tiktok.com/@mason_sterling" className="social-link tiktok" target="_blank" rel="noopener noreferrer">
              🎬 TikTok
            </a>
            <a href="https://www.instagram.com/mason683847" className="social-link instagram" target="_blank" rel="noopener noreferrer">
              📸 Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578043131723" className="social-link facebook" target="_blank" rel="noopener noreferrer">
              👥 Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multiverse;