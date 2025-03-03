// eslint-disable
import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/FeaturesSection.module.css';

const FeaturesSection = ({
  title = 'Our Features',
  subtitle,
  features = [],
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.featuresSection} aria-labelledby='features-title'>
      <div className='container'>
        <div className={styles.sectionHeader}>
          <h2 id='features-title' className={styles.sectionTitle}>
            {title}
          </h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
        
        <motion.div 
          className={styles.featuresGrid}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div className={styles.featureItem} key={index} variants={itemVariants}>
              {feature.icon && (
                <div className={styles.featureIcon} aria-hidden='true'>
                  {typeof feature.icon === 'string' ? (
                    <Image src={feature.icon} alt='' width={64} height={64} />
                  ) : (
                    feature.icon
                  )}
                </div>
              )}
              
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
