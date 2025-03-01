import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import AnimatedHero from '../components/sections/AnimatedHero';
import FlipCardShowcase from '../components/sections/FlipCardShowcase';
import styles from '../styles/ProjectsPage.module.css';

/**
 * Projects Overview Page
 * 
 * A comprehensive showcase of all Geaux Specialist LLC projects with
 * interactive elements and detailed information.
 */
const ProjectsPage = () => {
  // Animation variants for staggered text animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };
  
  // Project development process steps
  const developmentProcess = [
    {
      title: "Discovery & Research",
      description: "We begin with in-depth research to understand the problem space, target audience, and existing solutions.",
      icon: "🔍"
    },
    {
      title: "Planning & Design",
      description: "Collaborative design thinking sessions lead to prototypes that are validated through user testing.",
      icon: "📐"
    },
    {
      title: "Development",
      description: "Using agile methodologies, we build the solution with continuous integration and automated testing.",
      icon: "💻"
    },
    {
      title: "Testing & Refinement",
      description: "Comprehensive QA testing ensures the product meets all functional and performance requirements.",
      icon: "🧪"
    },
    {
      title: "Deployment",
      description: "Controlled launch with close monitoring of performance and user feedback to ensure success.",
      icon: "🚀"
    },
    {
      title: "Support & Evolution",
      description: "Ongoing maintenance and feature enhancement based on analytics and user feedback.",
      icon: "⚙️"
    }
  ];

  return (
    <Layout 
      title="Our Projects" 
      description="Explore the innovative projects at Geaux Specialist LLC, including Geaux Academy, Geaux HelpED, ReanimatED Echos, and Geaux Emporium."
      keywords="educational platform, healthcare management, voice processing, e-commerce, innovation"
      canonical="/projects"
    >
      <AnimatedHero 
        title="Our Projects"
        subtitle="Discover how Geaux Specialist is transforming industries through innovation and technology."
        primaryCta="Explore Below"
        primaryCtaLink="#projects-showcase"
        secondaryCta="Contact Us"
        secondaryCtaLink="/contact"
        backgroundImage="/images/hero-background.jpg"
        overlayColor="rgba(0, 0, 0, 0.7)"
      />
      
      <section className={styles.introSection}>
        <div className="container">
          <motion.div 
            className={styles.introContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h2 
              className={styles.sectionTitle}
              variants={textVariants}
            >
              Innovative Solutions for Modern Challenges
            </motion.h2>
            
            <motion.p 
              className={styles.sectionText}
              variants={textVariants}
            >
              At Geaux Specialist LLC, we develop cutting-edge solutions across education, healthcare, technology, 
              and e-commerce. Our mission is to empower communities through innovation that makes a measurable impact.
            </motion.p>
            
            <motion.p 
              className={styles.sectionText}
              variants={textVariants}
            >
              Each of our projects addresses specific challenges in its domain, leveraging the latest technologies and 
              research to deliver exceptional results. Explore our project portfolio below to learn more about how 
              we're making a difference.
            </motion.p>
          </motion.div>
        </div>
      </section>
      
      <div id="projects-showcase">
        <FlipCardShowcase />
      </div>
      
      <section className={styles.processBg}>
        <div className="container">
          <motion.div 
            className={styles.processSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.processTitle}>Our Development Approach</h2>
            <p className={styles.processSubtitle}>
              We follow a rigorous methodology to ensure every project delivers maximum value
            </p>
            
            <motion.div 
              className={styles.processGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {developmentProcess.map((step, index) => (
                <motion.div 
                  key={index} 
                  className={styles.processCard}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5 }
                    }
                  }}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  <div className={styles.processIcon}>{step.icon}</div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className={styles.projectsCta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
            <p className={styles.ctaText}>
              Our team of specialists is ready to help you transform your ideas into reality. 
              Whether you're looking to digitalize your business, create innovative educational tools,
              or develop healthcare solutions, we have the expertise to make it happen.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className={styles.ctaLink}>
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;