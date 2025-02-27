// Hero section component for landing pages
import React from 'react';
import Button from '../ui/Button';

const Hero = ({
  title,
  subtitle,
  ctaText = 'Learn More',
  ctaLink = '#',
  backgroundImage,
  overlay = true,
}) => {
  const heroStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
    
  const overlayClass = overlay ? 'hero-overlay' : '';
  
  return (
    <section className={`hero-section ${overlayClass}`} style={heroStyle}>
      <div className="container">
        <div className="hero-content">
          {title && <h1 className="hero-title">{title}</h1>}
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          
          <div className="hero-cta">
            <Button 
              variant="primary" 
              size="large" 
              onClick={() => window.location.href = ctaLink}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;