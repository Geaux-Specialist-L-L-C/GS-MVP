import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const GeauxEmporium = () => {
  const features = [
    {
      title: 'Curated Resources',
      description: 'Carefully selected educational materials and resources for healthcare professionals.',
      icon: '/images/curated-resources-icon.svg',
    },
    {
      title: 'Personalized Recommendations',
      description: 'AI-driven recommendations based on specialties, interests, and previous purchases.',
      icon: '/images/recommendations-icon.svg',
    },
    {
      title: 'Seamless Shopping Experience',
      description: 'User-friendly interface designed for busy healthcare professionals.',
      icon: '/images/shopping-experience-icon.svg',
    },
    {
      title: 'Continuing Education',
      description: 'Access to materials that qualify for continuing education credits.',
      icon: '/images/continuing-education-icon.svg',
    },
  ];

  return (
    <Layout title="Geaux Emporium">
      <Hero 
        title="Geaux Emporium"
        subtitle="Your premier destination for specialized healthcare educational resources and materials."
        ctaText="Browse Store"
        ctaLink="#store-categories"
        backgroundImage="/images/geaux-emporium-hero.jpg"
      />

      <section className="project-overview">
        <div className="container">
          <div className="project-description">
            <h2>Your One-Stop Educational Resource Shop</h2>
            <p>
              Geaux Emporium is an e-commerce platform specifically designed for healthcare 
              professionals seeking educational resources, reference materials, and learning tools.
              Our carefully curated selection focuses on high-quality, evidence-based materials that 
              enhance clinical practice and knowledge.
            </p>
            <p>
              Whether you're a student, practicing clinician, or educator, Geaux Emporium offers 
              resources tailored to your specific needs and specialty, with seamless integration 
              with our other platforms for a unified learning experience.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        title="Platform Features"
        subtitle="Discover what makes Geaux Emporium the preferred marketplace for healthcare educational resources."
        features={features}
      />

      <section id="store-categories" className="store-categories">
        <div className="container">
          <h2 className="section-title">Store Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Textbooks & References</h3>
              <p>Comprehensive textbooks and reference guides covering all medical specialties.</p>
              <Button 
                variant="outline"
                onClick={() => window.open('https://emporium.geauxspecialist.com/textbooks', '_blank')}
              >
                View Collection
              </Button>
            </div>
            <div className="category-card">
              <h3>Digital Learning Tools</h3>
              <p>Interactive applications, simulations, and digital learning aids.</p>
              <Button 
                variant="outline"
                onClick={() => window.open('https://emporium.geauxspecialist.com/digital-tools', '_blank')}
              >
                View Collection
              </Button>
            </div>
            <div className="category-card">
              <h3>Clinical Practice Materials</h3>
              <p>Quick reference guides, checklists, and practical tools for clinical settings.</p>
              <Button 
                variant="outline"
                onClick={() => window.open('https://emporium.geauxspecialist.com/clinical-materials', '_blank')}
              >
                View Collection
              </Button>
            </div>
            <div className="category-card">
              <h3>Continuing Education</h3>
              <p>Resources that qualify for continuing education credits across specialties.</p>
              <Button 
                variant="outline"
                onClick={() => window.open('https://emporium.geauxspecialist.com/continuing-education', '_blank')}
              >
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta">
        <div className="container">
          <h2>Ready to enhance your medical knowledge?</h2>
          <p>Explore our collection of premium educational resources designed for healthcare professionals.</p>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => window.open('https://emporium.geauxspecialist.com', '_blank')}
          >
            Visit Geaux Emporium
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxEmporium;
