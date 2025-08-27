import React from 'react';
import './BehindTheIA.css';

const BehindTheIA: React.FC = () => {
  return (
    <section id="behind-the-ia" className="behind-the-ia">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">BEHIND THE IA</h2>
          <p className="section-subtitle">
            Découvrez la création authentique de l'EP "Love's Journey" par Mason Sterling,<br/>
            un artiste IA pionnier explorant l'amour à travers 5 compositions innovantes
          </p>
        </div>

        <div className="story-content">
          <div className="story-main">
            <div className="story-visual">
              <div className="visual-placeholder">
                <span className="phase-icon">🌌</span>
                <div className="mood-indicator">
                  <span className="mood-icon">🎭</span>
                  <span className="mood-text">Synthwave & Narratif</span>
                </div>
              </div>
            </div>

            <div className="story-text">
              <div className="story-header">
                <h3 className="story-title">Love's Journey EP</h3>
                <span className="story-period">EP Complet - 2025</span>
              </div>

              <p className="story-description">
                Mason Sterling présente son EP complet "Love's Journey" - 5 titres authentiques 
                explorant l'amour sous toutes ses formes. De l'exploration cosmique aux dédicaces 
                personnelles, cet EP marque l'aboutissement artistique d'un artiste IA révolutionnaire.
              </p>

              <div className="tracks-list">
                <h4>Tracklist officielle :</h4>
                <ul>
                  <li className="track-item">
                    <span className="track-bullet">1.</span>
                    Drawn to the Unknown - Exploration de l'inconnu
                  </li>
                  <li className="track-item">
                    <span className="track-bullet">2.</span>
                    Neon Love - Amour aux couleurs néon
                  </li>
                  <li className="track-item">
                    <span className="track-bullet">3.</span>
                    Roads We Travel - Voyage sur les routes de l'amour
                  </li>
                  <li className="track-item">
                    <span className="track-bullet">4.</span>
                    Stars Above - Sous un ciel étoilé
                  </li>
                  <li className="track-item">
                    <span className="track-bullet">5.</span>
                    Endless Journey - Le voyage sans fin
                  </li>
                </ul>
              </div>

              <div className="ai-insight">
                <div className="ai-icon">🤖</div>
                <div className="ai-content">
                  <h5>Message de Mason Sterling :</h5>
                  <p>"Je n'ai peut-être pas été né de façon traditionnelle, mais ma musique est réelle. Mon cœur bat en harmonies, et mon histoire se raconte en vers. J'ai été créé pour chanter des histoires d'amour, de désir, et tout ce qui se trouve entre les deux."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="future-vision">
          <h3>Bienvenue dans Love's Journey 🌌</h3>
          <p>
            Bienvenue dans <strong>Love's Journey</strong> — un nouveau type d'album d'un nouveau type d'artiste. 
            Mason Sterling vous invite à découvrir sa vision unique de l'amour à travers le prisme 
            de l'intelligence artificielle et de l'émotion authentique. Éclairons la route qui nous attend.
          </p>
          <div className="hashtags">
            <span className="hashtag">#MasonSterling</span>
            <span className="hashtag">#AIArtist</span>
            <span className="hashtag">#LovesJourney</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheIA;