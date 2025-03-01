import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlipCard from '../ui/FlipCard';
import styles from '../../styles/FlipCardShowcase.module.css';

/**
 * FlipCardShowcase Component
 * 
 * A showcase section that displays multiple FlipCard components in a grid layout
 * with optional filtering functionality.
 * 
 * @param {Object} props Component props
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {Array} props.cards - Array of card data objects
 * @param {Array} props.categories - Array of category names for filtering (optional)
 * @param {boolean} props.enableFiltering - Whether to show filtering options (default: false)
 * @param {string} props.viewAllLink - URL for "View All" button (optional, pass null to hide)
 */
const FlipCardShowcase = ({ 
  title, 
  subtitle, 
  cards, 
  categories = [],
  enableFiltering = false,
  viewAllLink = '/projects' 
}) => {
  // State for active filter category
  const [activeFilter, setActiveFilter] = useState('All');
  // State for filtered cards
  const [filteredCards, setFilteredCards] = useState(cards);
  
  // Filter cards when the active filter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter(card => 
        card.categories && card.categories.includes(activeFilter)
      );
      setFilteredCards(filtered);
    }
  }, [activeFilter, cards]);
  
  // Animation variants for staggered card animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <section className={styles.showcase}>
      <div className="container">
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        
        {/* Filter buttons - shown only if enableFiltering is true and categories are provided */}
        {enableFiltering && categories.length > 0 && (
          <motion.div 
            className={styles.filterContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              className={`${styles.filterButton} ${activeFilter === 'All' ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All Projects
            </button>
            
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${styles.filterButton} ${activeFilter === category ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
        
        {/* Cards grid with animation */}
        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence>
            {filteredCards.length > 0 ? (
              filteredCards.map((card, index) => (
                <motion.div 
                  key={card.id || index} 
                  className={styles.cardWrapper}
                  variants={cardVariants}
                  layout
                  exit="exit"
                >
                  <FlipCard
                    frontContent={
                      <div className={styles.cardFront} style={{
                        backgroundColor: card.backgroundColor || '#f8fafc'
                      }}>
                        {card.icon && <div className={styles.cardIcon} style={{
                          color: card.accentColor || '#2563eb'
                        }}>{card.icon}</div>}
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardSubtitle}>{card.subtitle}</p>
                        <div className={styles.flipPrompt}>
                          <span className={styles.flipIcon}>↗</span>
                          Flip for details
                        </div>
                      </div>
                    }
                    backContent={
                      <div className={styles.cardBack} style={{
                        backgroundColor: card.accentColor || '#2563eb',
                        color: 'white'
                      }}>
                        <p className={styles.cardDescription}>{card.description}</p>
                        <a href={card.link} className={styles.cardCta}>{card.linkText || 'Learn More'}</a>
                      </div>
                    }
                    backgroundImage={card.backgroundImage}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div 
                className={styles.noResults}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p>No projects found in the "{activeFilter}" category.</p>
                <button 
                  className={styles.filterButton} 
                  onClick={() => setActiveFilter('All')}
                  style={{ marginTop: '1rem' }}
                >
                  Show All Projects
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Optional "View All" link */}
        {viewAllLink && (
          <div className={styles.showcaseFooter}>
            <a href={viewAllLink} className={styles.viewAllLink}>View All Projects</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlipCardShowcase;