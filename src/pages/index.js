<<<<<<< HEAD:pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import ProjectCard from '../components/ui/ProjectCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Featured projects data
  const featuredProjects = [
=======
import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../src/components/layout/Layout';
import Hero from '../src/components/sections/Hero';
import Button from '../src/components/ui/Button';

const FeaturesSection = dynamic(() => import('../src/components/sections/FeaturesSection'), { ssr: false });

export default function Home() {
  const features = [
>>>>>>> 3fd4ed4d7136f8021924c596fafda693338f93fd:src/pages/index.js
    {
      id: 1,
      title: 'Geaux Academy',
      description: 'An innovative online learning platform leveraging AI to provide personalized education experiences.',
      imageSrc: '/images/geaux-academy.jpg',
      imageAlt: 'Geaux Academy',
      link: '/projects/geaux-academy',
      tags: ['Education', 'AI', 'E-Learning']
    },
    {
      id: 2,
      title: 'Geaux HelpED',
      description: 'A comprehensive mobile app for healthcare management, designed to streamline patient care.',
      imageSrc: '/images/geaux-helped.jpg',
      imageAlt: 'Geaux HelpED',
      link: '/projects/geaux-helped',
      tags: ['Healthcare', 'Mobile App', 'Management']
    },
    {
      id: 3,
      title: 'ReanimatED Echos',
      description: 'Advanced voice processing technology bringing new dimensions to audio communication.',
      imageSrc: '/images/reanimated-echos.jpg',
      imageAlt: 'ReanimatED Echos',
      link: '/projects/reanimated-echos',
      tags: ['Audio', 'Technology', 'Communication']
    },
    {
      id: 4,
      title: 'Geaux Emporium',
      description: 'E-commerce platform specializing in educational resources and tools for modern learning environments.',
      imageSrc: '/images/geaux-emporium.jpg',
      imageAlt: 'Geaux Emporium',
      link: '/projects/geaux-emporium',
      tags: ['E-Commerce', 'Education', 'Resources']
    }
  ];

  // Company stats
  const stats = [
    {
      figure: '5+',
      label: 'Years of Experience'
    },
    {
      figure: '10+',
      label: 'Projects Completed'
    },
    {
      figure: '100+',
      label: 'Happy Clients'
    },
    {
      figure: '4',
      label: 'Innovative Products'
    }
  ];

  return (
    <Layout
      title="Home"
      description="Geaux Specialist LLC - Empowering communities through technology and education with innovative solutions."
    >
      <HeroSection />
      
      {/* About Section */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <div className={styles.twoColumns}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>Innovative Solutions for Modern Challenges</h2>
              <p className={styles.aboutText}>
                Geaux Specialist LLC is dedicated to delivering cutting-edge solutions across various domains. 
                Our mission is to empower communities through technology and education, creating tools that 
                make a meaningful difference.
              </p>
              <p className={styles.aboutText}>
                With a team of dedicated specialists, we bring expertise and passion to every project. 
                From advanced learning platforms to healthcare management systems, our innovative products 
                are designed with user experience at their core.
              </p>
              <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <div className={styles.statFigure}>{stat.figure}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img 
                src="/images/about-image.jpg" 
                alt="Geaux Specialist team at work" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              Explore our innovative solutions across education, healthcare, and technology
            </p>
          </div>
          
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  link={project.link}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
          
          <div className={styles.projectsCta}>
            <a href="/projects" className="button button-primary button-large">
              View All Projects
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionSubtitle}>
              Hear from organizations and individuals who have worked with us
            </p>
          </div>
          
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "Geaux Academy has transformed our approach to professional development. The personalized learning 
                  pathways and AI-driven recommendations have increased engagement and knowledge retention significantly."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <img src="/images/testimonial-1.jpg" alt="John Smith" />
                </div>
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>John Smith</h4>
                  <p className={styles.testimonialRole}>Training Director, EdTech Solutions</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "The Geaux HelpED platform streamlined our patient management workflow and reduced administrative 
                  time by 40%. Their team was responsive and adapted the system to our specific needs."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <img src="/images/testimonial-2.jpg" alt="Sarah Johnson" />
                </div>
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>Sarah Johnson</h4>
                  <p className={styles.testimonialRole}>Clinical Director, Bayou Medical Center</p>
                </div>
              </div>
            </div>
            
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>
                  "ReanimatED Echos provided our podcast studio with unparalleled voice enhancement technology. 
                  The quality improvement was immediately noticeable and our listeners have been giving fantastic feedback."
                </p>
              </div>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>
                  <img src="/images/testimonial-3.jpg" alt="Michael Chen" />
                </div>
                <div className={styles.testimonialInfo}>
                  <h4 className={styles.testimonialName}>Michael Chen</h4>
                  <p className={styles.testimonialRole}>Founder, Digital Soundwaves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your Ideas Into Reality?</h2>
            <p className={styles.ctaText}>
              Let's discuss how Geaux Specialist can help your organization innovate and grow.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className="button button-primary button-large">
                Get in Touch
              </a>
              <a href="/about" className="button button-secondary button-large">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
