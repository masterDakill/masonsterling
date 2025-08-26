import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'slideInUp' | 'zoomIn';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  className = '' 
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`animated-section ${animation} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        '--animation-delay': `${delay}ms`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;