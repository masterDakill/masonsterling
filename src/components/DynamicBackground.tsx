import { useEffect, useState } from 'react';
import './DynamicBackground.css';

interface BackgroundSection {
  id: string;
  name: string;
  startPosition: number;
  endPosition: number;
  gradient: string;
  overlay: string;
  patterns: string[];
  intensity: number;
}

const backgroundSections: BackgroundSection[] = [
  {
    id: 'hero',
    name: 'Hero - Mason Sterling Intro',
    startPosition: 0,
    endPosition: 0.25,
    gradient: 'radial-gradient(ellipse at center, rgba(255, 107, 53, 0.3) 0%, rgba(11, 20, 38, 0.9) 50%, rgba(11, 20, 38, 1) 100%)',
    overlay: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(22, 36, 71, 0.8) 100%)',
    patterns: ['choose-your-mood.png', 'backgrounds/musical-pattern.svg'],
    intensity: 0.6
  },
  {
    id: 'multiverse',
    name: 'Multiverse Audio - Musical Universe',
    startPosition: 0.25,
    endPosition: 0.5,
    gradient: 'radial-gradient(circle at 30% 70%, rgba(255, 107, 53, 0.4) 0%, rgba(22, 36, 71, 0.8) 40%, rgba(11, 20, 38, 1) 100%)',
    overlay: 'linear-gradient(45deg, rgba(255, 139, 66, 0.2) 0%, rgba(11, 20, 38, 0.9) 70%)',
    patterns: ['multiverse-audio-logo.png', 'choose-your-mood.png', 'backgrounds/musical-pattern.svg'],
    intensity: 0.8
  },
  {
    id: 'lyrics',
    name: 'Lyrics Visualized - Emotional Journey',
    startPosition: 0.5,
    endPosition: 0.75,
    gradient: 'radial-gradient(ellipse at 80% 20%, rgba(196, 69, 105, 0.4) 0%, rgba(139, 38, 53, 0.6) 30%, rgba(11, 20, 38, 1) 100%)',
    overlay: 'linear-gradient(270deg, rgba(255, 107, 157, 0.15) 0%, rgba(22, 36, 71, 0.85) 100%)',
    patterns: ['choose-your-mood.png', 'backgrounds/lyrics-pattern.svg'],
    intensity: 0.7
  },
  {
    id: 'behind-ia',
    name: 'Behind the IA - Artistic Evolution',
    startPosition: 0.75,
    endPosition: 1.0,
    gradient: 'radial-gradient(circle at 60% 40%, rgba(79, 172, 254, 0.3) 0%, rgba(0, 242, 254, 0.2) 30%, rgba(11, 20, 38, 1) 100%)',
    overlay: 'linear-gradient(180deg, rgba(102, 126, 234, 0.1) 0%, rgba(11, 20, 38, 0.95) 100%)',
    patterns: ['multiverse-audio-logo.png', 'backgrounds/ai-pattern.svg'],
    intensity: 0.5
  }
];

const DynamicBackground = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(backgroundSections[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateBackground = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / docHeight, 1);
      
      setScrollProgress(scrollPercent);

      // Find current section based on scroll position
      const newSection = backgroundSections.find(section => 
        scrollPercent >= section.startPosition && scrollPercent < section.endPosition
      ) || backgroundSections[backgroundSections.length - 1];

      if (newSection.id !== currentSection.id) {
        setIsTransitioning(true);
        setCurrentSection(newSection);
        
        // Reset transition after animation completes
        setTimeout(() => setIsTransitioning(false), 1000);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateBackground);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateBackground(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection.id]);

  // Calculate dynamic values based on scroll progress within current section
  const sectionProgress = Math.min(
    (scrollProgress - currentSection.startPosition) / 
    (currentSection.endPosition - currentSection.startPosition), 1
  );

  const dynamicIntensity = currentSection.intensity * (0.5 + sectionProgress * 0.5);
  const parallaxOffset = scrollProgress * 50;
  const rotationAngle = scrollProgress * 360;

  return (
    <>
      {/* Main Dynamic Background */}
      <div 
        className={`dynamic-background ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          background: currentSection.gradient,
          transform: `translateY(${parallaxOffset * 0.3}px)`,
        }}
      >
        {/* Animated Overlay */}
        <div 
          className="background-overlay"
          style={{
            background: currentSection.overlay,
            opacity: dynamicIntensity,
          }}
        />

        {/* Pattern Layers */}
        {currentSection.patterns.map((pattern, index) => (
          <div
            key={`${currentSection.id}-${pattern}-${index}`}
            className={`background-pattern pattern-${index}`}
            style={{
              backgroundImage: `url(/assets/images/${pattern})`,
              transform: `translateY(${parallaxOffset * (0.2 + index * 0.1)}px) rotate(${rotationAngle * (0.1 + index * 0.05)}deg) scale(${0.8 + sectionProgress * 0.4})`,
              opacity: dynamicIntensity * (0.3 + index * 0.2),
              filter: `blur(${(1 - sectionProgress) * 2}px) brightness(${0.6 + sectionProgress * 0.4})`,
            }}
          />
        ))}

        {/* Floating Particles */}
        <div className="particles-container">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`particle-${i}`}
              className="floating-particle"
              style={{
                left: `${(i * 5 + scrollProgress * 100) % 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + (i % 3)}s`,
                opacity: dynamicIntensity * 0.6,
              }}
            />
          ))}
        </div>

        {/* Musical Wave Animation */}
        <div className="musical-waves">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={`wave-${i}`}
              className={`wave wave-${i}`}
              style={{
                transform: `translateX(${scrollProgress * (100 + i * 20)}px) scaleY(${0.5 + sectionProgress})`,
                opacity: dynamicIntensity * (0.4 + i * 0.1),
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Mesh Animation */}
        <div 
          className="gradient-mesh"
          style={{
            background: `conic-gradient(from ${rotationAngle}deg at ${50 + sectionProgress * 20}% ${50 + Math.sin(scrollProgress * 6.28) * 10}%, 
              ${currentSection.id === 'hero' ? 'rgba(255, 107, 53, 0.3)' :
                currentSection.id === 'multiverse' ? 'rgba(255, 139, 66, 0.3)' :
                currentSection.id === 'lyrics' ? 'rgba(196, 69, 105, 0.3)' :
                'rgba(79, 172, 254, 0.3)'} 0deg, 
              transparent 120deg, 
              ${currentSection.id === 'hero' ? 'rgba(22, 36, 71, 0.4)' :
                currentSection.id === 'multiverse' ? 'rgba(11, 20, 38, 0.4)' :
                currentSection.id === 'lyrics' ? 'rgba(139, 38, 53, 0.4)' :
                'rgba(102, 126, 234, 0.4)'} 240deg)`,
            opacity: dynamicIntensity * 0.7,
          }}
        />
      </div>

      {/* Section Debug Info (remove in production) */}
      <div className="scroll-debug">
        <div className="debug-info">
          <span>Section: {currentSection.name}</span>
          <span>Progress: {Math.round(scrollProgress * 100)}%</span>
          <span>Section Progress: {Math.round(sectionProgress * 100)}%</span>
        </div>
      </div>
    </>
  );
};

export default DynamicBackground;