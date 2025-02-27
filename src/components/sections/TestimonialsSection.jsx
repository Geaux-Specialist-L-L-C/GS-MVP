import React from 'react';
import styles from '../../styles/TestimonialsSection.module.css';

const TestimonialsSection = ({ title, subtitle, testimonials }) => {
  return (
    <section className={styles.testimonialSection}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>"</div>
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
                    {testimonial.project && <p className={styles.project}>Project: {testimonial.project}</p>}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;