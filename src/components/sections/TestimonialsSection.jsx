import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../../styles/TestimonialsSection.module.css';

const TestimonialsSection = ({ title, subtitle, testimonials, showProjectsButton = false }) => {
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

  return (
    <section className={styles.testimonialSection} id="testimonials">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </motion.div>
        
        <motion.div 
          className={styles.testimonialGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className={styles.testimonialCard}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
            >
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
            </motion.div>
          ))}
        </motion.div>
        
        {showProjectsButton && (
          <motion.div 
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/projects">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Explore Our Projects
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;