import React from 'react';
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
    },
  ];

  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.title}>Our Projects</h2>
        <p className={styles.subtitle}>Discover the innovative solutions from Geaux Specialist LLC</p>

        <div className={styles.cardsGrid}>
          {projectCards.map((card) => (
            <FlipCard
              key={card.id}
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCardShowcase;