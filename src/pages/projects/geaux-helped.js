import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const GeauxHelpED = () => {
  const features = [
    {
      title: 'On-Demand Tutoring',
      description: 'Access expert tutors across various subjects whenever needed, with personalized guidance for specific academic challenges.',
      icon: '/images/tutoring-icon.svg',
    },
    {
      title: 'Step-by-Step Guides',
      description: 'Comprehensive, clear instruction materials that break down complex topics into manageable, easy-to-follow segments.',
      icon: '/images/guides-icon.svg',
    },
    {
      title: 'Interactive Learning Tools',
      description: 'Engaging, hands-on learning experiences that promote active participation and deeper understanding of concepts.',
      icon: '/images/interactive-tools-icon.svg',
    },
    {
      title: 'Resource Library',
      description: 'Extensive collection of educational materials, reference guides, practice tests, and supplementary learning resources.',
      icon: '/images/library-icon.svg',
    },
  ];

  return (
    <Layout title="Geaux HelpED | Educational Support Resources">
      <Hero 
        title="Geaux HelpED"
        subtitle="Essential educational support and resources for students of all levels"
        ctaText="Explore Resources"
        ctaLink="#features"
        backgroundImage="/images/geaux-helped-hero.jpg"
      />

      <section className="project-overview py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Empowering Academic Success</h2>
            <p className="text-lg mb-6">
              Geaux HelpED is dedicated to providing essential educational support and resources for 
              students of all levels. Our comprehensive platform offers the tools and assistance needed 
              to overcome academic challenges and build confidence in learning.
            </p>
            <p className="text-lg mb-6">
              Through our on-demand tutoring services, students can access expert guidance when they 
              need it most. Our step-by-step guides break down complex topics into manageable segments, 
              making difficult concepts easier to understand and master.
            </p>
            <p className="text-lg mb-6">
              The interactive learning tools on our platform promote active engagement with material, 
              while our extensive resource library provides supplementary materials to support diverse 
              learning needs and styles. This combined approach helps students build confidence and 
              overcome challenges in their academic journeys.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="features"
        title="Support Features"
        subtitle="Discover the comprehensive educational resources available through Geaux HelpED"
        features={features}
      />

      <section className="benefits py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits for Students</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-3">Build Confidence</h3>
              <p>
                Overcome academic challenges with personalized support that reinforces understanding 
                and builds self-confidence in learning abilities.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-3">Flexible Learning</h3>
              <p>
                Access educational support on your schedule, with resources available 24/7 to 
                accommodate different learning paces and timeframes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p>
                Receive customized assistance that addresses your specific learning needs and 
                academic goals through tailored resources and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="target-audience py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Who We Support</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">K-12 Students</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Elementary students building foundational skills</li>
                <li>Middle school students navigating increasing academic demands</li>
                <li>High school students preparing for college and career readiness</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">College Students</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Undergraduate students mastering core curriculum</li>
                <li>Graduate students conducting advanced research</li>
                <li>Professional students preparing for specialized certifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Academic Journey Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Access the educational support you need to excel in your studies and build confidence in your learning abilities.</p>
          <Button 
            variant="light" 
            size="large"
            onClick={() => window.open('https://helped.geauxspecialist.com', '_blank')}
          >
            Access Educational Support
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxHelpED;
