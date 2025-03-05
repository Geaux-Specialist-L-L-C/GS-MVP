import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import AnimatedHero from '../../components/sections/AnimatedHero';
import { FaUserMd, FaCalendarAlt, FaPills, FaHeartbeat, FaUtensils, FaBell, FaRobot, FaShieldAlt, FaLock } from 'react-icons/fa';
import styles from '../../styles/ProjectDetail.module.css';

/**
 * Geaux Health Project Page
 * 
 * Detailed information about the Geaux Health project, showcasing
 * its AI-powered healthcare assistance features.
 */
const GeauxHealthPage = () => {
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
  
  // Features of Geaux Health
  const features = [
    {
      icon: <FaCalendarAlt size={36} className={styles.featureIcon} />,
      title: "Doctor Appointments",
      description: "AI-powered reminders and scheduling for doctor appointments."
    },
    {
      icon: <FaPills size={36} className={styles.featureIcon} />,
      title: "Medication Tracking",
      description: "Notifications for dosages and refills to ensure medication adherence."
    },
    {
      icon: <FaHeartbeat size={36} className={styles.featureIcon} />,
      title: "Symptom Monitoring",
      description: "Logs for pain levels, vitals, and mood tracking to monitor symptoms."
    },
    {
      icon: <FaUtensils size={36} className={styles.featureIcon} />,
      title: "Dietary & Hydration Monitoring",
      description: "Meal plans and hydration tracking based on dietary needs."
    },
    {
      icon: <FaBell size={36} className={styles.featureIcon} />,
      title: "Emergency Alerts",
      description: "SOS notifications sent to caregivers in critical situations."
    },
    {
      icon: <FaRobot size={36} className={styles.featureIcon} />,
      title: "AI-Generated Daily Care Plans",
      description: "Recommendations based on medical history and current health status."
    },
    {
      icon: <FaShieldAlt size={36} className={styles.featureIcon} />,
      title: "HIPAA-Compliant Data Storage",
      description: "Secure handling of patient records with HIPAA compliance."
    },
    {
      icon: <FaLock size={36} className={styles.featureIcon} />,
      title: "Encrypted Medical Records",
      description: "Only authorized users can access encrypted medical records."
    }
  ];

  // Benefits and outcomes
  const benefits = [
    "Improved medication adherence and health outcomes",
    "Reduced hospital readmissions through proactive symptom monitoring",
    "Enhanced caregiver coordination and support",
    "Personalized care plans tailored to individual needs",
    "Increased patient engagement and satisfaction",
    "Secure and compliant handling of sensitive medical data"
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
      title="Geaux Health"
      description="AI-powered healthcare assistance providing personalized support for individuals with special medical needs and their caregivers."
      keywords="healthcare, AI, medical assistance, patient support, caregiver coordination, symptom monitoring"
      canonical="/projects/geaux-health"
      ogImage="/images/projects/geaux-health-og.jpg"
    >
      <AnimatedHero 
        title="Geaux Health"
        subtitle="AI-Powered Healthcare Assistance for Personalized Medical Support"
        primaryCta="Explore Features"
        primaryCtaLink="#features"
        secondaryCta="Get Started"
        secondaryCtaLink="#contact"
        backgroundImage="/images/projects/geaux-health-hero.jpg"
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
            <h2 className={styles.sectionTitle}>Supporting Personalized Healthcare</h2>
            <div className={styles.overviewText}>
              <p>
                Geaux Health is our comprehensive healthcare assistance platform designed to provide personalized support 
                for individuals with special medical needs and their caregivers. Through AI-powered features, we aim to 
                enhance the quality of care, improve health outcomes, and simplify the management of medical conditions.
              </p>
              <p>
                Our platform combines advanced technology with compassionate care to create a supportive environment 
                that adapts to the unique needs of each patient. Whether managing chronic conditions, coordinating 
                care among multiple providers, or ensuring medication adherence, Geaux Health offers the tools and 
                resources needed to achieve optimal health and well-being.
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
            <h2 className={styles.sectionTitle}>Our Features</h2>
            <p className={styles.sectionSubtitle}>
              Discover the AI-powered tools and resources that support personalized healthcare
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
              <h2 className={styles.sectionTitle}>The Impact of Personalized Healthcare</h2>
              <p className={styles.benefitsIntro}>
                At Geaux Health, we believe that personalized healthcare can transform lives. Our platform delivers 
                measurable benefits that enhance the quality of care and improve health outcomes:
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
                  Start Your Journey
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
              <h3 className={styles.caseStudySubtitle}>Smith Family</h3>
              
              <p className={styles.caseStudyText}>
                When the Smith family started using Geaux Health to manage their son's chronic condition, they were 
                struggling to keep track of medications, appointments, and symptom changes. Within a few months, 
                they experienced significant improvements in their son's health and overall family well-being.
              </p>
              
              <blockquote className={styles.caseStudyQuote}>
                "Geaux Health has been a game-changer for our family. The AI-powered reminders and personalized care 
                plans have made it so much easier to manage our son's condition. We feel more in control and confident 
                in his care, and the support from the platform has been invaluable."
              </blockquote>
              
              <p className={styles.caseStudyAuthor}>
                — Jane Smith, Mother and Caregiver
              </p>
            </div>
            
            <div className={styles.caseStudyResults}>
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>50%</h4>
                <p className={styles.resultLabel}>Reduction in hospital visits</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>75%</h4>
                <p className={styles.resultLabel}>Increase in medication adherence</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>90%</h4>
                <p className={styles.resultLabel}>Caregiver satisfaction rate</p>
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
            <h2 className={styles.contactTitle}>Ready to Enhance Your Healthcare Experience?</h2>
            <p className={styles.contactText}>
              Whether you're managing a chronic condition, coordinating care for a loved one, or seeking to improve 
              your overall health, Geaux Health offers the tools and support you need. Start your journey with us today.
            </p>
            <div className={styles.contactButtons}>
              <motion.a 
                href="/contact?project=geaux-health" 
                className={`${styles.contactButton} ${styles.primaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a 
                href="https://demo.geauxhealth.com" 
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

export default GeauxHealthPage;
