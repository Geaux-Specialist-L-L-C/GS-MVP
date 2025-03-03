// File: /src/components/sections/TestimonialsSection.jsx
// Description: Testimonials section component for the landing page
// Author: GitHub Copilot
// Created: 2024-03-03

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const TestimonialsSection = ({
  title,
  subtitle,
  testimonials,
  showProjectsButton,
  displayMode,
  bgColor,
  autoplaySpeed,
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplaySpeed, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={`testimonials-section ${bgColor}`}>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <p className='text-lg'>{subtitle}</p>
        </div>
        <div className='testimonials-carousel'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`testimonial-item ${index === currentTestimonial ? 'visible' : 'hidden'}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: index === currentTestimonial ? 1 : 0, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-xl'>{testimonial.quote}</p>
              <p className='text-sm'>{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <button onClick={prevTestimonial} className='btn btn-secondary mr-4'>Previous</button>
          <button onClick={nextTestimonial} className='btn btn-primary'>Next</button>
        </div>
        {showProjectsButton && (
          <div className='text-center mt-12'>
            <Link href='/projects' passHref>
              <a className='btn btn-outline'>Explore Our Projects</a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

TestimonialsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  showProjectsButton: PropTypes.bool,
  displayMode: PropTypes.string,
  bgColor: PropTypes.string,
  autoplaySpeed: PropTypes.number,
};

TestimonialsSection.defaultProps = {
  showProjectsButton: false,
  displayMode: 'carousel',
  bgColor: 'bg-white',
  autoplaySpeed: 5000,
};

export default TestimonialsSection;