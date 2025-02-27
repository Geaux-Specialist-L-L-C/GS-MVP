import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';

const FeaturesSection = dynamic(() => import('../components/sections/FeaturesSection'), { ssr: false });

export default function Home() {
  const features = [
    {
      title: 'Geaux Academy',
      description: 'Cutting-edge education platform offering specialized learning experiences.',
      icon: '/images/geaux-academy-icon.svg',
    },
    {
      title: 'Geaux HelpED',
      description: 'Healthcare management solutions designed to streamline patient care.',
      icon: '/images/geaux-helped-icon.svg',
    },
    {
      title: 'ReanimatED Echos',
      description: 'Advanced voice processing technology for the healthcare industry.',
      icon: '/images/reanimated-echos-icon.svg',
    },
    {
      title: 'Geaux Emporium',
      description: 'E-commerce platform specializing in educational resources and materials.',
      icon: '/images/geaux-emporium-icon.svg',
    },
  ];

  return (
    <Layout title="Home">
      <Hero 
        title="Welcome to GeauxSpecialist"
        subtitle="Innovative solutions across education, healthcare, technology, and e-commerce."
        ctaText="Explore Our Projects"
        ctaLink="/projects"
        backgroundImage="/images/hero-background.jpg"
      />

      <FeaturesSection 
        title="Our Projects"
        subtitle="Discover the innovative solutions we're building to address real-world challenges."
        features={features}
      />

      <section className="cta-section">
        <div className="container">
          <h2>Ready to learn more about what we do?</h2>
          <p>Contact us today to discuss how GeauxSpecialist can help bring your ideas to life.</p>
          <Button 
            variant="secondary" 
            size="large"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </section>
    </Layout>
  );
}
