import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/layout/Layout';
import AnimatedHero from '../components/sections/AnimatedHero';
import { FaGraduationCap, FaHandsHelping, FaMicrophone, FaStore } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TestimonialsSection = dynamic(() => import('../components/sections/TestimonialsSection'), { ssr: false });
const FlipCardShowcase = dynamic(() => import('../components/sections/FlipCardShowcase'), { ssr: false });

export default function Home() {
  const projects = [
    {
      title: 'Geaux Academy',
      description: 'AI-Driven Educational Platform',
      link: '/projects/geaux-academy',
      image: '/images/projects/geaux-academy.jpg'
    },
    {
      title: 'Geaux HelpED',
      description: 'Educational Support Resources',
      link: '/projects/geaux-helped',
      image: '/images/projects/geaux-helped.jpg'
    },
    {
      title: 'ReanimatED Echos',
      description: 'Legacy Preservation Technology',
      link: '/projects/reanimated-echos',
      image: '/images/projects/reanimated-echos.jpg'
    },
    {
      title: 'SEO Geaux',
      description: 'Digital Growth Strategies',
      link: '/projects/seo-geaux',
      image: '/images/projects/seo-geaux.jpg'
    },
    {
      title: 'Geaux Emporium',
      description: 'Creative Marketplace Platform',
      link: '/projects/geaux-emporium',
      image: '/images/projects/geaux-emporium.jpg'
    }
  ];

  const testimonials = [
    {
      quote: "Geaux Academy transformed our educational approach entirely. The platform's interactive features increased student engagement by over 45%.",
      name: "Dr. Sarah Johnson",
      role: "Education Director",
      project: "Geaux Academy",
      projectLink: "/projects/geaux-academy",
      image: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
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
      projectLink: "/projects/geaux-helped",
      image: "/images/testimonials/michael-chen.jpg",
      rating: 4.5,
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
      projectLink: "/projects/reanimated-echos",
      image: "/images/testimonials/layla-rodriguez.jpg",
      rating: 5,
      metrics: [
        { value: "85%", label: "Time Saved" },
        { value: "99.2%", label: "Accuracy Rate" }
      ]
    }
  ];

  return (
    <Layout 
      title="GeauxSpecialist - Innovative Solutions"
      description="Empowering communities through innovative solutions across education, healthcare, technology, and e-commerce."
      keywords="Geaux Academy, Geaux HelpED, ReanimatED Echos, Geaux Emporium, education technology, healthcare innovation"
      canonical="/"
    >
      <AnimatedHero 
        title="Welcome to GeauxSpecialist"
        subtitle="Innovative solutions across education, healthcare, technology, and e-commerce."
        primaryCta="Explore Our Projects"
        primaryCtaLink="#projects"
        backgroundImage="/images/hero-bg.jpg"
      />

      <section className="projects-section" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FlipCardShowcase cards={projects} />
          </motion.div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <TestimonialsSection
          title="Success Stories"
          subtitle="Real results from our satisfied clients and partners"
          testimonials={testimonials}
          displayMode="carousel"
          autoplaySpeed={7000}
          bgColor="#f0f7ff"
          showProjectsButton={true}
        />
      </section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss how GeauxSpecialist can help bring your vision to life.
          </p>
          <motion.a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </div>
      </motion.section>
    </Layout>
  );
}
