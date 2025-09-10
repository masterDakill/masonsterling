import { useEffect } from 'react';

const SmoothScrolling = () => {
  useEffect(() => {
    // Smooth scrolling behavior for all internal links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.closest('button') || target;
        const onclick = button.getAttribute('onclick');
        
        if (onclick && onclick.includes('scrollIntoView')) {
          e.preventDefault();
          
          // Extract section ID from onclick
          const sectionMatch = onclick.match(/'([^']+)'/);
          if (sectionMatch) {
            const sectionId = sectionMatch[1];
            const element = document.getElementById(sectionId);
            
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        }
      }
    };

    // Add parallax effect to background elements
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    window.addEventListener('scroll', handleParallax, { passive: true });

    // Add CSS for animations if not already present
    if (!document.getElementById('smooth-animations-styles')) {
      const style = document.createElement('style');
      style.id = 'smooth-animations-styles';
      style.textContent = `
        .fade-in {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .fade-in.animate-in {
          opacity: 1;
        }
        
        .slide-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .slide-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out;
        }
        
        .slide-in-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out;
        }
        
        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Smooth transitions for all interactive elements */
        button, a, .multiverse-card, .highlight-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced hover effects */
        .multiverse-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
        
        .highlight-item:hover {
          transform: translateY(-2px);
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleParallax);
      observer.disconnect();
    };
  }, []);

  return null;
};

export default SmoothScrolling;