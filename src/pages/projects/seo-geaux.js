import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const SEOGeaux = () => {
  const features = [
    {
      title: 'Comprehensive Keyword Research',
      description: 'In-depth analysis to identify high-value keywords that drive relevant traffic to your website and improve visibility.',
      icon: '/images/keyword-research-icon.svg',
    },
    {
      title: 'Content Marketing Strategy',
      description: 'Creation of compelling, SEO-optimized content that engages your audience while improving search engine rankings.',
      icon: '/images/content-marketing-icon.svg',
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed tracking and reporting of key metrics to measure campaign success and identify opportunities for improvement.',
      icon: '/images/analytics-icon.svg',
    },
    {
      title: 'Competitive Analysis',
      description: 'Strategic evaluation of competitor strategies to identify market gaps and opportunities for differentiation.',
      icon: '/images/competitive-analysis-icon.svg',
    },
  ];

  return (
    <Layout title="SEO Geaux | Digital Growth Strategies">
      <Hero 
        title="SEO Geaux"
        subtitle="Strategic digital solutions to enhance your online visibility and drive sustainable growth"
        ctaText="Explore Services"
        ctaLink="#services"
        backgroundImage="/images/seo-geaux-hero.jpg"
      />

      <section className="project-overview py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Maximizing Your Digital Potential</h2>
            <p className="text-lg mb-6">
              SEO Geaux is our strategic solution for enhancing online visibility and driving digital growth. 
              We craft tailored SEO strategies that cover comprehensive keyword research, content marketing, 
              and performance analytics to maximize your digital presence.
            </p>
            <p className="text-lg mb-6">
              Our approach focuses on sustainable strategies that align with your business goals and target 
              audience. By optimizing search engine performance, we help businesses attract targeted traffic, 
              generate quality leads, and achieve long-term online success.
            </p>
            <p className="text-lg mb-6">
              With data-driven insights and industry expertise, SEO Geaux delivers measurable results 
              that translate into increased brand awareness, higher conversion rates, and improved ROI 
              for your digital marketing investments.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="services"
        title="Our Services"
        subtitle="Comprehensive digital growth strategies tailored to your business needs"
        features={features}
      />

      <section className="process py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Research & Analysis</h3>
              <p>Comprehensive audit of your current digital presence and competitive landscape.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
              <p>Creation of customized strategies aligned with your specific business goals.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p>Expert execution of SEO tactics and content strategies by our specialized team.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Monitoring & Optimization</h3>
              <p>Continuous analysis and refinement to maximize results and adapt to market changes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-detail py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Specialized SEO Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Website architecture optimization</li>
                <li>Page speed enhancement</li>
                <li>Mobile responsiveness improvement</li>
                <li>Schema markup implementation</li>
                <li>Crawlability and indexing solutions</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">On-Page SEO</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Content optimization for target keywords</li>
                <li>Meta tags and descriptions refinement</li>
                <li>Internal linking strategy</li>
                <li>Image optimization</li>
                <li>User experience enhancement</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Off-Page SEO</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Backlink profile development</li>
                <li>Brand mention strategies</li>
                <li>Content outreach campaigns</li>
                <li>Social signals enhancement</li>
                <li>Online reputation management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Local SEO</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Google Business Profile optimization</li>
                <li>Local citation building</li>
                <li>Review management strategy</li>
                <li>Local keyword targeting</li>
                <li>Geo-targeted content creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="results py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg shadow">
            <p className="text-lg mb-6 italic text-center">
              "SEO Geaux transformed our online presence with targeted strategies that increased our organic 
              traffic by 187% within six months. Their data-driven approach and transparent reporting made 
              them a true partner in our digital growth."
            </p>
            <p className="text-center font-semibold">
              — Michael Thompson, CEO of Thompson Healthcare Solutions
            </p>
          </div>
        </div>
      </section>

      <section className="project-cta py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Schedule a consultation to discuss how our tailored SEO strategies can drive sustainable growth for your business.</p>
          <Button 
            variant="light" 
            size="large"
            onClick={() => window.open('https://seo.geauxspecialist.com/consultation', '_blank')}
          >
            Request a FREE SEO Audit
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default SEOGeaux;