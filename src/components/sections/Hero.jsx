// Hero section component for landing pages
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
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
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.2,
        duration: 0.5
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <section className={`hero-section ${overlayClass}`} style={heroStyle}>
      <div className="container">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {title && (
            <motion.h1 
              className="hero-title"
              variants={itemVariants}
            >
              {title}
            </motion.h1>
          )}
          
          {subtitle && (
            <motion.p 
              className="hero-subtitle"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div 
            className="hero-cta flex justify-center"
            variants={itemVariants}
          >
            <Button 
              variant="primary" 
              size="large" 
              onClick={() => window.location.href = ctaLink}
              className="hover-flip-card"
            >
              {ctaText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;