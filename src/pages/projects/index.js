import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/ui/Button';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'geaux-academy',
      title: 'Geaux Academy',
      description: 'Personalized online learning solutions that transform educational outcomes through interactive, adaptive learning experiences.',
      image: '/images/projects/geaux-academy.jpg',
      detailDescription: 'An innovative online learning platform designed to address the growing need for personalized education. The platform uses AI to adapt to each student\'s learning style and pace.',
      keyFeatures: ['Adaptive learning paths', 'Interactive content', 'Progress tracking', 'Educator dashboard'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      link: '/projects/geaux-academy'
    },
    {
      id: 'geaux-helped',
      title: 'Geaux HelpED',
      description: 'Streamlined patient care and clinical operations platform for healthcare facilities that reduces wait times and improves patient outcomes.',
      image: '/images/projects/geaux-helped.jpg',
      detailDescription: 'A comprehensive healthcare management solution that optimizes patient flow and clinical operations, resulting in reduced wait times and improved patient care.',
      keyFeatures: ['Patient management', 'Resource allocation', 'Analytics dashboard', 'Integration with EHR systems'],
      technologies: ['React', 'Express', 'PostgreSQL', 'WebSockets'],
      link: '/projects/geaux-helped'
    },
    {
      id: 'reanimated-echos',
      title: 'ReanimatED Echos',
      description: 'Advanced AI voice preservation technology that captures and recreates human voices for future generations and communications.',
      image: '/images/projects/reanimated-echos.jpg',
      detailDescription: 'Cutting-edge voice preservation technology using AI to capture and recreate human voices, preserving them for future generations and enabling continued communication.',
      keyFeatures: ['Voice sampling', 'Neural voice synthesis', 'Secure voice storage', 'Custom message creation'],
      technologies: ['TensorFlow', 'Python', 'React', 'Google Cloud'],
      link: '/projects/reanimated-echos'
    },
    {
      id: 'geaux-emporium',
      title: 'Geaux Emporium',
      description: 'Specialized healthcare educational resources and materials marketplace connecting suppliers with educational institutions.',
      image: '/images/projects/geaux-emporium.jpg',
      detailDescription: 'An online marketplace that connects suppliers of specialized healthcare educational resources with schools, universities, and training facilities.',
      keyFeatures: ['Supplier management', 'Inventory tracking', 'Secure payments', 'Order fulfillment'],
      technologies: ['Next.js', 'Stripe', 'Firebase', 'Material UI'],
      link: '/projects/geaux-emporium'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Our Projects | GeauxSpecialist</title>
        <meta name="description" content="Explore our portfolio of successful projects" />
      </Head>
      
      <section className="py-16 bg-gray-50 text-center">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Our Projects</h1>
            <p className="section-subtitle">
              Discover the innovative solutions we're building to address real-world challenges in education, healthcare, technology, and e-commerce.
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card-inner">
                  {/* Front of card */}
                  <div className="project-card-front">
                    <div 
                      className="project-card-image" 
                      style={{ backgroundImage: `url(${project.image || '/images/project-placeholder.jpg'})` }}
                    ></div>
                    <div className="project-card-content">
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-description">{project.description}</p>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="project-card-back">
                    <h3>{project.title}</h3>
                    <p>{project.detailDescription}</p>
                    
                    <div className="my-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside mb-4">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-white text-primary-color rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={project.link}>
                      <Button variant="secondary" size="medium" className="mt-4">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;