import React, { useState, useEffect } from 'react';
import './LyricsVisualized.css';

interface LyricsLine {
  id: string;
  text: string;
  timestamp: number;
  emotion: 'calm' | 'intense' | 'melancholic' | 'hopeful' | 'energetic';
}

interface Song {
  id: string;
  title: string;
  artist: string;
  lyrics: LyricsLine[];
}

const songLyrics: Song[] = [
  {
    id: 'drawn-to-unknown',
    title: "Drawn to the Unknown",
    artist: "Mason Sterling",
    lyrics: [
      { id: '1', text: "Dans l'obscurité, je marche seul", timestamp: 0, emotion: 'melancholic' },
      { id: '2', text: "Vers l'inconnu qui m'appelle", timestamp: 3000, emotion: 'hopeful' },
      { id: '3', text: "Les étoiles guident mes pas", timestamp: 6000, emotion: 'calm' },
      { id: '4', text: "Vers un horizon mystérieux", timestamp: 9000, emotion: 'intense' },
      { id: '5', text: "Drawn to the unknown", timestamp: 12000, emotion: 'energetic' },
      { id: '6', text: "I feel the pull inside", timestamp: 15000, emotion: 'intense' },
      { id: '7', text: "Nothing to lose, everything to find", timestamp: 18000, emotion: 'hopeful' },
      { id: '8', text: "In this cosmic ride", timestamp: 21000, emotion: 'energetic' }
    ]
  },
  {
    id: 'more-than-my-name',
    title: "More than my name (For Samantha)",
    artist: "Mason Sterling",
    lyrics: [
      { id: '1', text: "Samantha, tu es plus que mon nom", timestamp: 0, emotion: 'calm' },
      { id: '2', text: "Dans ton sourire, je trouve ma maison", timestamp: 4000, emotion: 'hopeful' },
      { id: '3', text: "Chaque battement de cœur résonne", timestamp: 8000, emotion: 'intense' },
      { id: '4', text: "Comme une mélodie qui pardonne", timestamp: 12000, emotion: 'melancholic' },
      { id: '5', text: "You're more than my name", timestamp: 16000, emotion: 'energetic' },
      { id: '6', text: "You're the reason I believe", timestamp: 20000, emotion: 'hopeful' },
      { id: '7', text: "In love that breaks the chains", timestamp: 24000, emotion: 'intense' },
      { id: '8', text: "And gives me strength to breathe", timestamp: 28000, emotion: 'calm' }
    ]
  }
];

const LyricsVisualized: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<Song>(songLyrics[0]);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [animatingLines, setAnimatingLines] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        const nextLine = prev + 1;
        if (nextLine >= selectedSong.lyrics.length) {
          setIsPlaying(false);
          return 0;
        }
        
        // Animer la ligne actuelle
        setAnimatingLines((prev) => new Set([...prev, selectedSong.lyrics[nextLine].id]));
        
        // Retirer l'animation après un délai
        setTimeout(() => {
          setAnimatingLines((prev) => {
            const newSet = new Set(prev);
            newSet.delete(selectedSong.lyrics[nextLine].id);
            return newSet;
          });
        }, 2000);

        return nextLine;
      });
    }, 3000); // 3 secondes par ligne

    return () => clearInterval(interval);
  }, [isPlaying, selectedSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentLine(0);
      setIsPlaying(true);
      setAnimatingLines(new Set([selectedSong.lyrics[0].id]));
    }
  };

  const getEmotionClass = (emotion: string): string => {
    switch (emotion) {
      case 'calm': return 'emotion-calm';
      case 'intense': return 'emotion-intense';
      case 'melancholic': return 'emotion-melancholic';
      case 'hopeful': return 'emotion-hopeful';
      case 'energetic': return 'emotion-energetic';
      default: return 'emotion-calm';
    }
  };

  return (
    <section id="lyrics-visualized" className="lyrics-visualized">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">LYRICS VISUALISÉES</h2>
          <p className="section-subtitle">
            Plongez dans l'univers poétique de Mason Sterling avec des paroles animées et émotionnelles
          </p>
        </div>

        {/* Sélecteur de chanson */}
        <div className="song-selector">
          {songLyrics.map((song) => (
            <button
              key={song.id}
              className={`song-tab ${selectedSong.id === song.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedSong(song);
                setCurrentLine(0);
                setIsPlaying(false);
                setAnimatingLines(new Set());
              }}
            >
              <span className="song-icon">🎵</span>
              <div className="song-info">
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Visualiseur de paroles */}
        <div className="lyrics-container">
          <div className="lyrics-header">
            <h3 className="current-song-title">{selectedSong.title}</h3>
            <button className="play-lyrics-btn" onClick={handlePlayPause}>
              {isPlaying ? (
                <>
                  <span className="btn-icon">⏸️</span>
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <span className="btn-icon">▶️</span>
                  <span>VISUALISER</span>
                </>
              )}
            </button>
          </div>

          <div className="lyrics-display">
            {selectedSong.lyrics.map((line, index) => (
              <div
                key={line.id}
                className={`lyrics-line ${getEmotionClass(line.emotion)} ${
                  index === currentLine ? 'current' : ''
                } ${index < currentLine ? 'past' : ''} ${
                  animatingLines.has(line.id) ? 'animating' : ''
                }`}
              >
                <span className="line-number">{index + 1}</span>
                <span className="line-text">{line.text}</span>
                <div className="emotion-indicator">
                  <span className="emotion-dot"></span>
                  <span className="emotion-label">{line.emotion}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Barre de progression */}
          <div className="progress-container">
            <div className="progress-label">
              Ligne {currentLine + 1} sur {selectedSong.lyrics.length}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ 
                  width: `${((currentLine + 1) / selectedSong.lyrics.length) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Légende des émotions */}
        <div className="emotions-legend">
          <h4>Palette Émotionnelle</h4>
          <div className="emotions-grid">
            <div className="emotion-item emotion-calm">
              <span className="emotion-dot"></span>
              <span>Calme & Sérénité</span>
            </div>
            <div className="emotion-item emotion-intense">
              <span className="emotion-dot"></span>
              <span>Intensité & Passion</span>
            </div>
            <div className="emotion-item emotion-melancholic">
              <span className="emotion-dot"></span>
              <span>Mélancolie & Nostalgie</span>
            </div>
            <div className="emotion-item emotion-hopeful">
              <span className="emotion-dot"></span>
              <span>Espoir & Optimisme</span>
            </div>
            <div className="emotion-item emotion-energetic">
              <span className="emotion-dot"></span>
              <span>Énergie & Dynamisme</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LyricsVisualized;