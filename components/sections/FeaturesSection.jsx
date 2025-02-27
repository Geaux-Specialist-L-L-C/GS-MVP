// Features section component to showcase services or project highlights
import React from 'react';
import Image from 'next/image';

const FeaturesSection = ({
  title = 'Our Features',
  subtitle,
  features = [],
}) => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              {feature.icon && (
                <div className="feature-icon">
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
              
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;