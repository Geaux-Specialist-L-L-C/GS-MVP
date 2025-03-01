import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import FlipCardShowcase from '../components/sections/FlipCardShowcase';
import { FaGraduationCap, FaHandsHelping, FaHistory, FaStore, FaChartLine } from 'react-icons/fa';
import styles from '../styles/ProjectsPage.module.css';

/**
 * Projects Page
 * 
 * A showcase page displaying all Geaux Specialist projects using the 
 * enhanced FlipCardShowcase component with filtering capabilities.
 */
const ProjectsPage = () => {
  // Define project categories for filtering
  const projectCategories = [
    'Education',
    'Technology',
    'Creative',
    'Legacy',
    'Business'
  ];

  // Project data with categories for filtering
  const projectCards = [
    {
      id: 'geaux-academy',
      title: 'Geaux Academy',
      subtitle: 'AI-Driven Learning Platform',
      description: 'An innovative educational platform that uses AI to personalize learning experiences and adapt to individual student needs.',
      link: '/projects/geaux-academy',
      linkText: 'Explore Platform',
      backgroundColor: '#e0f2fe',
      accentColor: '#0284c7',
      categories: ['Education', 'Technology'],
      icon: <FaGraduationCap size={32} />,
      backgroundImage: '/images/projects/geaux-academy-card-bg.jpg'
    },
    {
      id: 'geaux-helped',
      title: 'Geaux HelpED',
      subtitle: 'Educational Support Resources',
      description: 'Comprehensive educational support resources providing students with the tools they need to excel in school and beyond.',
      link: '/projects/geaux-helped',
      linkText: 'Get Support',
      backgroundColor: '#dcfce7',
      accentColor: '#059669',
      categories: ['Education', 'Business'],
      icon: <FaHandsHelping size={32} />
    },
    {
      id: 'reanimated-echos',
      title: 'ReanimatED Echos',
      subtitle: 'Legacy Preservation Technology',
      description: 'AI-powered legacy preservation technology that transforms personal narratives and photos into interactive voice-enhanced stories.',
      link: '/projects/reanimated-echos',
      linkText: 'Preserve Memories',
      backgroundColor: '#f1f5f9',
      accentColor: '#475569',
      categories: ['Technology', 'Legacy'],
      icon: <FaHistory size={32} />
    },
    {
      id: 'geaux-emporium',
      title: 'Geaux Emporium',
      subtitle: 'Creative Marketplace Platform',
      description: 'A specialized marketplace platform that connects unique makers with enthusiastic buyers through innovative e-commerce solutions.',
      link: '/projects/geaux-emporium',
      linkText: 'Visit Marketplace',
      backgroundColor: '#fef3c7',
      accentColor: '#d97706',
      categories: ['Creative', 'Business'],
      icon: <FaStore size={32} />
    },
    {
      id: 'seo-geaux',
      title: 'SEO Geaux',
      subtitle: 'Digital Growth Strategies',
      description: 'Comprehensive digital marketing and SEO services that help businesses improve their online visibility and attract qualified leads.',
      link: '/contact?project=seo-geaux',
      linkText: 'Boost Your Visibility',
      backgroundColor: '#ddd6fe',
      accentColor: '#7c3aed',
      categories: ['Business', 'Technology'],
      icon: <FaChartLine size={32} />
    }
  ];

  return (
    <Layout 
      title="Our Projects | GeauxSpecialist"
      description="Explore our diverse portfolio of projects including Geaux Academy, Geaux HelpED, ReanimatED Echos, and more."
      keywords="projects, portfolio, Geaux Academy, Geaux HelpED, ReanimatED Echos, Geaux Emporium, SEO Geaux"
      canonical="/projects"
    >
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>
              Our Projects
            </h1>
            <p className={styles.heroSubtitle}>
              Discover how our innovative solutions are making an impact across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase using FlipCardShowcase with filtering */}
      <FlipCardShowcase
        title="Innovative Solutions"
        subtitle="Filter by category to explore our diverse portfolio of projects"
        cards={projectCards}
        categories={projectCategories}
        enableFiltering={true}
        viewAllLink={null} // Hide "View All" since we're already on the projects page
      />

      <section className={styles.contactCta}>
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
            <p className={styles.ctaText}>
              Contact us today to discuss how our team can help bring your ideas to life with 
              innovative technology solutions tailored to your needs.
            </p>
            <motion.div 
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <a href="/contact" className={styles.primaryButton}>
                Contact Us
              </a>
              <a href="#" className={styles.secondaryButton} onClick={(e) => {
                e.preventDefault();
                document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
              }}>
                Browse Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;