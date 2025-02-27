import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const ReanimatEDEchos = () => {
  // Sample features data for ReanimatED Echos
  const features = [
    {
      title: 'Voice Recognition',
      description: 'Advanced voice recognition technology specifically calibrated for medical terminology.',
      icon: '/images/voice-recognition-icon.svg',
    },
    {
      title: 'Real-time Analysis',
      description: 'Process and analyze voice data in real-time for immediate clinical documentation.',
      icon: '/images/realtime-analysis-icon.svg',
    },
    {
      title: 'Integration Capability',
      description: 'Seamless integration with existing EHR systems and healthcare platforms.',
      icon: '/images/integration-icon.svg',
    },
    {
      title: 'Medical Transcription',
      description: 'Accurate medical transcription with contextual understanding of healthcare workflows.',
      icon: '/images/transcription-icon.svg',
    },
  ];

  return (
    <Layout title="ReanimatED Echos">
      <Hero 
        title="ReanimatED Echos"
        subtitle="Advanced voice processing technology transforming clinical documentation and communication."
        ctaText="Discover How It Works"
        ctaLink="#how-it-works"
        backgroundImage="/images/reanimated-echos-hero.jpg"
      />

      <section className="project-overview">
        <div className="container">
          <div className="project-description">
            <h2>Revolutionizing Clinical Communication</h2>
            <p>
              ReanimatED Echos leverages cutting-edge voice processing technology to transform how 
              healthcare providers document and communicate patient care. By converting spoken 
              words into structured clinical documentation, our system reduces administrative burden 
              and improves data accuracy.
            </p>
            <p>
              Designed specifically for medical environments, our technology understands complex 
              medical terminology and adapts to various clinical workflows, making it an invaluable 
              tool for healthcare professionals seeking efficiency without compromising quality.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        title="Key Capabilities"
        subtitle="Explore the innovative features that make ReanimatED Echos a game-changer in healthcare."
        features={features}
      />

      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Voice Capture</h3>
              <p>Advanced microphones capture clear voice input even in noisy clinical environments.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Speech Processing</h3>
              <p>Our AI engine processes speech, recognizing medical terminology and contextual meaning.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Document Generation</h3>
              <p>Structured clinical documentation is automatically generated based on processed speech.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>EHR Integration</h3>
              <p>Generated documentation seamlessly integrates with existing electronic health record systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta">
        <div className="container">
          <h2>Experience the future of clinical documentation</h2>
          <p>Schedule a demonstration to see how ReanimatED Echos can transform your clinical workflows.</p>
          <Button 
            variant="primary" 
            size="large"
            onClick={() => window.open('https://echos.geauxspecialist.com', '_blank')}
          >
            Request a Demo
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ReanimatEDEchos;
