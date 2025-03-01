import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from '../ui/FlipCard';
import styles from '../../styles/FlipCardShowcase.module.css';

/**
 * FlipCardShowcase
 * 
 * A demonstration component that displays multiple FlipCard components
 * in a grid layout, showcasing different projects under Geaux Specialist LLC.
 */
const FlipCardShowcase = () => {
  // Content for the project cards with comprehensive descriptions
  const projectCards = [
    {
      id: 0,
      front: {
        title: 'Geaux Specialist LLC',
        subtitle: 'Parent Company',
      },
      back: {
        description: 'The innovative force behind our diverse portfolio of projects. We harness advanced technology and creative strategies to deliver personalized solutions that make a meaningful impact.',
        ctaText: 'About Us',
        ctaLink: '/about',
      },
      ariaLabels: {
        front: 'Geaux Specialist LLC information',
        back: 'About Geaux Specialist LLC'
      }
    },
    {
      id: 1,
      front: {
        title: 'Geaux Academy',
        subtitle: 'AI-Driven Educational Platform',
      },
      back: {
        description: 'Revolutionizing K-12 education with personalized learning experiences. Our platform leverages OpenAI's GPT to develop custom curricula that adapt to each student's unique learning style.',
        ctaText: 'Learn More',
        ctaLink: '/projects/geaux-academy',
      },
      ariaLabels: {
        front: 'Geaux Academy information',
        back: 'Learn about Geaux Academy'
      }
    },
    {
      id: 2,
      front: {
        title: 'Geaux HelpED',
        subtitle: 'Educational Support Resources',
      },
      back: {
        description: 'Providing essential educational support with on-demand tutoring, step-by-step guides, interactive learning tools, and a comprehensive resource library for students of all levels.',
        ctaText: 'Discover',
        ctaLink: '/projects/geaux-helped',
      },
      ariaLabels: {
        front: 'Geaux HelpED information',
        back: 'Learn about Geaux HelpED'
      }
    },
    {
      id: 3,
      front: {
        title: 'ReanimatED Echos',
        subtitle: 'Legacy Preservation Technology',
      },
      back: {
        description: 'Bringing cherished memories to life through AI-powered digital preservation. Transform photos, documents, and personal narratives into interactive, voice-enhanced stories.',
        ctaText: 'Explore',
        ctaLink: '/projects/reanimated-echos',
      },
      ariaLabels: {
        front: 'ReanimatED Echos information',
        back: 'Learn about ReanimatED Echos'
      }
    },
    {
      id: 4,
      front: {
        title: 'SEO Geaux',
        subtitle: 'Digital Growth Strategies',
      },
      back: {
        description: 'Strategic solutions for enhancing online visibility with tailored SEO strategies covering keyword research, content marketing, and performance analytics to drive sustainable online success.',
        ctaText: 'Optimize',
        ctaLink: '/projects/seo-geaux',
      },
      ariaLabels: {
        front: 'SEO Geaux information',
        back: 'Learn about SEO Geaux'
      }
    },
    {
      id: 5,
      front: {
        title: 'Geaux Emporium',
        subtitle: 'Creative Marketplace Platform',
      },
      back: {
        description: 'An innovative online marketplace showcasing educational materials to handcrafted items. Supporting creative entrepreneurs and discerning consumers with secure transactions.',
        ctaText: 'Shop Now',
        ctaLink: '/projects/geaux-emporium',
      },
      ariaLabels: {
        front: 'Geaux Emporium information',
        back: 'Learn about Geaux Emporium'
      }
    },
  ];

  // Animation variants for staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.showcase} id="projects-showcase">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.subtitle}>Discover the innovative solutions from Geaux Specialist LLC</p>
        </motion.div>

        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectCards.map((card) => (
            <motion.div 
              key={card.id} 
              variants={cardVariants}
            >
              <FlipCard
                frontContent={
                  <div className={styles.cardFront}>
                    <h3 className={styles.cardTitle}>{card.front.title}</h3>
                    <p className={styles.cardSubtitle}>{card.front.subtitle}</p>
                  </div>
                }
                backContent={
                  <div className={styles.cardBack}>
                    <p className={styles.cardDescription}>{card.back.description}</p>
                    <a href={card.back.ctaLink} className={styles.cardCta}>
                      {card.back.ctaText}
                    </a>
                  </div>
                }
                flipOnClick={true}
                width={280}
                height={220}
                frontAriaLabel={card.ariaLabels?.front || `${card.front.title} front`}
                backAriaLabel={card.ariaLabels?.back || `${card.front.title} details`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlipCardShowcase;