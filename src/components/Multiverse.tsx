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
    id: 'karaoke-mood',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING",
    style: "Karaoké",
    description: "Version instrumentale parfaite pour vos sessions karaoké - chantez votre cœur",
    cover: "/assets/images/choose-your-mood.png",
    audioFile: "/assets/audio/road-we-travel-karaoke.wav", 
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel-karaoke",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF1493, #8B008B, #4B0082)",
    styleIcon: "🎤"
  },
  {
    id: 'lounge-mood',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING", 
    style: "Lounge",
    description: "Ambiance douce et sophistiquée pour vos soirées détente",
    cover: "/assets/images/choose-your-mood.png",
    audioFile: "/assets/audio/road-we-travel-lounge.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel-lounge",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
    styleIcon: "🍷"
  },
  {
    id: 'dance-mood',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING",
    style: "Dance",
    description: "Remix électronisant qui vous fera danser toute la nuit",
    cover: "/assets/images/choose-your-mood.png",
    audioFile: "/assets/audio/road-we-travel-dance.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel-dance",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF6B35, #FF8C42, #FFA07A)",
    styleIcon: "💃"
  },
  {
    id: 'rock-mood',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING",
    style: "Rock",
    description: "Version puissante et énergique pour la route et l'aventure",
    cover: "/assets/images/choose-your-mood.png",
    audioFile: "/assets/audio/road-we-travel-rock.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel-rock",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #FF4500, #DC143C, #B22222)",
    styleIcon: "🎸"
  },
  {
    id: 'cinematic-mood',
    title: "ROADS WE TRAVEL",
    artist: "MASON STERLING",
    style: "Cinématique", 
    description: "Arrangement orchestral épique digne des plus grands films",
    cover: "/assets/images/choose-your-mood.png",
    audioFile: "/assets/audio/road-we-travel-cinematic.wav",
    soundcloudUrl: "https://soundcloud.com/masonsterling/roads-we-travel-cinematic",
    isAvailable: true,
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe, #667eea)",
    styleIcon: "🎭"
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
          <div className="multiverse-logo">
            <img 
              src="/assets/images/multiverse-audio-logo.png" 
              alt="Multiverse Audio Logo"
              className="logo-image"
            />
          </div>
          <div className="section-brand">
            <div className="section-tagline">
              <span className="artist-name">MASON STERLING</span>
              <span className="presents">PRESENTS</span>
            </div>
            <h2 className="section-title">ROADS WE TRAVEL</h2>
          </div>
          <p className="section-subtitle">
            Une chanson. Cinq univers émotionnels.<br/>
            <strong>Choisissez votre ambiance et vivez la musique autrement.</strong>
          </p>
          <div className="mood-selector">
            <img 
              src="/assets/images/choose-your-mood.png" 
              alt="Choose Your Mood - 5 Musical Universes"
              className="choose-mood-image"
            />
          </div>
        </div>
        
        <div className="multiverse-grid">
          {multiverseTracks.map((track) => (
            <MultiverseTrackCard key={track.id} track={track} />
          ))}
        </div>

        <div className="media-links">
          <h3>MASON STERLING × MULTIVERSE AUDIO</h3>
          <p className="media-subtitle">Retrouvez l'univers musical complet sur toutes les plateformes</p>
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