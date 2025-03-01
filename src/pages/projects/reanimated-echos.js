import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const ReanimatEDEchos = () => {
  // Updated features for legacy preservation technology
  const features = [
    {
      title: 'AI Voice Enhancement',
      description: 'Advanced AI technology that transforms photos and text into interactive, voice-enhanced narratives that preserve the essence of personal stories.',
      icon: '/images/voice-enhancement-icon.svg',
    },
    {
      title: 'Digital Memory Preservation',
      description: 'Secure digitization of photos, documents, and personal narratives that safeguards cherished memories for future generations.',
      icon: '/images/digital-preservation-icon.svg',
    },
    {
      title: 'Interactive Storytelling',
      description: 'Creation of dynamic, interactive narratives that bring memories to life in engaging and meaningful ways.',
      icon: '/images/interactive-storytelling-icon.svg',
    },
    {
      title: 'Legacy Safeguarding',
      description: 'Comprehensive protection of personal histories and legacies with secure, long-term preservation solutions.',
      icon: '/images/legacy-protection-icon.svg',
    },
  ];

  return (
    <Layout title="ReanimatED Echos | Legacy Preservation Technology">
      <Hero 
        title="ReanimatED Echos"
        subtitle="Bringing cherished memories to life through AI-powered digital preservation"
        ctaText="Discover How It Works"
        ctaLink="#how-it-works"
        backgroundImage="/images/reanimated-echos-hero.jpg"
      />

      <section className="project-overview py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Preserving Legacies Through Technology</h2>
            <p className="text-lg mb-6">
              ReanimatED Echos brings cherished memories to life through cutting-edge digital preservation. 
              Using advanced AI technology, we transform photos, documents, and personal narratives into 
              interactive, voice-enhanced stories that capture the essence of loved ones and important moments.
            </p>
            <p className="text-lg mb-6">
              Our platform doesn't just store memories—it revitalizes them, creating dynamic narratives that 
              future generations can experience and connect with in meaningful ways. Each preserved story 
              maintains the authentic voice, personality, and wisdom of the original narrator.
            </p>
            <p className="text-lg mb-6">
              By safeguarding these personal histories, ReanimatED Echos ensures that important legacies 
              and life lessons continue to inspire and educate future generations in a secure, respectful, 
              and engaging manner.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="features"
        title="Preservation Features"
        subtitle="Discover how our technology transforms memories into living legacies"
        features={features}
      />

      <section id="how-it-works" className="how-it-works py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Collection</h3>
              <p>Gather photos, documents, recordings, and written narratives that tell your personal story.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Digitization</h3>
              <p>We carefully digitize all materials using high-resolution scanning and preservation techniques.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Enhancement</h3>
              <p>Our AI technology enhances images and transforms text into natural-sounding narration.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Presentation</h3>
              <p>Access your interactive legacy collection through our secure platform to share with family.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Preserve Your Legacy</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-center">Connect Generations</h3>
              <p>
                Bridge the gap between past, present, and future by creating connections that 
                transcend time, allowing descendants to know their ancestors in meaningful ways.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-center">Share Wisdom</h3>
              <p>
                Preserve valuable life lessons, cultural traditions, and personal insights that 
                can guide and inspire future generations through life's challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3 text-center">Protect Memories</h3>
              <p>
                Safeguard precious memories against loss, deterioration, or fading recollections, 
                ensuring your story remains intact and accessible for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-cta py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Preserve Your Legacy Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Start your journey toward creating lasting, interactive memories that future generations can experience and cherish.</p>
          <Button 
            variant="light" 
            size="large"
            onClick={() => window.open('https://echos.geauxspecialist.com', '_blank')}
          >
            Begin Your Legacy Project
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ReanimatEDEchos;
