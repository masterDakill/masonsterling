import React, { useState, useRef } from 'react';
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
    id: 'endless-journey',
    title: "ENDLESS JOURNEY",
    artist: "MASON STERLING",
    style: "Acoustique Folk",
    description: "Un voyage musical introspectif avec des guitares acoustiques et des mélodies émotionnelles",
    cover: "/assets/images/albums/endless-journey.jpg",
    audioFile: "/assets/audio/endless-journey.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/endless-journey",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF9A9E, #FECFEF, #FECFEF)",
    styleIcon: "🎸"
  },
  {
    id: 'road-we-travel',
    title: "ROAD WE TRAVEL",
    artist: "MASON STERLING", 
    style: "Country Rock",
    description: "Une fusion énergique de country et rock avec des rythmes entraînants",
    cover: "/assets/images/albums/road-we-travel.jpg",
    audioFile: "/assets/audio/road-we-travel.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
    styleIcon: "🤠"
  },
  {
    id: 'neon-love',
    title: "NEON LOVE",
    artist: "MASON STERLING",
    style: "Synthwave Pop",
    description: "Sons synthétiques rétro-futuristes avec des beats électroniques captivants",
    cover: "/assets/images/albums/neon-love.jpg",
    audioFile: "/assets/audio/neon-love.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/neon-love",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF6B35, #FF8C42, #FFA07A)",
    styleIcon: "🌆"
  },
  {
    id: 'my-heart-is-open',
    title: "MY HEART IS OPEN",
    artist: "MASON STERLING",
    style: "Karaoké Ballad",
    description: "Ballade émotionnelle parfaite pour les sessions karaoké avec arrangement orchestral",
    cover: "/assets/images/albums/my-heart-is-open.jpg",
    audioFile: "/assets/audio/my-heart-is-open.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/my-heart-is-open",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF6B9D, #C44569, #8B2635)",
    styleIcon: "🎤"
  },
  {
    id: 'stars-above',
    title: "STARS ABOVE",
    artist: "MASON STERLING",
    style: "Ambient Cinématique", 
    description: "Paysages sonores atmosphériques et mélodies contemplatives",
    cover: "/assets/images/albums/stars-above.jpg",
    audioFile: "/assets/audio/stars-above.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/stars-above",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe, #667eea)",
    styleIcon: "✨"
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

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="multiverse-card">
      <div className="track-visual" style={{ background: track.gradient }}>
        <img 
          src={track.cover} 
          alt={track.title}
          className="track-artwork"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement?.querySelector('.track-fallback')?.classList.add('show');
          }}
        />
        <div className="track-fallback">
          <span className="style-icon">{track.styleIcon}</span>
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
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="seek-bar"
            />
          </div>
        </div>
      )}

      <div className="track-actions">
        <button 
          className="soundcloud-btn"
          onClick={() => window.open(track.soundcloudUrl, '_blank')}
        >
          🎵 ÉCOUTER SUR SOUNDCLOUD
        </button>
        <button 
          className="download-btn"
          onClick={() => {
            const link = document.createElement('a');
            link.href = track.audioFile;
            link.download = `${track.title} - ${track.artist}.wav`;
            link.click();
          }}
        >
          ⬇️ TÉLÉCHARGER
        </button>
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
          <h2 className="section-title">MULTIVERSE MUSICAL</h2>
          <p className="section-subtitle">
            Explorez différents univers musicaux - Du folk acoustique au synthwave, 
            chaque chanson vous transporte dans un style unique
          </p>
        </div>
        
        <div className="multiverse-grid">
          {multiverseTracks.map((track) => (
            <MultiverseTrackCard key={track.id} track={track} />
          ))}
        </div>

        <div className="media-links">
          <h3>RETROUVEZ-MOI SUR</h3>
          <div className="social-links">
            <a href="#" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://soundcloud.com/masonsterling" className="social-link soundcloud" target="_blank" rel="noopener noreferrer">
              🎵 SoundCloud
            </a>
            <a href="#" className="social-link spotify" target="_blank" rel="noopener noreferrer">
              🟢 Spotify
            </a>
            <a href="#" className="social-link instagram" target="_blank" rel="noopener noreferrer">
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multiverse;