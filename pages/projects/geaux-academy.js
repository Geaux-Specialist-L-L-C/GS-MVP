// Geaux Academy project page
import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import FeaturesSection from '../../components/sections/FeaturesSection';
import Button from '../../components/ui/Button';

const GeauxAcademy = () => {
  // Sample features data for Geaux Academy
  const features = [
    {
      title: 'Specialized Courses',
      description: 'Expert-led courses tailored to specific healthcare specialties and educational needs.',
      icon: '/images/specialized-courses-icon.svg',
    },
    {
      title: 'Interactive Learning',
      description: 'Engaging multimedia content and interactive exercises for enhanced comprehension.',
      icon: '/images/interactive-learning-icon.svg',
    },
    {
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and progress monitoring for students and educators.',
      icon: '/images/progress-tracking-icon.svg',
    },
    {
      title: 'Certification Paths',
      description: 'Structured learning paths leading to professional certifications and credentials.',
      icon: '/images/certification-paths-icon.svg',
    },
  ];

  return (
    <Layout title="Geaux Academy">
      <Hero 
        title="Geaux Academy"
        subtitle="Cutting-edge education platform offering specialized learning experiences for healthcare professionals."
        ctaText="Learn More"
        ctaLink="#features"
        backgroundImage="/images/geaux-academy-hero.jpg"
      />

      <section className="project-overview">
        <div className="container">
          <div className="project-description">
            <h2>Transforming Healthcare Education</h2>
            <p>
              Geaux Academy is our premier educational platform designed to address the specific 
              learning needs of healthcare professionals. From continuing education to specialized 
              certifications, our platform provides comprehensive resources to enhance medical 
              knowledge and skills.
            </p>
            <p>
              With a focus on interactive learning and practical application, Geaux Academy bridges 
              the gap between theoretical knowledge and clinical practice, enabling healthcare 
              providers to deliver better patient care.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="features"
        title="Platform Features"
        subtitle="Discover the innovative tools and resources available through Geaux Academy."
        features={features}
      />

      <section className="project-cta">
        <div className="container">
          <h2>Ready to enhance your healthcare knowledge?</h2>
          <p>Join Geaux Academy today and take your medical career to the next level.</p>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => window.open('https://academy.geauxspecialist.com', '_blank')}
          >
            Visit Geaux Academy
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxAcademy;