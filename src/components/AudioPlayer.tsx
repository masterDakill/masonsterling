import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

interface AudioPlayerProps {
  src: string;
  title: string;
  artist: string;
  cover?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  title,
  artist,
  cover,
  onPlay,
  onPause
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [src]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      onPause?.();
    } else {
      audio.play();
      onPlay?.();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value) / 100;
    
    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
      
      <div className="player-info">
        {cover && (
          <div className="player-cover">
            <img src={cover} alt={`${title} cover`} />
          </div>
        )}
        <div className="player-details">
          <h4 className="player-title">{title}</h4>
          <p className="player-artist">{artist}</p>
        </div>
      </div>

      <div className="player-controls">
        <button
          className={`play-btn ${isPlaying ? 'playing' : ''} ${isLoading ? 'loading' : ''}`}
          onClick={togglePlayPause}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loading-spinner"></div>
          ) : isPlaying ? (
            '⏸️'
          ) : (
            '▶️'
          )}
        </button>

        <div className="time-display">
          <span>{formatTime(currentTime)}</span>
        </div>

        <div className="progress-container">
          <input
            type="range"
            className="progress-bar"
            min="0"
            max="100"
            value={progressPercent}
            onChange={handleSeek}
            style={{
              background: `linear-gradient(to right, #FF8C00 0%, #FF8C00 ${progressPercent}%, rgba(255,255,255,0.3) ${progressPercent}%, rgba(255,255,255,0.3) 100%)`
            }}
          />
        </div>

        <div className="time-display">
          <span>{formatTime(duration)}</span>
        </div>

        <div className="volume-container">
          <span className="volume-icon">🔊</span>
          <input
            type="range"
            className="volume-bar"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
          />
        </div>
      </div>

      <div className="audio-visualizer">
        <div className="visualizer-bar" style={{ '--delay': '0.1s' } as React.CSSProperties}></div>
        <div className="visualizer-bar" style={{ '--delay': '0.2s' } as React.CSSProperties}></div>
        <div className="visualizer-bar" style={{ '--delay': '0.3s' } as React.CSSProperties}></div>
        <div className="visualizer-bar" style={{ '--delay': '0.4s' } as React.CSSProperties}></div>
        <div className="visualizer-bar" style={{ '--delay': '0.5s' } as React.CSSProperties}></div>
      </div>
    </div>
  );
};

export default AudioPlayer;