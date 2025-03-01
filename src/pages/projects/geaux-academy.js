import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const GeauxAcademy = () => {
  // Features data for Geaux Academy based on comprehensive description
  const features = [
    {
      title: 'Personalized Learning',
      description: 'Dynamic learning pathways that adjust curriculum difficulty based on student performance metrics, ensuring appropriate challenge and support.',
      icon: '/images/personalized-learning-icon.svg',
    },
    {
      title: 'Learning Style Adaptation',
      description: 'AI-powered assessments identify each student's preferred learning style (visual, auditory, kinesthetic) and tailor content delivery accordingly.',
      icon: '/images/learning-style-icon.svg',
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Machine learning algorithms suggest additional resources like videos, articles, and exercises aligned with student progress and learning style.',
      icon: '/images/recommendation-icon.svg',
    },
    {
      title: 'Gamification Elements',
      description: 'Progress badges, achievement systems, and leaderboards that transform learning into a rewarding experience with virtual rewards.',
      icon: '/images/gamification-icon.svg',
    },
    {
      title: 'Adaptive Content',
      description: 'Curriculum that dynamically adjusts based on real-time performance data, keeping students engaged without overwhelming them.',
      icon: '/images/adaptive-content-icon.svg',
    },
    {
      title: 'Collaborative Learning',
      description: 'Discussion boards, group projects, and live study sessions that foster peer-to-peer interaction and collaborative learning.',
      icon: '/images/collaborative-learning-icon.svg',
    },
  ];

  return (
    <Layout title="Geaux Academy | AI-Driven Educational Platform">
      <Hero 
        title="Geaux Academy"
        subtitle="Revolutionizing K-12 education through AI-powered personalized learning experiences."
        ctaText="Explore Features"
        ctaLink="#features"
        backgroundImage="/images/geaux-academy-hero.jpg"
      />

      <section className="project-overview py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Personalized Education for Every Student</h2>
            <p className="text-lg mb-6">
              At Geaux Academy, we revolutionize K-12 education by creating personalized learning experiences 
              tailored to each student's unique learning style. Our AI-driven platform leverages OpenAI's GPT 
              technology to develop custom curricula that adapt in real-time to student performance and preferences.
            </p>
            <p className="text-lg mb-6">
              Through dynamic learning pathways, our platform adjusts curriculum difficulty based on student 
              performance metrics like accuracy, completion time, and engagement. This ensures students are 
              appropriately challenged or supported as needed, keeping them engaged without feeling overwhelmed.
            </p>
            <p className="text-lg mb-6">
              Our AI-powered tools identify each student's preferred learning style—visual, auditory, or 
              kinesthetic—and customize content delivery to maximize comprehension and retention. The built-in 
              recommendation engine suggests additional resources aligned with the student's progress and 
              learning style, creating a truly personalized educational journey.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="features"
        title="Innovative Platform Features"
        subtitle="Discover how Geaux Academy transforms the learning experience through cutting-edge technology"
        features={features}
      />

      <section className="technological-infrastructure py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Advanced Technological Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Node.js for real-time features like live quizzes and leaderboards</li>
                <li>Django for managing APIs and database interactions</li>
                <li>MongoDB for user data and PostgreSQL for structured curriculum data</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>React.js for dynamic, responsive user interfaces</li>
                <li>Real-time updates via WebSockets for interactive features</li>
                <li>Accessible design ensuring usability for all students</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">AI/ML Integrations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>OpenAI GPT and Azure Cognitive Services for personalized content generation</li>
                <li>Learning style assessment algorithms to identify student preferences</li>
                <li>Amazon SageMaker for predictive analytics on student performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Transform Your Educational Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Geaux Academy today and discover the power of personalized, AI-driven education tailored to your unique learning style.</p>
          <Button 
            variant="light" 
            size="large"
            onClick={() => window.open('https://academy.geauxspecialist.com', '_blank')}
          >
            Get Started with Geaux Academy
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxAcademy;
