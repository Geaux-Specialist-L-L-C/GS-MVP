import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import AnimatedHero from '../../components/sections/AnimatedHero';
import { FaStore, FaHandshake, FaPalette, FaCreditCard, FaChartBar, FaGlobeAmericas } from 'react-icons/fa';
import styles from '../../styles/ProjectDetail.module.css';

/**
 * Geaux Emporium Project Page
 * 
 * Detailed information about the Geaux Emporium project, showcasing
 * our creative marketplace platform for artists, crafters, and makers.
 */
const GeauxEmporiumPage = () => {
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
  
  // Features of Geaux Emporium
  const features = [
    {
      icon: <FaStore size={36} className={styles.featureIcon} />,
      title: "Customizable Storefronts",
      description: "Personalized digital shops that showcase creators' unique brands with customizable themes, layouts, and promotional tools."
    },
    {
      icon: <FaHandshake size={36} className={styles.featureIcon} />,
      title: "Creator Community",
      description: "Vibrant network where artists and makers connect, collaborate, and share insights to grow their creative businesses."
    },
    {
      icon: <FaPalette size={36} className={styles.featureIcon} />,
      title: "AI-Enhanced Creation Tools",
      description: "Innovative design assistance that helps creators enhance their products with AI-powered suggestions and trending market insights."
    },
    {
      icon: <FaCreditCard size={36} className={styles.featureIcon} />,
      title: "Seamless Transactions",
      description: "Secure payment processing with multiple payment options, automatic tax calculations, and streamlined order management."
    },
    {
      icon: <FaChartBar size={36} className={styles.featureIcon} />,
      title: "Business Analytics",
      description: "Comprehensive performance metrics and insights that help creators track sales, understand customer behavior, and optimize strategies."
    },
    {
      icon: <FaGlobeAmericas size={36} className={styles.featureIcon} />,
      title: "Global Marketplace",
      description: "Worldwide exposure connecting creators with international customers, including multi-currency support and localized shopping experiences."
    }
  ];

  // Benefits and outcomes
  const benefits = [
    "Average 43% increase in sales for creators after three months on the platform",
    "Creative community of over 15,000 makers across 52 countries",
    "Lower commission rates than competing marketplaces (12% vs. industry average 25%)",
    "AI-powered trend analysis helps creators stay ahead of market demands",
    "Built-in marketing tools that enhance product visibility and reach",
    "Specialized categories that help unique products find their niche audience"
  ];

  // Technologies used
  const technologies = [
    "React", "Next.js", "GraphQL", 
    "Node.js", "PostgreSQL", "Redis", 
    "Stripe API", "AWS", "TensorFlow", 
    "Elasticsearch", "Docker"
  ];

  return (
    <Layout 
      title="Geaux Emporium"
      description="A creative marketplace platform connecting unique makers with enthusiastic buyers through innovative e-commerce solutions."
      keywords="creative marketplace, handmade products, artisan marketplace, e-commerce platform, creators, makers"
      canonical="/projects/geaux-emporium"
      ogImage="/images/projects/geaux-emporium-og.jpg"
    >
      <AnimatedHero 
        title="Geaux Emporium"
        subtitle="Empowering creators and makers with an innovative marketplace platform"
        primaryCta="Explore Platform"
        primaryCtaLink="#features"
        secondaryCta="Join Marketplace"
        secondaryCtaLink="#contact"
        backgroundImage="/images/projects/geaux-emporium-hero.jpg"
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
            <h2 className={styles.sectionTitle}>Where Creativity Meets Commerce</h2>
            <div className={styles.overviewText}>
              <p>
                Geaux Emporium is our specialized marketplace platform that bridges the gap between independent 
                creators and consumers seeking authentic, unique products. We've designed a digital ecosystem 
                where artisans, crafters, designers, and makers can showcase their work, build their brands, 
                and reach customers around the world.
              </p>
              <p>
                Unlike conventional e-commerce platforms, Geaux Emporium emphasizes the stories behind products 
                and the people who make them. Our technology enhances the creator-consumer relationship through 
                immersive product presentations, direct communication channels, and a supportive community that 
                celebrates creativity and craftsmanship in all its forms.
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
            <h2 className={styles.sectionTitle}>Platform Features</h2>
            <p className={styles.sectionSubtitle}>
              Discover the tools and capabilities that help creators thrive in our marketplace
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
              <h2 className={styles.sectionTitle}>The Emporium Advantage</h2>
              <p className={styles.benefitsIntro}>
                Joining Geaux Emporium gives creators more than just a place to sell—it provides a 
                complete ecosystem for growing a sustainable creative business:
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
                  Join Our Community
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
              <h2 className={styles.caseStudyTitle}>Creator Spotlight</h2>
              <h3 className={styles.caseStudySubtitle}>Willow Craft Ceramics</h3>
              
              <p className={styles.caseStudyText}>
                When ceramic artist Elise Willow joined Geaux Emporium, she was selling her handcrafted 
                pottery through local craft fairs and a basic personal website, reaching a limited audience. 
                Within six months on our platform, her business transformed dramatically with expanded reach, 
                streamlined operations, and a thriving community of loyal customers.
              </p>
              
              <blockquote className={styles.caseStudyQuote}>
                "Geaux Emporium has completely revolutionized my pottery business. The platform's tools helped me 
                create a beautiful online presence that reflects my brand, while the community aspect connects me 
                with customers who truly appreciate handcrafted ceramics. The business analytics have been invaluable 
                in helping me understand which products resonate most with my audience."
              </blockquote>
              
              <p className={styles.caseStudyAuthor}>
                — Elise Willow, Founder of Willow Craft Ceramics
              </p>
            </div>
            
            <div className={styles.caseStudyResults}>
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>215%</h4>
                <p className={styles.resultLabel}>Increase in monthly sales</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>65%</h4>
                <p className={styles.resultLabel}>International customer growth</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>3,500+</h4>
                <p className={styles.resultLabel}>Followers gained</p>
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
            <h2 className={styles.contactTitle}>Ready to Share Your Creations?</h2>
            <p className={styles.contactText}>
              Join thousands of creative entrepreneurs who have found their home at Geaux Emporium. 
              Our platform provides everything you need to showcase your products, connect with customers, 
              and grow your creative business.
            </p>
            <div className={styles.contactButtons}>
              <motion.a 
                href="/contact?project=geaux-emporium" 
                className={`${styles.contactButton} ${styles.primaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply as Creator
              </motion.a>
              <motion.a 
                href="https://www.geauxemporium.com/explore" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${styles.contactButton} ${styles.secondaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Marketplace
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxEmporiumPage;
