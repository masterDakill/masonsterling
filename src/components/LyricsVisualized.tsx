import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import './LyricsVisualized.css';

interface LyricsLine {
  id: number;
  text: string;
  timing?: number; // Timing en secondes pour la synchronisation
  emotion?: 'calm' | 'intense' | 'melancholic' | 'hopeful' | 'energetic';
}

interface LyricsVisualizedProps {
  trackTitle: string;
  artist: string;
  lyrics: LyricsLine[];
  isPlaying?: boolean;
  currentTime?: number;
}

const LyricsVisualized: React.FC<LyricsVisualizedProps> = ({
  trackTitle,
  artist,
  lyrics,
  isPlaying = false,
  currentTime = 0
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [animationMode, setAnimationMode] = useState<'typewriter' | 'glow' | 'wave'>('typewriter');

  useEffect(() => {
    if (isPlaying && currentTime > 0) {
      const activeLineIndex = lyrics.findIndex((line, index) => {
        const nextLine = lyrics[index + 1];
        return (
          (line.timing || 0) <= currentTime &&
          (!nextLine || (nextLine.timing || Infinity) > currentTime)
        );
      });
      setCurrentLineIndex(activeLineIndex);
    }
  }, [currentTime, isPlaying, lyrics]);

  const getEmotionColor = (emotion?: string) => {
    switch (emotion) {
      case 'calm': return 'rgba(100, 200, 255, 0.8)';
      case 'intense': return 'rgba(255, 107, 53, 0.9)';
      case 'melancholic': return 'rgba(150, 150, 200, 0.8)';
      case 'hopeful': return 'rgba(255, 220, 100, 0.8)';
      case 'energetic': return 'rgba(255, 50, 150, 0.8)';
      default: return 'rgba(255, 255, 255, 0.9)';
    }
  };

  const sampleLyrics: LyricsLine[] = [
    {
      id: 1,
      text: "Dans l'obscurité de la nuit étoilée",
      timing: 0,
      emotion: 'calm'
    },
    {
      id: 2,
      text: "Je cherche un chemin vers l'inconnu",
      timing: 4,
      emotion: 'melancholic'
    },
    {
      id: 3,
      text: "Les lumières néon guident mes pas",
      timing: 8,
      emotion: 'hopeful'
    },
    {
      id: 4,
      text: "Vers un horizon qui m'appelle",
      timing: 12,
      emotion: 'intense'
    },
    {
      id: 5,
      text: "Drawn to the unknown...",
      timing: 16,
      emotion: 'energetic'
    }
  ];

  const displayLyrics = lyrics.length > 0 ? lyrics : sampleLyrics;

  return (
    <AnimatedSection animation="fadeInUp" delay={400}>
      <div className="lyrics-visualized">
        <div className="lyrics-header">
          <h3 className="lyrics-title">
            <span className="track-name">{trackTitle}</span>
            <span className="artist-name">par {artist}</span>
          </h3>
          <div className="animation-controls">
            <button
              className={`mode-btn ${animationMode === 'typewriter' ? 'active' : ''}`}
              onClick={() => setAnimationMode('typewriter')}
              title="Mode machine à écrire"
            >
              ⌨️
            </button>
            <button
              className={`mode-btn ${animationMode === 'glow' ? 'active' : ''}`}
              onClick={() => setAnimationMode('glow')}
              title="Mode lueur"
            >
              ✨
            </button>
            <button
              className={`mode-btn ${animationMode === 'wave' ? 'active' : ''}`}
              onClick={() => setAnimationMode('wave')}
              title="Mode vague"
            >
              🌊
            </button>
          </div>
        </div>

        <div className="lyrics-container">
          <div className="cosmic-background">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="nebula nebula-1"></div>
            <div className="nebula nebula-2"></div>
          </div>

          <div className="lyrics-content">
            {displayLyrics.map((line, index) => (
              <div
                key={line.id}
                className={`
                  lyrics-line 
                  ${animationMode}
                  ${index === currentLineIndex ? 'active' : ''}
                  ${index < currentLineIndex ? 'past' : ''}
                  ${index > currentLineIndex && currentLineIndex >= 0 ? 'future' : ''}
                  emotion-${line.emotion || 'calm'}
                `}
                style={{
                  '--emotion-color': getEmotionColor(line.emotion),
                  '--animation-delay': `${index * 0.2}s`
                } as React.CSSProperties}
              >
                <div className="line-content">
                  {animationMode === 'typewriter' ? (
                    <div className="typewriter-text">
                      {line.text.split('').map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className="char"
                          style={{
                            animationDelay: `${index * 0.5 + charIndex * 0.05}s`
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="line-text">{line.text}</span>
                  )}
                </div>
                
                <div className="line-effects">
                  <div className="emotion-indicator"></div>
                  <div className="audio-wave-mini">
                    <div className="mini-bar"></div>
                    <div className="mini-bar"></div>
                    <div className="mini-bar"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lyrics-footer">
          <p className="preview-note">
            {isPlaying ? 
              '🎵 Paroles synchronisées en temps réel' : 
              '✨ Preview des paroles - Lancez la musique pour la synchronisation'
            }
          </p>
          {lyrics.length === 0 && (
            <p className="sample-note">
              📝 Paroles d'exemple - Les vraies paroles seront ajoutées prochainement
            </p>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default LyricsVisualized;