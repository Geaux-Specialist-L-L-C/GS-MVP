import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';
import { FaGraduationCap, FaHandsHelping, FaMicrophone, FaStore } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles/FeaturesSection.module.css';

const FeaturesSection = dynamic(() => import('../components/sections/FeaturesSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'), { ssr: false });
const FlipCardShowcase = dynamic(() => import('../components/sections/FlipCardShowcase'), { ssr: false });

export default function Home() {
  const features = [
    {
      title: 'Geaux Academy',
      description: 'Personalized online learning solutions for healthcare professionals and students.',
      icon: <FaGraduationCap className={styles.icon} />,
    },
    {
      title: 'Geaux HelpED',
      description: 'Streamlined patient care and clinical operations for modern healthcare providers.',
      icon: <FaHandsHelping className={styles.icon} />,
    },
    {
      title: 'ReanimatED Echos',
      description: 'Preserving voices and clinical documentation through advanced AI technology.',
      icon: <FaMicrophone className={styles.icon} />,
    },
    {
      title: 'Geaux Emporium',
      description: 'Specialized healthcare educational resources and materials for continued learning.',
      icon: <FaStore className={styles.icon} />,
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
    <Layout 
      title="Home"
      description="GeauxSpecialist LLC delivers innovative solutions across education, healthcare, technology, and e-commerce, empowering communities through advanced technology."
      keywords="Geaux Academy, Geaux HelpED, ReanimatED Echos, Geaux Emporium, healthcare education, medical technology"
      canonical="/"
    >
      <Hero 
        title="Welcome to GeauxSpecialist"
        subtitle="Innovative solutions across education, healthcare, technology, and e-commerce."
        ctaText="Explore Our Projects"
        ctaLink="#projects-showcase"
        backgroundImage="/images/hero-background.jpg"
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="intro-section"
      >
        <div className="container text-center py-16">
          <h2 className="text-3xl font-bold mb-6">Empowering Communities Through Innovation</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            At Geaux Specialist LLC, we create transformative solutions that address real-world challenges in education, 
            healthcare, and beyond. Our mission is to harness the power of technology to make a meaningful impact 
            on communities across the globe.
          </p>
        </div>
      </motion.section>

      <FlipCardShowcase />
      
      <FeaturesSection 
        title="Our Projects"
        subtitle="Discover the innovative solutions we're building to address real-world challenges."
        features={features}
        className="text-center"
      />
      
      <TestimonialsSection
        title="Success Stories"
        subtitle="Real results from our satisfied clients and partners"
        testimonials={testimonials}
        className="text-center"
        showProjectsButton={true}
      />

      <motion.section 
        className="cta-section text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="container py-16">
          <h2 className="text-3xl font-bold mb-4">Ready to learn more about what we do?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Contact us today to discuss how GeauxSpecialist can help bring your ideas to life.</p>
          <Button 
            variant="secondary" 
            size="large"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </motion.section>
    </Layout>
  );
}
