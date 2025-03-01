import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FlipCard.module.css';

/**
 * FlipCard Component
 * 
 * A reusable card component that flips on hover or click to reveal content on both sides
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.frontContent - Content to display on the front of the card
 * @param {React.ReactNode} props.backContent - Content to display on the back of the card
 * @param {boolean} props.flipOnClick - If true, card flips on click instead of hover
 * @param {string} props.className - Additional CSS class to apply to the component
 * @param {number} props.width - Card width in pixels
 * @param {number} props.height - Card height in pixels
 */
const FlipCard = ({
  frontContent,
  backContent,
  flipOnClick = false,
  className = '',
  width = 300,
  height = 200,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };

  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div 
      className={`${styles.flipCard} ${className}`} 
      style={cardStyle}
      onClick={handleClick}
    >
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ''}`}>
        {/* Front */}
        <div className={styles.flipCardFront}>
          {frontContent}
        </div>

        {/* Back */}
        <div className={styles.flipCardBack}>
          {backContent}
        </div>
      </div>
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
};

export default FlipCard;