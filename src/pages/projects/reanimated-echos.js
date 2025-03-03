import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import AnimatedHero from '../../components/sections/AnimatedHero';
import { FaMicrophone, FaHistory, FaRobot, FaMagic, FaShieldAlt, FaCloudUploadAlt } from 'react-icons/fa';
import styles from '../../styles/ProjectDetail.module.css';

/**
 * ReanimatED Echos Project Page
 * 
 * Detailed information about the ReanimatED Echos project, showcasing
 * its innovative AI-powered legacy preservation technology.
 */
const ReanimatedEchosPage = () => {
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
  
  // Features of ReanimatED Echos
  const features = [
    {
      icon: <FaMicrophone size={36} className={styles.featureIcon} />,
      title: "Voice Synthesis Technology",
      description: "Advanced AI algorithms that recreate voices with remarkable accuracy based on audio samples, allowing memories to be shared in a loved one's own voice."
    },
    {
      icon: <FaHistory size={36} className={styles.featureIcon} />,
      title: "Memory Preservation",
      description: "Digital archiving of photos, videos, and documents with intelligent organization and connection of related memories across different media."
    },
    {
      icon: <FaRobot size={36} className={styles.featureIcon} />,
      title: "AI-Generated Narratives",
      description: "Transform written stories and documented memories into compelling narratives that can be experienced through interactive storytelling."
    },
    {
      icon: <FaMagic size={36} className={styles.featureIcon} />,
      title: "Photo Enhancement",
      description: "Restore and enhance old or damaged photographs using state-of-the-art machine learning algorithms to bring clarity to cherished moments."
    },
    {
      icon: <FaShieldAlt size={36} className={styles.featureIcon} />,
      title: "Secure Family Vault",
      description: "End-to-end encrypted storage for all your family's precious memories with granular access controls to share with selected family members."
    },
    {
      icon: <FaCloudUploadAlt size={36} className={styles.featureIcon} />,
      title: "Cross-Platform Access",
      description: "Access your preserved memories through web, mobile apps, and smart home devices for seamless integration into modern family life."
    }
  ];

  // Benefits and outcomes
  const benefits = [
    "Connect generations through shared stories and experiences",
    "Preserve family history in an engaging and interactive format",
    "Create lasting legacies that can be passed down to future generations",
    "Help families cope with loss by maintaining connections to loved ones",
    "Facilitate family storytelling with AI-assisted narrative creation",
    "Bring historical context to personal and family stories"
  ];

  // Technologies used
  const technologies = [
    "TensorFlow", "PyTorch", "NVIDIA RTX Voice", 
    "Azure Cognitive Services", "React Native", "Node.js", 
    "MongoDB", "AWS S3", "OpenAI GPT-4", "Flutter"
  ];

  return (
    <Layout 
      title="ReanimatED Echos"
      description="AI-powered legacy preservation technology that transforms personal narratives and photos into interactive voice-enhanced stories."
      keywords="AI voice synthesis, memory preservation, legacy technology, family history, voice recreation, digital memories"
      canonical="/projects/reanimated-echos"
      ogImage="/images/projects/reanimated-echos-og.jpg"
    >
      <AnimatedHero 
        title="ReanimatED Echos"
        subtitle="Preserving legacies through AI-powered voice synthesis and interactive storytelling"
        primaryCta="Explore Technology"
        primaryCtaLink="#features"
        secondaryCta="Get Started"
        secondaryCtaLink="#contact"
        backgroundImage="/images/projects/reanimated-echos-hero.jpg"
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
            <h2 className={styles.sectionTitle}>Preserving Memories, Bringing Stories to Life</h2>
            <div className={styles.overviewText}>
              <p>
                ReanimatED Echos is our groundbreaking platform that combines AI voice synthesis, 
                natural language processing, and advanced media restoration to preserve personal 
                and family legacies in a uniquely immersive way.
              </p>
              <p>
                Our technology allows families to transform photographs, written memoirs, audio recordings, 
                and video clips into interactive stories narrated in the authentic voice of loved ones. 
                Whether preserving the wisdom of elderly family members for future generations or 
                creating a living memorial, ReanimatED Echos maintains the emotional connection 
                that traditional preservation methods often miss.
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
            <h2 className={styles.sectionTitle}>Technology Features</h2>
            <p className={styles.sectionSubtitle}>
              Discover how ReanimatED Echos preserves the essence of personal stories
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
              <h2 className={styles.sectionTitle}>Why Preserve Family Stories</h2>
              <p className={styles.benefitsIntro}>
                Memories are our most precious possessions, yet they fade with time. 
                ReanimatED Echos helps families preserve their stories with these key benefits:
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
                  Start Your Legacy
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
              <h2 className={styles.caseStudyTitle}>Family Legacy Story</h2>
              <h3 className={styles.caseStudySubtitle}>The Thompson Family Archive</h3>
              
              <p className={styles.caseStudyText}>
                When the Thompson family discovered boxes of letters, photographs, and audio tapes from 
                their grandfather who immigrated to America in the 1940s, they wanted to preserve these 
                memories for future generations. Using ReanimatED Echos, they digitized and enhanced the 
                materials, creating an interactive family archive.
              </p>
              
              <blockquote className={styles.caseStudyQuote}>
                "Hearing my grandfather's voice tell his immigration story to my children was an 
                incredibly moving experience. ReanimatED Echos didn't just preserve his memories—it 
                brought them to life in a way that feels authentic and meaningful for our entire family."
              </blockquote>
              
              <p className={styles.caseStudyAuthor}>
                — Jennifer Thompson, Family Historian
              </p>
            </div>
            
            <div className={styles.caseStudyResults}>
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>84</h4>
                <p className={styles.resultLabel}>Years of family history preserved</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>1,200+</h4>
                <p className={styles.resultLabel}>Photos digitally restored</p>
              </div>
              
              <div className={styles.resultCard}>
                <h4 className={styles.resultValue}>14</h4>
                <p className={styles.resultLabel}>Family members connected</p>
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
            <h2 className={styles.contactTitle}>Preserve Your Family's Legacy</h2>
            <p className={styles.contactText}>
              Begin your family's preservation journey today. Our team will guide you through the process of 
              collecting, digitizing, and transforming your precious memories into an interactive legacy.
            </p>
            <div className={styles.contactButtons}>
              <motion.a 
                href="/contact?project=reanimated-echos" 
                className={`${styles.contactButton} ${styles.primaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
              <motion.a 
                href="mailto:legacy@reanimatedechos.com" 
                className={`${styles.contactButton} ${styles.secondaryButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Information
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ReanimatedEchosPage;
