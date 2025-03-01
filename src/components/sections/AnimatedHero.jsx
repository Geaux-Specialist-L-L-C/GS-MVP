import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import styles from '../../styles/AnimatedHero.module.css';

/**
 * AnimatedHero Component
 * 
 * An enhanced hero section with staggered animations, parallax effects, and 
 * configurable CTA buttons. Designed for high visual impact on landing pages.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Subtitle or description text
 * @param {string} props.primaryCta - Primary CTA button text
 * @param {string} props.primaryCtaLink - Primary CTA button link
 * @param {string} props.secondaryCta - Secondary CTA button text (optional)
 * @param {string} props.secondaryCtaLink - Secondary CTA button link (optional)
 * @param {string} props.backgroundImage - Path to background image
 * @param {string} props.overlayColor - CSS color for overlay (default: rgba(0, 0, 0, 0.6))
 * @param {string} props.height - Hero section height (default: 85vh)
 */
const AnimatedHero = ({
  title,
  subtitle,
  primaryCta = 'Learn More',
  primaryCtaLink = '#',
  secondaryCta,
  secondaryCtaLink,
  backgroundImage = '/images/hero-background.jpg',
  overlayColor = 'rgba(0, 0, 0, 0.6)',
  height = '85vh'
}) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height,
  };
  
  const overlayStyle = {
    backgroundColor: overlayColor,
  };
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.7,
        ease: [0.6, 0.05, -0.01, 0.9]
      } 
    }
  };
  
  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.7,
        ease: [0.6, 0.05, -0.01, 0.9]
      } 
    }
  };
  
  return (
    <section className={styles.heroSection} style={heroStyle}>
      <div className={styles.overlay} style={overlayStyle}></div>
      
      <div className={styles.parallaxBg}>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className={styles.parallaxLayer}
        />
      </div>
      
      <div className="container">
        <motion.div 
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {title && (
            <motion.h1
              className={styles.title}
              variants={itemVariants}
            >
              {title}
            </motion.h1>
          )}
          
          {subtitle && (
            <motion.p
              className={styles.subtitle}
              variants={subtitleVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div 
            className={styles.ctaContainer}
            variants={itemVariants}
          >
            <Button 
              variant="primary" 
              size="large" 
              onClick={() => window.location.href = primaryCtaLink}
            >
              {primaryCta}
            </Button>
            
            {secondaryCta && (
              <Button 
                variant="outline" 
                size="large" 
                onClick={() => window.location.href = secondaryCtaLink}
                className={styles.secondaryBtn}
              >
                {secondaryCta}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className={styles.mouseIcon}>
          <div className={styles.mouseWheel}></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;