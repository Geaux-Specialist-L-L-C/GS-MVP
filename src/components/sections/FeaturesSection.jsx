import React from 'react';
import Image from 'next/image';
import styles from '../../styles/FeaturesSection.module.css';

const FeaturesSection = ({
  title = 'Our Features',
  subtitle,
  features = [],
}) => {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div className={styles.featureItem} key={index}>
              {feature.icon && (
                <div className={styles.featureIcon}>
                  {typeof feature.icon === 'string' ? (
                    <Image 
                      src={feature.icon} 
                      alt={feature.title}
                      width={64}
                      height={64}
                    />
                  ) : (
                    feature.icon
                  )}
                </div>
              )}
              
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
