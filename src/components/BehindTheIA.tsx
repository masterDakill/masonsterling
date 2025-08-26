import React from 'react';
import './BehindTheIA.css';

const BehindTheIA: React.FC = () => {
  return (
    <section id="behind-the-ia" className="behind-the-ia">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">BEHIND THE IA</h2>
          <p className="section-subtitle">
            Découvrez l'évolution artistique de Mason Sterling, de Love's Journey aux horizons néon,<br/>
            guidée par l'intelligence artificielle et l'émotion humaine
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
                <h3 className="story-title">Ère Actuelle</h3>
                <span className="story-period">Singles - 2024/2025</span>
              </div>

              <p className="story-description">
                Aujourd'hui, Mason Sterling maîtrise parfaitement cette dualité artistique. 
                'Drawn to the Unknown' et 'More than my name (For Samantha)' représentent 
                l'aboutissement de cette évolution, alliant maturité émotionnelle et innovation sonore.
              </p>

              <div className="tracks-list">
                <h4>Éléments clés :</h4>
                <ul>
                  <li className="track-item">
                    <span className="track-bullet">♪</span>
                    Drawn to the Unknown - Exploration cosmique
                  </li>
                  <li className="track-item">
                    <span className="track-bullet">♪</span>
                    More than my name (For Samantha) - Dédicace personnelle
                  </li>
                  <li className="track-item">
                    <span className="track-bullet">♪</span>
                    Projets futurs en développement
                  </li>
                </ul>
              </div>

              <div className="ai-insight">
                <div className="ai-icon">🤖</div>
                <div className="ai-content">
                  <h5>Insight IA :</h5>
                  <p>L'IA continue d'analyser les réactions émotionnelles aux compositions pour affiner l'équilibre parfait entre innovation et émotion authentique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="future-vision">
          <h3>Vers l'Horizon Néon 🌌</h3>
          <p>
            L'aventure Mason Sterling continue d'évoluer. L'IA analyse constamment 
            les réactions émotionnelles pour créer la prochaine génération de musique 
            synthwave narrative, où chaque note raconte une histoire, chaque beat 
            guide une émotion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BehindTheIA;