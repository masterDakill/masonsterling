import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  onLoad?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  style,
  placeholder,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={style}
    >
      {isInView && (
        <>
          {!isLoaded && placeholder && (
            <div className="lazy-placeholder">
              <img
                src={placeholder}
                alt={`${alt} placeholder`}
                className="placeholder-img"
              />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
            onLoad={handleLoad}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease'
            }}
          />
        </>
      )}
      
      <style>{`
        .lazy-image-container {
          position: relative;
          overflow: hidden;
        }
        
        .lazy-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        
        .placeholder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(10px);
          opacity: 0.7;
        }
        
        .lazy-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default LazyImage;