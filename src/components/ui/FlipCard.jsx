import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../../styles/FlipCard.module.css';

/**
 * FlipCard Component
 * 
 * A reusable card component that flips on hover or click to reveal content on both sides.
 * Enhanced with framer-motion animations, keyboard navigation and reduced motion preferences.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.frontContent - Content to display on the front of the card
 * @param {React.ReactNode} props.backContent - Content to display on the back of the card
 * @param {boolean} props.flipOnClick - If true, card flips on click instead of hover
 * @param {string} props.className - Additional CSS class to apply to the component
 * @param {number} props.width - Card width in pixels
 * @param {number} props.height - Card height in pixels
 * @param {string} props.frontAriaLabel - Accessibility label for front card content
 * @param {string} props.backAriaLabel - Accessibility label for back card content
 */
const FlipCard = ({
  frontContent,
  backContent,
  flipOnClick = false,
  className = '',
  width = 300,
  height = 200,
  frontAriaLabel = 'Card front',
  backAriaLabel = 'Card back'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionPreferenceChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  // Handle click event
  const handleClick = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };
  
  // Handle keyboard events for accessibility
  const handleKeyDown = (e) => {
    if (flipOnClick) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      } else if (e.key === 'Tab' && isFlipped && !e.shiftKey) {
        // If tabbing forward on a flipped card, handle focus appropriately
        handleFocusManagement(e);
      }
    }
  };
  
  // Add focus trap when card is flipped
  useEffect(() => {
    const handleEscape = (e) => {
      if (isFlipped && e.key === 'Escape') {
        setIsFlipped(false);
        // Ensure focus returns to the card
        cardRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isFlipped]);

  // Focus management for keyboard users
  const handleFocusManagement = (e) => {
    // Implementation depends on the DOM structure inside the card
    // This is a placeholder for custom focus logic if needed
  };
  
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const getTransitionStyles = () => {
    return prefersReducedMotion 
      ? { type: 'tween', duration: 0.2, ease: 'easeOut' }
      : { type: 'spring', stiffness: 70, damping: 12 };
  };

  return (
    <div 
      className={`${styles.flipCard} ${className}`} 
      style={cardStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={flipOnClick ? 0 : -1}
      role={flipOnClick ? "button" : "presentation"}
      aria-pressed={flipOnClick ? isFlipped : undefined}
      ref={cardRef}
    >
      <motion.div 
        className={styles.flipCardInner}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={getTransitionStyles()}
        initial={false}
        aria-live="polite"
      >
        {/* Front */}
        <div 
          className={styles.flipCardFront} 
          aria-label={frontAriaLabel}
          aria-hidden={isFlipped}
        >
          {frontContent}
        </div>

        {/* Back */}
        <div 
          className={styles.flipCardBack} 
          aria-label={backAriaLabel}
          aria-hidden={!isFlipped}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

FlipCard.propTypes = {
  frontContent: PropTypes.node.isRequired,
  backContent: PropTypes.node.isRequired,
  flipOnClick: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  frontAriaLabel: PropTypes.string,
  backAriaLabel: PropTypes.string
};

export default FlipCard;