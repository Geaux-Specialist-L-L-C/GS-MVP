import { useState } from 'react';
import Layout from '../components/layout/Layout';
import ProjectCard from '../components/ui/ProjectCard';
import styles from '../styles/Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  tags: string[];
  featured: boolean;
}

export default function Projects() {
  // All project categories
  const categories = ['All', 'Education', 'Healthcare', 'Technology', 'E-Commerce'];
  
  // Selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Geaux Academy',
      description: 'An innovative online learning platform leveraging AI to provide personalized education experiences for students of all ages and backgrounds.',
      fullDescription: 'Geaux Academy is revolutionizing how people learn by using artificial intelligence to create personalized learning pathways. Our platform adapts to each student\'s learning style, pace, and interests, making education more engaging and effective.',
      imageSrc: '/images/geaux-academy.jpg',
      imageAlt: 'Geaux Academy platform showing adaptive learning interface',
      link: '/projects/geaux-academy',
      tags: ['Education', 'AI', 'E-Learning'],
      featured: true
    },
    {
      id: 2,
      title: 'Geaux HelpED',
      description: 'A comprehensive mobile app for healthcare management, designed to streamline patient care and improve healthcare outcomes.',
      fullDescription: 'Geaux HelpED connects patients with healthcare providers and simplifies health management. The app offers features like appointment scheduling, medication reminders, secure messaging, and health tracking to ensure continuous care.',
      imageSrc: '/images/geaux-helped.jpg',
      imageAlt: 'Geaux HelpED mobile app interface showing patient dashboard',
      link: '/projects/geaux-helped',
      tags: ['Healthcare', 'Mobile App', 'Management'],
      featured: true
    },
    {
      id: 3,
      title: 'ReanimatED Echos',
      description: 'Advanced voice processing technology bringing new dimensions to audio communication and content creation.',
      fullDescription: 'ReanimatED Echos uses cutting-edge voice processing algorithms to enhance audio quality, reduce background noise, and create more immersive sound experiences for podcasts, audiobooks, virtual meetings, and more.',
      imageSrc: '/images/reanimated-echos.jpg',
      imageAlt: 'ReanimatED Echos audio processing software interface',
      link: '/projects/reanimated-echos',
      tags: ['Technology', 'Audio', 'Communication'],
      featured: true
    },
    {
      id: 4,
      title: 'Geaux Emporium',
      description: 'E-commerce platform specializing in educational resources and tools for modern learning environments.',
      fullDescription: 'Geaux Emporium offers a curated selection of educational products, from digital learning tools to classroom supplies, all designed to enhance the educational experience for students and teachers alike.',
      imageSrc: '/images/geaux-emporium.jpg',
      imageAlt: 'Geaux Emporium e-commerce website showing educational products',
      link: '/projects/geaux-emporium',
      tags: ['E-Commerce', 'Education', 'Resources'],
      featured: true
    },
    {
      id: 5,
      title: 'LearnSync',
      description: 'Learning management system for schools and educational institutions that synchronizes curriculum, assessment, and student progress.',
      fullDescription: 'LearnSync helps educational institutions manage their entire learning ecosystem from a single platform. It includes tools for curriculum development, assessment creation, grade management, and progress tracking.',
      imageSrc: '/images/learn-sync.jpg',
      imageAlt: 'LearnSync dashboard showing curriculum management tools',
      link: '/projects/learn-sync',
      tags: ['Education', 'Management', 'Technology'],
      featured: false
    },
    {
      id: 6,
      title: 'HealthTrack Pro',
      description: 'Wearable health monitoring solution for tracking vital signs and providing actionable health insights.',
      fullDescription: 'HealthTrack Pro combines wearable devices with an intuitive app to monitor health metrics in real-time. The system provides alerts for abnormal readings and generates reports that can be shared with healthcare providers.',
      imageSrc: '/images/health-track-pro.jpg',
      imageAlt: 'HealthTrack Pro wearable device and mobile app interface',
      link: '/projects/health-track-pro',
      tags: ['Healthcare', 'Technology', 'Monitoring'],
      featured: false
    },
    {
      id: 7,
      title: 'VoiceMatch',
      description: 'Voice recognition and authentication system for secure access to digital services and systems.',
      fullDescription: 'VoiceMatch uses advanced voice biometrics to provide secure, password-free authentication for applications and services. The system can identify unique voice patterns with high accuracy, enhancing security while simplifying the user experience.',
      imageSrc: '/images/voice-match.jpg',
      imageAlt: 'VoiceMatch voice authentication system interface',
      link: '/projects/voice-match',
      tags: ['Technology', 'Security', 'Audio'],
      featured: false
    },
    {
      id: 8,
      title: 'EduMarket',
      description: 'Marketplace for educators to buy, sell, and share lesson plans, teaching materials, and resources.',
      fullDescription: 'EduMarket connects teachers and educational content creators with educators seeking quality teaching materials. The platform includes tools for secure transactions, content review, and easy digital delivery of resources.',
      imageSrc: '/images/edu-market.jpg',
      imageAlt: 'EduMarket platform showing teaching resources for sale',
      link: '/projects/edu-market',
      tags: ['Education', 'E-Commerce', 'Resources'],
      featured: false
    }
  ];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedCategory));
  
  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Layout
      title="Projects"
      description="Explore the innovative projects and solutions developed by Geaux Specialist LLC across education, healthcare, and technology."
    >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Projects</h1>
            <p className={styles.heroSubtitle}>
              Innovative solutions designed to empower communities through technology and education
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Explore our flagship solutions that are making a difference
          </p>
          
          <div className={styles.featuredGrid}>
            {projects
              .filter(project => project.featured)
              .map(project => (
                <div key={project.id} className={styles.featuredItem}>
                  <div className={styles.featuredImage}>
                    <img src={project.imageSrc} alt={project.imageAlt} />
                  </div>
                  <div className={styles.featuredContent}>
                    <h3 className={styles.featuredTitle}>{project.title}</h3>
                    <div className={styles.featuredTags}>
                      {project.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <p className={styles.featuredDescription}>{project.fullDescription}</p>
                    <a href={project.link} className="button button-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* All Projects Section */}
      <section className={`section ${styles.allProjectsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>All Projects</h2>
          <p className={styles.sectionSubtitle}>
            Browse our complete portfolio of innovative solutions
          </p>
          
          {/* Category filters */}
          <div className={styles.categoryFilters}>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map(project => (
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
          
          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className={styles.noResults}>
              <p>No projects found in the selected category.</p>
              <button 
                className={`button button-secondary ${styles.resetButton}`}
                onClick={() => handleCategoryChange('All')}
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
            <p className={styles.ctaText}>
              Let's discuss how we can help bring your ideas to life with our expertise in technology, 
              education, and innovative solution development.
            </p>
            <a href="/contact" className="button button-primary button-large">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}