import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';

const FeaturesSection = dynamic(() => import('../components/sections/FeaturesSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'), { ssr: false });

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

  const testimonials = [
    {
      quote: "Geaux Academy transformed our educational approach entirely. The platform's interactive features increased student engagement by over 45%.",
      name: "Dr. Sarah Johnson",
      role: "Education Director",
      project: "Geaux Academy",
      image: "/images/testimonials/sarah-johnson.jpg",
      metrics: [
        { value: "45%", label: "Engagement Increase" },
        { value: "1,200+", label: "Students Helped" }
      ]
    },
    {
      quote: "The efficiency gains from implementing Geaux HelpED in our healthcare facility have been remarkable. Patient wait times reduced dramatically.",
      name: "Michael Chen, MD",
      role: "Chief Medical Officer",
      project: "Geaux HelpED",
      image: "/images/testimonials/michael-chen.jpg",
      metrics: [
        { value: "32%", label: "Wait Time Reduction" },
        { value: "8,500+", label: "Patients Processed" }
      ]
    },
    {
      quote: "ReanimatED Echos' voice processing technology has revolutionized our diagnostic transcription process, saving countless hours of work.",
      name: "Dr. Layla Rodriguez",
      role: "Hospital Administrator",
      project: "ReanimatED Echos",
      image: "/images/testimonials/layla-rodriguez.jpg",
      metrics: [
        { value: "85%", label: "Time Saved" },
        { value: "99.2%", label: "Accuracy Rate" }
      ]
    },
    {
      quote: "Since partnering with Geaux Emporium, our educational resources reach twice as many schools as before. The platform is intuitive and powerful.",
      name: "James Thompson",
      role: "Supply Chain Director",
      project: "Geaux Emporium",
      image: "/images/testimonials/james-thompson.jpg",
      metrics: [
        { value: "2x", label: "Market Reach" },
        { value: "15K+", label: "Products Delivered" }
      ]
    }
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
      
      <TestimonialsSection
        title="Success Stories"
        subtitle="Real results from our satisfied clients and partners"
        testimonials={testimonials}
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
