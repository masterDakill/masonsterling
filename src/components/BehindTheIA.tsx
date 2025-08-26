import React, { useState, useEffect } from 'react';
import './BehindTheIA.css';

interface StoryPhase {
  id: string;
  title: string;
  period: string;
  description: string;
  mood: string;
  color: string;
  image: string;
  tracks: string[];
  aiInspiration: string;
}

const storyPhases: StoryPhase[] = [
  {
    id: 'loves-journey',
    title: "Love's Journey",
    period: "Genèse - 2024",
    description: "L'aventure musicale de Mason Sterling commence par une exploration profonde de l'amour sous toutes ses formes. Cet EP de 5 titres navigue entre folk acoustique et ballades émotionnelles, créant un paysage sonore intimiste et chaleureux.",
    mood: "Acoustique & Émotionnel",
    color: "linear-gradient(135deg, #8B4F91, #B565A7, #D4A5C7)",
    image: "/assets/images/choose-your-mood.png",
    tracks: [
      "My Heart is Open - Vulnérabilité et ouverture",
      "The Road We Travel - Voyage intérieur", 
      "Stars Above - Guidance céleste",
      "Endless Journey - Quête infinie",
      "Neon Love - Transition vers l'électronique"
    ],
    aiInspiration: "L'IA a analysé les patterns émotionnels universels de l'amour pour créer une progression musicale naturelle du folk vers l'électronique."
  },
  {
    id: 'transition',
    title: "La Transformation",
    period: "Évolution - 2024",
    description: "Entre Love's Journey et les singles actuels, Mason Sterling découvre l'univers synthwave. Cette transition marque un tournant artistique majeur, fusionnant l'émotion brute du folk avec l'énergie cosmique de l'électronique néon.",
    mood: "Fusion & Expérimentation",
    color: "linear-gradient(135deg, #FF6B35, #8A2BE2, #4FACFE)",
    image: "/assets/images/multiverse-audio-logo.png",
    tracks: [
      "Expérimentations sonores synthwave",
      "Fusion folk-électronique",
      "Développement de l'identité néon",
      "Exploration de nouveaux horizons"
    ],
    aiInspiration: "L'IA a identifié les connexions émotionnelles entre le folk intimiste et le synthwave épique, créant des ponts harmoniques inattendus."
  },
  {
    id: 'current-era',
    title: "Ère Actuelle",
    period: "Singles - 2024/2025",
    description: "Aujourd'hui, Mason Sterling maîtrise parfaitement cette dualité artistique. 'Drawn to the Unknown' et 'More than my name (For Samantha)' représentent l'aboutissement de cette évolution, alliant maturité émotionnelle et innovation sonore.",
    mood: "Synthwave & Narratif",
    color: "linear-gradient(135deg, #0B1426, #FF6B35, #1a237e)",
    image: "/assets/images/multiverse-audio-logo.png",
    tracks: [
      "Drawn to the Unknown - Exploration cosmique",
      "More than my name (For Samantha) - Dédicace personnelle",
      "Projets futurs en développement"
    ],
    aiInspiration: "L'IA continue d'analyser les réactions émotionnelles aux compositions pour affiner l'équilibre parfait entre innovation et émotion authentique."
  }
];

const BehindTheIA: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % storyPhases.length);
    }, 8000); // Change toutes les 8 secondes

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

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

        {/* Timeline Navigation */}
        <div className="timeline-navigation">
          <div className="timeline-line">
            <div 
              className="timeline-progress"
              style={{ 
                width: `${((activePhase + 1) / storyPhases.length) * 100}%` 
              }}
            ></div>
          </div>
          
          {storyPhases.map((phase, index) => (
            <button
              key={phase.id}
              className={`timeline-dot ${activePhase === index ? 'active' : ''}`}
              onClick={() => handlePhaseClick(index)}
              style={{ left: `${(index / (storyPhases.length - 1)) * 100}%` }}
            >
              <span className="dot-number">{index + 1}</span>
              <div className="dot-label">
                <strong>{phase.title}</strong>
                <span className="dot-period">{phase.period}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Story Content */}
        <div className="story-content">
          <div 
            className="story-background"
            style={{ background: storyPhases[activePhase].color }}
          ></div>

          <div className="story-main">
            <div className="story-visual">
              <div className="image-container">
                <img 
                  src={storyPhases[activePhase].image}
                  alt={storyPhases[activePhase].title}
                  className="story-image"
                />
                <div className="image-overlay">
                  <div className="mood-indicator">
                    <span className="mood-icon">🎭</span>
                    <span className="mood-text">{storyPhases[activePhase].mood}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-text">
              <div className="story-header">
                <h3 className="story-title">{storyPhases[activePhase].title}</h3>
                <span className="story-period">{storyPhases[activePhase].period}</span>
              </div>

              <p className="story-description">
                {storyPhases[activePhase].description}
              </p>

              <div className="tracks-list">
                <h4>Éléments clés :</h4>
                <ul>
                  {storyPhases[activePhase].tracks.map((track, index) => (
                    <li key={index} className="track-item">
                      <span className="track-bullet">♪</span>
                      {track}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ai-insight">
                <div className="ai-icon">🤖</div>
                <div className="ai-content">
                  <h5>Insight IA :</h5>
                  <p>{storyPhases[activePhase].aiInspiration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="story-controls">
          <button className="nav-btn prev" onClick={() => handlePhaseClick(Math.max(0, activePhase - 1))}>
            <span>◀</span>
            <span>Précédent</span>
          </button>

          <button className="autoplay-btn" onClick={toggleAutoPlay}>
            {isAutoPlaying ? (
              <>
                <span>⏸️</span>
                <span>Pause Auto</span>
              </>
            ) : (
              <>
                <span>▶️</span>
                <span>Auto Play</span>
              </>
            )}
          </button>

          <button className="nav-btn next" onClick={() => handlePhaseClick(Math.min(storyPhases.length - 1, activePhase + 1))}>
            <span>Suivant</span>
            <span>▶</span>
          </button>
        </div>

        {/* Future Vision */}
        <div className="future-vision">
          <h3>Vers l'Horizon Néon 🌌</h3>
          <p>
            L'aventure Mason Sterling continue d'évoluer. L'IA analyse constamment 
            les réactions émotionnelles pour créer la prochaine génération de musique 
            synthwave narrative, où chaque note raconte une histoire, chaque beat 
            guide une émotion.
          </p>
          <div className="future-stats">
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilités Créatives</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Univers Musicaux</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Émotion Humaine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheIA;