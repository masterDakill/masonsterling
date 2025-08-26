import React, { useState } from 'react';
import './LyricsVisualized.css';

const LyricsVisualized: React.FC = () => {
  const [selectedSong] = useState("Drawn to the Unknown");

  const lyrics = [
    "Dans l'obscurité, je marche seul",
    "Vers l'inconnu qui m'appelle", 
    "Les étoiles guident mes pas",
    "Vers un horizon mystérieux",
    "Drawn to the unknown",
    "I feel the pull inside",
    "Nothing to lose, everything to find",
    "In this cosmic ride"
  ];

  return (
    <section id="lyrics-visualized" className="lyrics-visualized">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">LYRICS VISUALISÉES</h2>
          <p className="section-subtitle">
            Plongez dans l'univers poétique de Mason Sterling avec des paroles animées et émotionnelles
          </p>
        </div>

        <div className="lyrics-container">
          <div className="lyrics-header">
            <h3 className="current-song-title">{selectedSong}</h3>
            <div className="play-lyrics-btn">
              <span className="btn-icon">🎵</span>
              <span>MASON STERLING</span>
            </div>
          </div>

          <div className="lyrics-display">
            {lyrics.map((line, index) => (
              <div key={index} className="lyrics-line emotion-hopeful">
                <span className="line-number">{index + 1}</span>
                <span className="line-text">{line}</span>
                <div className="emotion-indicator">
                  <span className="emotion-dot"></span>
                  <span className="emotion-label">hopeful</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LyricsVisualized;