import React from 'react';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/sections/Hero';
import dynamic from 'next/dynamic';
import Button from '../../components/ui/Button';

const FeaturesSection = dynamic(() => import('../../components/sections/FeaturesSection'), { ssr: false });

const GeauxEmporium = () => {
  const features = [
    {
      title: 'Diverse Product Range',
      description: 'Wide selection of products from educational materials to unique handcrafted items showcasing creative talent.',
      icon: '/images/diverse-products-icon.svg',
    },
    {
      title: 'Seamless Shopping Experience',
      description: 'User-friendly interface with dynamic listings and secure transactions for a smooth shopping journey.',
      icon: '/images/shopping-experience-icon.svg',
    },
    {
      title: 'Creator Support',
      description: 'Platform tools and resources designed to help creative entrepreneurs showcase and sell their products effectively.',
      icon: '/images/creator-support-icon.svg',
    },
    {
      title: 'Quality Assurance',
      description: 'Careful curation processes to ensure all marketplace items meet high standards of quality and value.',
      icon: '/images/quality-assurance-icon.svg',
    },
  ];

  return (
    <Layout title="Geaux Emporium | Creative Marketplace Platform">
      <Hero 
        title="Geaux Emporium"
        subtitle="An innovative online marketplace supporting creative entrepreneurs and discerning consumers"
        ctaText="Explore Marketplace"
        ctaLink="#marketplace-categories"
        backgroundImage="/images/geaux-emporium-hero.jpg"
      />

      <section className="project-overview py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Connecting Creators and Consumers</h2>
            <p className="text-lg mb-6">
              Geaux Emporium is an innovative online marketplace designed to showcase a wide range 
              of products and services. From educational materials to unique handcrafted items, our 
              platform offers a seamless shopping experience with dynamic listings and secure transactions.
            </p>
            <p className="text-lg mb-6">
              We've created a vibrant ecosystem that supports both creative entrepreneurs and discerning 
              consumers. Our platform provides creators with the tools they need to showcase their work, 
              while shoppers can discover quality products that meet their specific needs and preferences.
            </p>
            <p className="text-lg mb-6">
              Through our carefully designed interface and secure payment processing, Geaux Emporium creates 
              a trusted environment where unique products find their perfect homes and creative businesses thrive.
            </p>
          </div>
        </div>
      </section>

      <FeaturesSection 
        id="features"
        title="Platform Features"
        subtitle="Discover what makes Geaux Emporium a unique marketplace experience"
        features={features}
      />

      <section id="marketplace-categories" className="store-categories py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Marketplace Categories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">Educational Resources</h3>
              <p className="mb-6">
                Curated collection of learning materials, curriculum supplements, and educational tools created 
                by experienced educators and subject matter experts.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://emporium.geauxspecialist.com/educational', '_blank')}
                >
                  Browse Educational Resources
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">Handcrafted Items</h3>
              <p className="mb-6">
                Unique, artisan-made products that showcase exceptional craftsmanship and creativity across 
                various mediums and artistic styles.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://emporium.geauxspecialist.com/handcrafted', '_blank')}
                >
                  Discover Handcrafted Items
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">Digital Products</h3>
              <p className="mb-6">
                Downloadable resources including templates, digital art, software tools, and other creative 
                assets for immediate use.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://emporium.geauxspecialist.com/digital', '_blank')}
                >
                  Shop Digital Products
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-center">Custom Services</h3>
              <p className="mb-6">
                Personalized creative services offered by skilled professionals, from design work to 
                specialized consulting and custom creations.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://emporium.geauxspecialist.com/services', '_blank')}
                >
                  Explore Custom Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="creator-spotlight py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Creator Spotlight</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
            <p className="text-lg mb-6 italic text-center">
              "Geaux Emporium has transformed my creative business. The platform's support for 
              independent creators and its focus on quality connections has helped me reach 
              new customers who truly value handcrafted work."
            </p>
            <p className="text-center font-semibold">
              — Emma Roberts, Artisan & Educator
            </p>
          </div>
        </div>
      </section>

      <section className="project-cta py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Creative Marketplace</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Whether you're looking to shop unique items or showcase your creative work, Geaux Emporium offers the perfect platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="light" 
              size="large"
              onClick={() => window.open('https://emporium.geauxspecialist.com/shop', '_blank')}
            >
              Start Shopping
            </Button>
            <Button 
              variant="outline-light" 
              size="large"
              onClick={() => window.open('https://emporium.geauxspecialist.com/become-seller', '_blank')}
            >
              Become a Seller
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GeauxEmporium;
