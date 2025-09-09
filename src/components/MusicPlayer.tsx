import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  audioUrl: string;
  coverUrl: string;
  soundcloudUrl?: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const tracks: Track[] = [
    {
      id: 1,
      title: "Neon Love",
      artist: "Mason Sterling",
      duration: "3:42",
      audioUrl: "/assets/audio/neon-love.wav",
      coverUrl: "/assets/images/book-cover.jpg",
      soundcloudUrl: "https://soundcloud.com/mason-sterling/neon-love"
    },
    {
      id: 2,
      title: "Endless Journey",
      artist: "Mason Sterling",
      duration: "4:15",
      audioUrl: "/assets/audio/endless-journey.wav",
      coverUrl: "/assets/images/book-cover.jpg",
      soundcloudUrl: "https://soundcloud.com/mason-sterling/endless-journey"
    },
    {
      id: 3,
      title: "Roads We Travel",
      artist: "Mason Sterling",
      duration: "3:58",
      audioUrl: "/assets/audio/road-we-travel.wav",
      coverUrl: "/assets/images/book-cover.jpg",
      soundcloudUrl: "https://soundcloud.com/mason-sterling/roads-we-travel"
    }
  ];
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleNext);
    
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentTrack]);
  
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
    setProgress(0);
  };
  
  const handlePrevious = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
    setProgress(0);
  };
  
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    audio.currentTime = (newProgress / 100) * audio.duration;
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
  };
  
  const handleTrackSelect = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
    setProgress(0);
  };
  
  return (
    <section id="music" className="music-player-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-gradient">Love's Journey</span> EP
          </h2>
          <p className="section-subtitle">
            Experience the fusion of futuristic country and emotional storytelling
          </p>
        </div>
        
        <div className="music-player-container">
          <div className="player-main">
            <div className="player-artwork">
              <div className="artwork-container">
                <img 
                  src={tracks[currentTrack].coverUrl} 
                  alt={tracks[currentTrack].title}
                  className={`artwork ${isPlaying ? 'playing' : ''}`}
                />
                <div className="artwork-overlay">
                  <button 
                    className="play-overlay-btn"
                    onClick={handlePlayPause}
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="player-info">
              <div className="track-info">
                <h3 className="track-title">{tracks[currentTrack].title}</h3>
                <p className="track-artist">{tracks[currentTrack].artist}</p>
              </div>
              
              <div className="player-progress">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="progress-bar"
                />
                <div className="time-display">
                  <span className="time-current">
                    {Math.floor((progress / 100) * 240)}s
                  </span>
                  <span className="time-total">{tracks[currentTrack].duration}</span>
                </div>
              </div>
              
              <div className="player-controls">
                <button 
                  className="control-btn"
                  onClick={handlePrevious}
                >
                  ⏮
                </button>
                <button 
                  className="control-btn control-play"
                  onClick={handlePlayPause}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button 
                  className="control-btn"
                  onClick={handleNext}
                >
                  ⏭
                </button>
                <div className="volume-control">
                  <button 
                    className="control-btn volume-btn"
                    onClick={() => setShowVolume(!showVolume)}
                  >
                    🔊
                  </button>
                  {showVolume && (
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="volume-slider"
                    />
                  )}
                </div>
              </div>
              
              <div className="streaming-links">
                <a 
                  href={tracks[currentTrack].soundcloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streaming-btn soundcloud"
                >
                  <span className="streaming-icon">☁️</span>
                  SoundCloud
                </a>
                <a 
                  href="#"
                  className="streaming-btn spotify"
                >
                  <span className="streaming-icon">🎵</span>
                  Spotify
                </a>
                <a 
                  href="#"
                  className="streaming-btn apple"
                >
                  <span className="streaming-icon">🍎</span>
                  Apple Music
                </a>
              </div>
            </div>
          </div>
          
          <div className="playlist-container">
            <h4 className="playlist-title">Tracklist</h4>
            <div className="playlist">
              {tracks.map((track, index) => (
                <div
                  key={track.id}
                  className={`playlist-item ${index === currentTrack ? 'active' : ''}`}
                  onClick={() => handleTrackSelect(index)}
                >
                  <div className="playlist-item-number">
                    {index === currentTrack && isPlaying ? '▶' : index + 1}
                  </div>
                  <div className="playlist-item-info">
                    <div className="playlist-item-title">{track.title}</div>
                    <div className="playlist-item-duration">{track.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <audio
          ref={audioRef}
          src={tracks[currentTrack].audioUrl}
          preload="metadata"
        />
      </div>
    </section>
  );
};

export default MusicPlayer;