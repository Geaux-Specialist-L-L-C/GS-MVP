import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Layout
      title="About Us | GeauxSpecialist"
      description="Learn more about Geaux Specialist LLC, our mission, team, and the innovative solutions we provide."
      keywords="about, Geaux Specialist, mission, team, company overview"
      canonical="/about"
    >
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>About Us</h1>
            <p className={styles.heroSubtitle}>
              Discover our mission, values, and the team behind Geaux Specialist LLC
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.companyOverview}>
        <div className="container">
          <motion.div
            className={styles.overviewContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              Company Overview
            </motion.h2>
            <motion.p className={styles.sectionText} variants={itemVariants}>
              Geaux Specialist LLC is dedicated to providing innovative solutions that empower businesses and individuals to achieve their goals. Our team of experts leverages cutting-edge technology to deliver personalized services and products that drive success.
            </motion.p>
            <motion.p className={styles.sectionText} variants={itemVariants}>
              Founded in 2020, we have quickly established ourselves as a leader in the industry, known for our commitment to excellence and customer satisfaction. Our diverse portfolio includes AI-driven educational platforms, digital growth strategies, creative marketplaces, and more.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className="container">
          <motion.div
            className={styles.missionContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              Our Mission
            </motion.h2>
            <motion.p className={styles.sectionText} variants={itemVariants}>
              Our mission is to harness the power of technology to create solutions that make a positive impact on society. We believe in the transformative potential of innovation and strive to develop products that enhance the lives of our customers and communities.
            </motion.p>
            <motion.p className={styles.sectionText} variants={itemVariants}>
              We are committed to fostering a culture of creativity, collaboration, and continuous improvement. Our team works tirelessly to stay ahead of industry trends and deliver solutions that are not only effective but also sustainable and ethical.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <motion.div
            className={styles.teamContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              Meet Our Team
            </motion.h2>
            <motion.p className={styles.sectionText} variants={itemVariants}>
              Our team is composed of talented professionals with diverse backgrounds and expertise. We are passionate about what we do and are dedicated to delivering the best possible results for our clients.
            </motion.p>
            <motion.div className={styles.teamGrid} variants={containerVariants}>
              {/* Team member cards */}
              <motion.div className={styles.teamMember} variants={itemVariants}>
                <img
                  src="/images/team/member1.jpg"
                  alt="Team Member 1"
                  className={styles.teamMemberImage}
                />
                <h3 className={styles.teamMemberName}>John Doe</h3>
                <p className={styles.teamMemberRole}>CEO & Founder</p>
              </motion.div>
              <motion.div className={styles.teamMember} variants={itemVariants}>
                <img
                  src="/images/team/member2.jpg"
                  alt="Team Member 2"
                  className={styles.teamMemberImage}
                />
                <h3 className={styles.teamMemberName}>Jane Smith</h3>
                <p className={styles.teamMemberRole}>CTO</p>
              </motion.div>
              <motion.div className={styles.teamMember} variants={itemVariants}>
                <img
                  src="/images/team/member3.jpg"
                  alt="Team Member 3"
                  className={styles.teamMemberImage}
                />
                <h3 className={styles.teamMemberName}>Alice Johnson</h3>
                <p className={styles.teamMemberRole}>Lead Developer</p>
              </motion.div>
              <motion.div className={styles.teamMember} variants={itemVariants}>
                <img
                  src="/images/team/member4.jpg"
                  alt="Team Member 4"
                  className={styles.teamMemberImage}
                />
                <h3 className={styles.teamMemberName}>Bob Brown</h3>
                <p className={styles.teamMemberRole}>Project Manager</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className="container">
          <motion.div
            className={styles.contactContent}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
              Get in Touch
            </motion.h2>
            <motion.p className={styles.sectionText} variants={itemVariants}>
              We would love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out to us.
            </motion.p>
            <motion.div className={styles.contactInfo} variants={containerVariants}>
              <motion.div className={styles.contactItem} variants={itemVariants}>
                <h3 className={styles.contactTitle}>Email</h3>
                <p className={styles.contactText}>
                  <a href="mailto:info@geauxspecialist.com">info@geauxspecialist.com</a>
                </p>
              </motion.div>
              <motion.div className={styles.contactItem} variants={itemVariants}>
                <h3 className={styles.contactTitle}>Phone</h3>
                <p className={styles.contactText}>
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </p>
              </motion.div>
              <motion.div className={styles.contactItem} variants={itemVariants}>
                <h3 className={styles.contactTitle}>Address</h3>
                <p className={styles.contactText}>
                  123 Tech Plaza, Suite 500, Baton Rouge, LA 70808, United States
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
