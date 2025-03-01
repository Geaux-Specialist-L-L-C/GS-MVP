import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FlipCardShowcase from '../components/sections/FlipCardShowcase';
import { FaGraduationCap, FaHandsHelping, FaHistory, FaStore, FaChartLine } from 'react-icons/fa';

export default function Home() {
  // Featured projects for the homepage
  const featuredProjects = [
    {
      id: 'geaux-academy',
      title: 'Geaux Academy',
      subtitle: 'AI-Driven Learning Platform',
      description: 'An innovative educational platform that uses AI to personalize learning experiences and adapt to individual student needs.',
      link: '/projects/geaux-academy',
      linkText: 'Explore Platform',
      backgroundColor: '#e0f2fe',
      accentColor: '#0284c7',
      icon: <FaGraduationCap size={32} />,
      backgroundImage: '/images/projects/geaux-academy-card-bg.jpg'
    },
    {
      id: 'reanimated-echos',
      title: 'ReanimatED Echos',
      subtitle: 'Legacy Preservation Technology',
      description: 'AI-powered legacy preservation technology that transforms personal narratives and photos into interactive voice-enhanced stories.',
      link: '/projects/reanimated-echos',
      linkText: 'Preserve Memories',
      backgroundColor: '#f1f5f9',
      accentColor: '#475569',
      icon: <FaHistory size={32} />
    },
    {
      id: 'geaux-emporium',
      title: 'Geaux Emporium',
      subtitle: 'Creative Marketplace Platform',
      description: 'A specialized marketplace platform that connects unique makers with enthusiastic buyers through innovative e-commerce solutions.',
      link: '/projects/geaux-emporium',
      linkText: 'Visit Marketplace',
      backgroundColor: '#fef3c7',
      accentColor: '#d97706',
      icon: <FaStore size={32} />
    }
  ];

  // Example testimonials data
  const testimonials = [
    {
      quote: "GeauxSpecialist helped us increase productivity by 35% within the first month. Their team was incredibly responsive and provided ongoing support that exceeded our expectations.",
      name: "Robert Smith",
      role: "Director of Operations",
      project: "Workflow Optimization",
      projectLink: "/projects/geaux-academy",
      image: "/images/testimonials/robert.jpg",
      rating: 5,
      metrics: [
        { value: "35%", label: "Productivity increase" },
        { value: "20%", label: "Cost reduction" }
      ]
    },
    {
      quote: "The custom solution provided exactly what we needed. We've been able to visualize our marketing data in real-time and make better decisions based on accurate insights.",
      name: "Lisa Wong",
      role: "Marketing Director",
      project: "Data Analytics Dashboard",
      image: "/images/testimonials/lisa.jpg",
      rating: 4.5
    },
    {
      quote: "Working with GeauxSpecialist on our educational platform revolutionized how we approach online learning. The AI-driven personalization features have significantly improved student engagement.",
      name: "Michael Johnson",
      role: "Dean of Digital Learning",
      project: "Geaux Academy Integration",
      projectLink: "/projects/geaux-academy",
      image: "/images/testimonials/michael.jpg",
      rating: 5,
      metrics: [
        { value: "47%", label: "Student engagement" },
        { value: "3.5x", label: "Course completion" }
      ]
    }
  ];

  return (
    <Layout>
      <Hero />
      <FeaturesSection />
      
      {/* Featured Projects Showcase using FlipCardShowcase */}
      <FlipCardShowcase
        title="Our Featured Projects"
        subtitle="Discover our innovative solutions across different industries"
        cards={featuredProjects}
        viewAllLink="/projects"
      />
      
      <TestimonialsSection 
        title="What Our Clients Say" 
        subtitle="Hear from organizations that have partnered with us" 
        testimonials={testimonials}
        displayMode="carousel"
        autoplaySpeed={5000}
        showProjectsButton={true}
      />
    </Layout>
  );
}
