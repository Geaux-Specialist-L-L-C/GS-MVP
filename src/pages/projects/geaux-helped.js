import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import AnimatedHero from '../../components/sections/AnimatedHero';
import { FaUserGraduate, FaBookOpen, FaChartLine, FaUsers, FaLaptop, FaRegCalendarAlt } from 'react-icons/fa';
import styles from '../../styles/ProjectDetail.module.css';

/**
 * Geaux HelpED Project Page
 * 
 * Detailed information about the Geaux HelpED project, showcasing
 * its educational support resources and learning tools.
 */
const GeauxHelpEDPage = () => {
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
  
  // Features of Geaux HelpED
  const features = [
    {
      icon: <FaUserGraduate size={36} className={styles.featureIcon} />,
      title: "Personalized Learning Support",
      description: "Customized assistance for students of all ages, adapting to individual learning styles and academic needs."
    },
    {
      icon: <FaBookOpen size={36} className={styles.featureIcon} />,
      title: "Curriculum Enhancement",
      description: "Supplementary learning materials that align with educational standards while making complex subjects accessible."
    },
    {
      icon: <FaChartLine size={36} className={styles.featureIcon} />,
      title: "Progress Tracking",
      description: "Comprehensive analytics that monitor student improvement, identify knowledge gaps, and recommend targeted interventions."
    },
    {
      icon: <FaUsers size={36} className={styles.featureIcon} />,
      title: "Collaborative Learning",
      description: "Virtual study groups and peer-to-peer learning opportunities that foster community and collective growth."
    },
    {
      icon: <FaLaptop size={36} className={styles.featureIcon} />,
      title: "Interactive Exercises",
      description: "Engaging, hands-on activities that reinforce learning concepts through practice and application."
    },
    {
      icon: <FaRegCalendarAlt size={36} className={styles.featureIcon} />,
      title: "Flexible Scheduling",
      description: "On-demand access to educational support, allowing students to learn at their own pace and preferred times."
    }
  ];

  // Benefits and outcomes
  const benefits = [
    "Improved academic performance in 87% of participating students",
    "Reduced homework frustration through targeted guidance",
    "Increased student confidence and subject-matter engagement",
    "Better retention of key concepts through varied learning approaches",
    "Support for parents and caregivers in guiding educational development",
    "Seamless integration with existing school curricula"
  ];

  // Technologies used
  const technologies = [
    "React.js", "Node.js", "Express", 
    "MongoDB", "GraphQL", "WebRTC", 
    "Firebase", "Redux", "TailwindCSS", 
    "Jest", "Socket.io"
  ];

  return (
    <Layout 
      title="Geaux HelpED"
      description="Comprehensive educational support resources providing students with the tools they need to excel in school and beyond."
      keywords="education, tutoring, academic support, learning resources, student help, study aids"
      canonical="/projects/geaux-helped"
      ogImage="/images/projects/geaux-helped-og.jpg"
    >
      <AnimatedHero 
        title="Geaux HelpED"
        subtitle="Empowering students of all ages with personalized educational support"
        primaryCta="Explore Resources"
        primaryCtaLink="#features"
        secondaryCta="Get Support"
        secondaryCtaLink="#contact"
        backgroundImage="/images/projects/geaux-helped-hero.jpg"
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
            <h2 className={styles.sectionTitle}>Supporting Educational Success</h2>
            <div className={styles.overviewText}>
              <p>
                Geaux HelpED is our comprehensive educational support platform designed to bridge learning gaps 
                and enhance academic performance for students from elementary school through college.
                Through personalized assistance, innovative learning tools, and accessible resources, we address 
                the diverse needs of today's learners.
              </p>
              <p>
                Our approach combines traditional educational methodologies with modern technology to create 
                a supportive learning environment that adapts to individual student needs. Whether tackling 
                challenging homework assignments, preparing for exams, or seeking to deepen understanding of 
                specific subjects, Geaux HelpED provides the guidance students need to achieve their academic goals.
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
            <h2 className={styles.sectionTitle}>Our Resources</h2>
            <p className={styles.sectionSubtitle}>
              Discover the educational tools and support systems that help students excel
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
              <h2 className={styles.sectionTitle}>The Impact of Educational Support</h2>
              <p className={styles.benefitsIntro}>
                At Geaux HelpED, we believe that every student deserves the opportunity to reach their full potential.
                Our proven approach to educational support delivers measurable results:
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
                  Start Learning
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
              <h3 className={styles.caseStudySubtitle}>Riverside School District</h3>
              
              <p className={styles.caseStudyText}>
                When Riverside School District implemented Geaux HelpED as a supplementary resource for their students, 
                they were facing challenges with varied learning levels and limited teacher capacity to provide 
                individualized attention. After six months of implementation, they saw remarkable improvements in 
                student performance and engagement.
              </p>
              
              <blockquote className={styles.caseStudyQuote}>
                "Geaux HelpED has been transformative for our district. Students who previously struggled are now 
                actively participating and showing significant improvement. The platform's ability to personalize 
                learning while aligning with our curriculum standards has made it an invaluable resource for both 
                our teachers and students."
              </blockquote>
              
              <p className={styles.caseStudyAuthor}>
                — Dr. Sarah Martinez, Curriculum Director, Riverside School District
              </p>
            </div>
            
            <div className={styles.caseStudyResults}>
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>32%</h4>
                <p className={styles.resultLabel}>Increase in math proficiency</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>27%</h4>
                <p className={styles.resultLabel}>Improvement in reading scores</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>94%</h4>
                <p className={styles.resultLabel}>Teacher satisfaction rate</p>
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
            <h2 className={styles.contactTitle}>Ready to Boost Academic Performance?</h2>
            <p className={styles.contactText}>
              Whether you're a parent seeking support for your child, a school administrator looking to enhance your 
              educational resources, or a college student needing additional assistance, we have tailored solutions to meet your needs.
            </p>
            <div className={styles.contactButtons}>
              <motion.a 
                href="/contact?project=geaux-helped" 
                className={`${styles.contactButton} ${styles.primaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a 
                href="https://demo.geauxhelped.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.contactButton} ${styles.secondaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxHelpEDPage;
