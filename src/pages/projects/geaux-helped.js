import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const GeauxHelpED = () => {
  const features = [
    {
      title: 'Patient Management',
      description: 'Streamlined patient data management with intuitive interfaces for healthcare providers.',
      icon: '/images/patient-management-icon.svg',
    },
    {
      title: 'Treatment Tracking',
      description: 'Comprehensive treatment tracking and outcome documentation for improved care continuity.',
      icon: '/images/treatment-tracking-icon.svg',
    },
    {
      title: 'Telehealth Integration',
      description: 'Seamless integration with telehealth services for remote patient consultations.',
      icon: '/images/telehealth-icon.svg',
    },
    {
      title: 'Clinical Analytics',
      description: 'Advanced analytics and reporting tools to optimize clinical workflows and outcomes.',
      icon: '/images/analytics-icon.svg',
    },
  ];

  return (
    <Layout title="Geaux HelpED">
      <Hero 
        title="Geaux HelpED"
        subtitle="Healthcare management solutions designed to streamline patient care and clinical operations."
        ctaText="Explore Features"
        ctaLink="#features"
        backgroundImage="/images/geaux-helped-hero.jpg"
      />

      <section className="project-overview">
        <div className="container">
          <div className="project-description">
            <h2>Transforming Healthcare Delivery</h2>
            <p>
              Geaux HelpED is a comprehensive healthcare management platform developed to address 
              the complex operational challenges faced by modern healthcare providers. Our solution 
              integrates patient management, clinical documentation, and analytics in a unified system.
            </p>
            <p>
              By streamlining administrative workflows and enhancing clinical decision-making, 
              Geaux HelpED allows healthcare professionals to focus more on patient care and less on 
              paperwork and manual processes.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="features"
        title="Key Features"
        subtitle="Explore the innovative capabilities of our healthcare management platform."
        features={features}
      />

      <section className="use-cases">
        <div className="container">
          <h2 className="section-title">Use Cases</h2>
          <div className="use-cases-grid">
            <div className="use-case">
              <h3>Emergency Departments</h3>
              <p>
                Streamlining patient triage, treatment tracking, and departmental workflows in 
                high-pressure emergency settings.
              </p>
            </div>
            <div className="use-case">
              <h3>Primary Care Practices</h3>
              <p>
                Managing patient appointments, records, and follow-ups for continuous care provision.
              </p>
            </div>
            <div className="use-case">
              <h3>Specialty Clinics</h3>
              <p>
                Supporting specialized treatment protocols and patient management for focused care delivery.
              </p>
            </div>
            <div className="use-case">
              <h3>Telehealth Services</h3>
              <p>
                Enabling remote consultations and follow-ups with integrated patient history and data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta">
        <div className="container">
          <h2>Ready to transform your healthcare practice?</h2>
          <p>Schedule a demonstration to see how Geaux HelpED can optimize your clinical operations.</p>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => window.open('https://helped.geauxspecialist.com', '_blank')}
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxHelpED;
