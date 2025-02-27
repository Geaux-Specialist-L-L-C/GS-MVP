import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../styles/ContactForm.module.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted successfully:', data);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {isSubmitSuccessful && <p className={styles.successMessage}>Form submitted successfully!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
