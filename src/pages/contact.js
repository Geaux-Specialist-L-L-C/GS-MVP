import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import styles from '../styles/ContactForm.module.css';

/**
 * Contact Page
 * 
 * A comprehensive contact page featuring a validated form, contact information,
 * and animated elements for improved user experience.
 */
const ContactPage = () => {
  // Contact information display
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      content: (
        <address style={{ fontStyle: 'normal' }}>
          123 Tech Plaza<br />
          Suite 500<br />
          Baton Rouge, LA 70808<br />
          United States
        </address>
      )
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: (
        <>
          <a href="mailto:info@geauxspecialist.com">info@geauxspecialist.com</a><br />
          <a href="mailto:support@geauxspecialist.com">support@geauxspecialist.com</a>
        </>
      )
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: (
        <>
          <a href="tel:+15551234567">Main: (555) 123-4567</a><br />
          <a href="tel:+15559876543">Support: (555) 987-6543</a>
        </>
      )
    },
    {
      icon: <FaClock />,
      title: "Hours",
      content: (
        <>
          Monday - Friday: 9:00 AM - 6:00 PM<br />
          Saturday: 10:00 AM - 3:00 PM<br />
          Sunday: Closed
        </>
      )
    }
  ];

  // Animation variants for staggered animations
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <Layout 
      title="Contact Us" 
      description="Get in touch with the team at Geaux Specialist LLC. We're here to answer your questions and discuss how we can help with your project needs."
      keywords="contact, inquiry, support, Geaux Specialist, get in touch, project inquiry"
      canonical="/contact"
    >
      <section className="page-header">
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have questions or ready to start a project? We're here to help. 
            Fill out the form below or use our contact information to get in touch.
          </motion.p>
        </div>
      </section>

      <section className="contact-content py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
            
            <div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <div className="text-blue-600 mr-4 mt-1 text-xl">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <div className="text-gray-600 mt-1">
                          {item.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 pt-6 border-t border-gray-200"
                  variants={itemVariants}
                >
                  <h3 className="font-semibold text-lg mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://twitter.com/geauxspecialist" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/geauxspecialist" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/geauxspecialist" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/geauxspecialist" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110367.59945628075!2d-91.22886270796914!3d30.454674099871304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86243867325f74cb%3A0x2123f1db91579a1d!2sBaton%20Rouge%2C%20LA!5e0!3m2!1sen!2sus!4v1653593916922!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Geaux Specialist office location"
                aria-label="Map showing the location of Geaux Specialist office"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
