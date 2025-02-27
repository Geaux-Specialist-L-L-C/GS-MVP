<<<<<<< HEAD:pages/contact.js
import Layout from '../components/layout/Layout';
import ContactForm from '../components/sections/ContactForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  // Office locations
  const locations = [
    {
      name: 'Main Office',
      address: '123 Tech Park Way, Baton Rouge, LA 70808',
      phone: '+1 (225) 555-7890',
      email: 'info@geauxspecialist.com',
      hours: 'Monday - Friday: 9:00 AM - 5:00 PM'
    },
    {
      name: 'Innovation Hub',
      address: '456 Digital Avenue, New Orleans, LA 70112',
      phone: '+1 (504) 555-1234',
      email: 'innovation@geauxspecialist.com',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How can I request a demo of your products?',
      answer: 'You can request a demo by filling out our contact form or emailing us directly at demos@geauxspecialist.com. Please specify which product you\'re interested in, and our team will schedule a personalized demonstration.'
    },
    {
      question: 'Do you offer customized solutions for specific organizational needs?',
      answer: 'Yes, we specialize in tailoring our products to meet the unique requirements of different organizations. Our team works closely with clients to understand their specific challenges and develop customized solutions.'
    },
    {
      question: 'What support options are available for your products?',
      answer: 'We offer multiple tiers of support, including standard business hours support, extended hours support, and 24/7 premium support. All our products come with comprehensive documentation, training resources, and access to our knowledge base.'
    },
    {
      question: 'Are there partnership opportunities available with Geaux Specialist?',
      answer: 'We actively seek partnerships with organizations that share our vision and values. Whether you\'re interested in becoming a reseller, integration partner, or strategic ally, please contact our partnerships team at partners@geauxspecialist.com.'
    },
    {
      question: 'How do you ensure data privacy and security in your products?',
      answer: 'Data security is a top priority at Geaux Specialist. We implement industry-standard encryption, regular security audits, and strict access controls. Our products comply with relevant regulations, and we maintain transparent privacy policies.'
    }
  ];

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Geaux Specialist LLC. We're here to answer your questions and discuss how we can help with your specific needs."
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <p className={styles.heroSubtitle}>
              We're here to help and answer any questions you might have
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.sectionTitle}>Get In Touch</h2>
              <p className={styles.contactDescription}>
                Have a question about our products or services? Need technical support or want to 
                explore partnership opportunities? We'd love to hear from you.
              </p>
              
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>📧</div>
                  <h3 className={styles.contactMethodTitle}>Email Us</h3>
                  <p className={styles.contactMethodText}>
                    <a href="mailto:info@geauxspecialist.com">info@geauxspecialist.com</a>
                  </p>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>📞</div>
                  <h3 className={styles.contactMethodTitle}>Call Us</h3>
                  <p className={styles.contactMethodText}>
                    <a href="tel:+12255557890">+1 (225) 555-7890</a>
                  </p>
                </div>
                
                <div className={styles.contactMethod}>
                  <div className={styles.contactIcon}>💬</div>
                  <h3 className={styles.contactMethodTitle}>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a href="https://linkedin.com/company/geauxspecialist" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com/geauxspecialist" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      Twitter
                    </a>
                    <a href="https://facebook.com/geauxspecialist" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.contactFormContainer}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className={`section ${styles.locationsSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Our Locations</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            Visit us at one of our office locations
          </p>
          
          <div className={styles.locationsGrid}>
            {locations.map((location, index) => (
              <div key={index} className={styles.locationCard}>
                <h3 className={styles.locationName}>{location.name}</h3>
                <div className={styles.locationDetails}>
                  <div className={styles.locationDetail}>
                    <span className={styles.detailIcon}>📍</span>
                    <span className={styles.detailText}>{location.address}</span>
                  </div>
                  <div className={styles.locationDetail}>
                    <span className={styles.detailIcon}>📞</span>
                    <span className={styles.detailText}>{location.phone}</span>
                  </div>
                  <div className={styles.locationDetail}>
                    <span className={styles.detailIcon}>📧</span>
                    <span className={styles.detailText}>{location.email}</span>
                  </div>
                  <div className={styles.locationDetail}>
                    <span className={styles.detailIcon}>🕒</span>
                    <span className={styles.detailText}>{location.hours}</span>
                  </div>
                </div>
                
                <div className={styles.locationMap}>
                  {/* This would be replaced with an actual map component */}
                  <div className={styles.mapPlaceholder}>
                    <p>Map of {location.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} text-center`}>Frequently Asked Questions</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            Find answers to common questions about our products and services
          </p>
          
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className={styles.faqCta}>
            <p>Don't see your question here? Feel free to reach out directly.</p>
            <a href="mailto:info@geauxspecialist.com" className="button button-secondary">
              Ask Your Question
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
=======
import React from 'react';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
  return (
    <Layout title="Contact Us" description="Get in touch with Geaux Specialist LLC">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please fill out the form below and we will get back to you as soon as possible.</p>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
>>>>>>> 3fd4ed4d7136f8021924c596fafda693338f93fd:src/pages/contact.js
