import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import AnimatedHero from '../../components/sections/AnimatedHero';
import { FaGraduationCap, FaChalkboardTeacher, FaChartLine, FaUsers, FaAward, FaMobileAlt } from 'react-icons/fa';
import styles from '../../styles/ProjectDetail.module.css';

/**
 * Geaux Academy Project Page
 * 
 * Detailed information about the Geaux Academy project, showcasing
 * its features, benefits, and technologies.
 */
const GeauxAcademyPage = () => {
  // Animation variants
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
  
  // Features of Geaux Academy
  const features = [
    {
      icon: <FaGraduationCap size={36} className={styles.featureIcon} />,
      title: "AI-Powered Learning Paths",
      description: "Personalized curriculum generation using natural language processing to analyze learning styles and adapt content delivery."
    },
    {
      icon: <FaChalkboardTeacher size={36} className={styles.featureIcon} />,
      title: "Interactive Case Studies",
      description: "Realistic patient scenarios and decision-making simulations that help professionals apply theoretical knowledge in practical contexts."
    },
    {
      icon: <FaChartLine size={36} className={styles.featureIcon} />,
      title: "Progress Analytics",
      description: "Comprehensive tracking and visualization of learning progress, knowledge gaps, and skill development over time."
    },
    {
      icon: <FaUsers size={36} className={styles.featureIcon} />,
      title: "Peer Collaboration",
      description: "Built-in communication tools that facilitate knowledge sharing, group problem-solving, and community support."
    },
    {
      icon: <FaAward size={36} className={styles.featureIcon} />,
      title: "Certification Tracking",
      description: "Automated monitoring of continuing education credits and certification requirements with deadline reminders."
    },
    {
      icon: <FaMobileAlt size={36} className={styles.featureIcon} />,
      title: "Mobile Learning",
      description: "Fully responsive design with offline capabilities allowing professionals to learn anytime, anywhere."
    }
  ];

  // Benefits and outcomes
  const benefits = [
    "40% improvement in knowledge retention compared to traditional learning methods",
    "Reduces time spent on continuing education by an average of 25%",
    "Personalized learning paths increase engagement and completion rates by 35%",
    "Real-time feedback helps identify and address knowledge gaps immediately",
    "Integration with major healthcare systems streamlines credential verification",
    "Flexible learning schedules accommodate the demanding lives of healthcare professionals"
  ];

  // Technologies used
  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "GraphQL", "PostgreSQL", "Prisma", "TensorFlow",
    "OpenAI API", "AWS", "Firebase Authentication"
  ];

  return (
    <Layout 
      title="Geaux Academy"
      description="AI-driven educational platform providing personalized learning experiences for healthcare professionals and students."
      keywords="personalized learning, healthcare education, AI education, OpenAI, adaptive learning, online education"
      canonical="/projects/geaux-academy"
      ogImage="/images/projects/geaux-academy-og.jpg"
    >
      <AnimatedHero 
        title="Geaux Academy"
        subtitle="Revolutionizing education with AI-driven personalized learning experiences"
        primaryCta="Request Demo"
        primaryCtaLink="#contact"
        secondaryCta="Learn More"
        secondaryCtaLink="#features"
        backgroundImage="/images/projects/geaux-academy-hero.jpg"
      />

      <section className={styles.overview} id="overview">
        <div className="container">
          <motion.div 
            className={styles.overviewContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Transforming Healthcare Education</h2>
            <div className={styles.overviewText}>
              <p>
                Geaux Academy is our premier educational platform designed specifically for healthcare professionals and students. 
                It leverages AI-driven content generation and personalized learning paths to deliver tailored educational 
                experiences that adapt to each learner's unique needs, preferences, and pace.
              </p>
              <p>
                The platform combines cutting-edge technology with evidence-based educational methodologies to create 
                an engaging, effective learning environment that optimizes knowledge retention and practical application.
                Whether for continuing education, specialized certification, or fundamental training, Geaux Academy
                provides healthcare professionals with the tools they need to enhance their skills and advance their careers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <p className={styles.sectionSubtitle}>
              Discover the innovative capabilities of Geaux Academy
            </p>
            
            <motion.div 
              className={styles.featuresGrid}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className={styles.featureCard}
                  variants={itemVariants}
                >
                  <div className={styles.featureIconContainer}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <div className={styles.benefitsContainer}>
            <motion.div 
              className={styles.benefitsContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.sectionTitle}>Benefits & Outcomes</h2>
              <p className={styles.benefitsIntro}>
                Our platform has demonstrated significant improvements in learning outcomes, 
                efficiency, and student engagement across numerous healthcare institutions:
              </p>
              
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className={styles.benefitItem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className={styles.benefitIcon}>✓</span>
                    <span className={styles.benefitText}>{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                className={styles.ctaWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="#contact" className={styles.ctaButton}>
                  Request A Demo
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.technologiesContainer}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={styles.technologiesTitle}>Technologies Used</h3>
              <div className={styles.technologiesList}>
                {technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    className={styles.technologyBadge}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.caseStudy}>
        <div className="container">
          <motion.div 
            className={styles.caseStudyContainer}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.caseStudyContent}>
              <h2 className={styles.caseStudyTitle}>Success Story</h2>
              <h3 className={styles.caseStudySubtitle}>Northwestern Medical School</h3>
              
              <p className={styles.caseStudyText}>
                After implementing Geaux Academy for their continuing medical education programs, 
                Northwestern Medical School saw a 42% increase in course completion rates and a 37% 
                improvement in assessment scores within just six months.
              </p>
              
              <blockquote className={styles.caseStudyQuote}>
                "Geaux Academy has transformed how we deliver specialized medical education. 
                The personalized learning paths and AI-powered content recommendations have significantly 
                enhanced our students' engagement and knowledge retention."
              </blockquote>
              
              <p className={styles.caseStudyAuthor}>
                — Dr. Elizabeth Chen, Director of Medical Education
              </p>
            </div>
            
            <div className={styles.caseStudyResults}>
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>42%</h4>
                <p className={styles.resultLabel}>Increase in course completion</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>37%</h4>
                <p className={styles.resultLabel}>Improvement in assessment scores</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>89%</h4>
                <p className={styles.resultLabel}>Student satisfaction rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className="container">
          <motion.div 
            className={styles.contactContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.contactTitle}>Ready to revolutionize your educational approach?</h2>
            <p className={styles.contactText}>
              Schedule a personalized demo today to see how Geaux Academy can transform your institution's learning experience.
            </p>
            <div className={styles.contactButtons}>
              <motion.a 
                href="mailto:demo@geauxacademy.com" 
                className={`${styles.contactButton} ${styles.primaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.a>
              <motion.a 
                href="/contact" 
                className={`${styles.contactButton} ${styles.secondaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxAcademyPage;
