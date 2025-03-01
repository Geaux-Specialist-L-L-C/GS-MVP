import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/ContactForm.module.css';

/**
 * ContactForm Component
 * 
 * A comprehensive contact form with field validation and visual feedback.
 */
const ContactForm = () => {
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });

  // Form submission and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Clear errors for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim() || !emailRegex.test(formState.email)) {
      newErrors.email = 'Valid email is required';
    }
    
    // Subject validation
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formState.message.trim() || formState.message.length < 10) {
      newErrors.message = 'Please enter a message (at least 10 characters)';
    }
    
    // Phone validation (optional field)
    if (formState.phone.trim()) {
      const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(formState.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) return;
    
    // Simulate form submission
    setIsSubmitting(true);

    try {
      // Send form data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        // Set submission success state
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
          company: '',
          phone: ''
        });
        
        // Reset submission state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setErrors({
        ...errors,
        form: 'There was a problem submitting your message. Please try again.'
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Render success message after form submission
  if (isSubmitted) {
    return (
      <motion.div 
        className={styles.successMessage}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.successIcon}>✓</div>
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. We'll get back to you shortly.</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      className={styles.form}
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {errors.form && (
        <motion.div 
          className={styles.errorMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {errors.form}
        </motion.div>
      )}

      <div className={styles.formRow}>
        <motion.div className={styles.formGroup} variants={itemVariants}>
          <label htmlFor="name" className={styles.label}>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Your name"
            disabled={isSubmitting}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </motion.div>

        <motion.div className={styles.formGroup} variants={itemVariants}>
          <label htmlFor="email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="Your email address"
            disabled={isSubmitting}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </motion.div>
      </div>

      <div className={styles.formRow}>
        <motion.div className={styles.formGroup} variants={itemVariants}>
          <label htmlFor="company" className={styles.label}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className={styles.input}
            placeholder="Your company name (optional)"
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div className={styles.formGroup} variants={itemVariants}>
          <label htmlFor="phone" className={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="Your phone number (optional)"
            disabled={isSubmitting}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </motion.div>
      </div>

      <motion.div className={styles.formGroup} variants={itemVariants}>
        <label htmlFor="subject" className={styles.label}>
          Subject <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
          placeholder="What is your message about?"
          disabled={isSubmitting}
        />
        {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
      </motion.div>

      <motion.div className={styles.formGroup} variants={itemVariants}>
        <label htmlFor="message" className={styles.label}>
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Tell us how we can help you..."
          rows="5"
          disabled={isSubmitting}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </motion.div>

      <motion.div className={styles.formActions} variants={itemVariants}>
        <motion.button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <span className={styles.submitting}>
              <span className={styles.spinner}></span> Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </motion.div>

      <motion.p className={styles.formNote} variants={itemVariants}>
        <span className={styles.required}>*</span> Required fields
      </motion.p>
    </motion.form>
  );
};

export default ContactForm;
