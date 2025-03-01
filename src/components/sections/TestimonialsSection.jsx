import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt, FaQuoteRight } from 'react-icons/fa';
import styles from '../../styles/TestimonialsSection.module.css';

/**
 * TestimonialsSection Component
 * 
 * A dynamic testimonial display with carousel functionality,
 * star ratings, and animated transitions.
 * 
 * @param {string} title - Main section title
 * @param {string} subtitle - Optional section subtitle
 * @param {Array} testimonials - Array of testimonial objects
 * @param {boolean} showProjectsButton - Whether to show the projects call-to-action
 * @param {string} displayMode - Display mode: 'grid' or 'carousel' (default: 'grid')
 * @param {string} bgColor - Optional background color override
 * @param {number} autoplaySpeed - Milliseconds between autoplay transitions (0 to disable)
 */
const TestimonialsSection = ({ 
  title, 
  subtitle, 
  testimonials, 
  showProjectsButton = false,
  displayMode = 'grid',
  bgColor,
  autoplaySpeed = 5000
}) => {
  // State for carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Handle carousel navigation
  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    if (displayMode === 'carousel' && autoplaySpeed > 0 && !isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, autoplaySpeed);
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused, autoplaySpeed, displayMode, testimonials.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  // Render star ratings
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className={styles.star} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className={styles.star} />);
    }
    
    // Add empty stars to reach 5 total
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className={styles.emptyStar} />);
    }
    
    return <div className={styles.starRating}>{stars}</div>;
  };

  // Render a testimonial card
  const renderTestimonialCard = (testimonial, index, isCarousel = false) => (
    <motion.div 
      key={`${testimonial.name}-${index}`}
      className={`${styles.testimonialCard} ${isCarousel ? styles.carouselCard : ''}`}
      variants={itemVariants}
      whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
      custom={direction}
      {...(isCarousel && {
        initial: "enter",
        animate: "center",
        exit: "exit",
        variants: carouselVariants
      })}
    >
      <div className={styles.testimonialContent}>
        <FaQuoteRight className={styles.quoteIcon} />
        
        {testimonial.rating && renderStarRating(testimonial.rating)}
        
        <p className={styles.quote}>{testimonial.quote}</p>
        
        <div className={styles.testimonialFooter}>
          {testimonial.image && (
            <div className={styles.avatar}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
          )}
          <div className={styles.testimonialAuthor}>
            <h4 className={styles.name}>{testimonial.name}</h4>
            {testimonial.role && <p className={styles.role}>{testimonial.role}</p>}
            {testimonial.project && (
              <p className={styles.project}>
                {testimonial.projectLink ? (
                  <Link href={testimonial.projectLink} legacyBehavior>
                    <a>Project: {testimonial.project}</a>
                  </Link>
                ) : (
                  <>Project: {testimonial.project}</>
                )}
              </p>
            )}
          </div>
        </div>
        
        {testimonial.metrics && (
          <div className={styles.metrics}>
            {testimonial.metrics.map((metric, idx) => (
              <div key={idx} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  // Render grid layout
  const renderGrid = () => (
    <motion.div 
      className={styles.testimonialGrid}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {testimonials.map((testimonial, index) => renderTestimonialCard(testimonial, index))}
    </motion.div>
  );

  // Render carousel layout
  const renderCarousel = () => (
    <div className={styles.carouselContainer}>
      <button 
        className={`${styles.carouselButton} ${styles.prevButton}`} 
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <FaChevronLeft />
      </button>
      
      <div 
        className={styles.carouselTrack}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {renderTestimonialCard(testimonials[activeIndex], activeIndex, true)}
        </AnimatePresence>
        
        <div className={styles.carouselIndicators}>
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button 
        className={`${styles.carouselButton} ${styles.nextButton}`} 
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <FaChevronRight />
      </button>
    </div>
  );

  // Section style with optional background color
  const sectionStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <section className={styles.testimonialSection} style={sectionStyle} id="testimonials">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </motion.div>
        
        {displayMode === 'grid' ? renderGrid() : renderCarousel()}
        
        {showProjectsButton && (
          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/projects" legacyBehavior>
              <a className={styles.ctaButton}>
                Explore Our Projects
              </a>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;