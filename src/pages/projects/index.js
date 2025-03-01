import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import FlipCardShowcase from '../../components/sections/FlipCardShowcase';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'geaux-academy',
      title: 'Geaux Academy',
      description: 'AI-driven educational platform that revolutionizes K-12 education with personalized learning experiences tailored to each student's unique learning style.',
      image: '/images/projects/geaux-academy.jpg',
      detailDescription: 'Our platform leverages OpenAI's GPT technology to develop custom curricula that adapt in real-time to student performance and preferences, ensuring appropriate challenge and support.',
      keyFeatures: ['Dynamic learning pathways', 'AI-powered learning style assessments', 'Recommendation engine', 'Gamification elements', 'Adaptive content'],
      technologies: ['React', 'Node.js', 'Django', 'MongoDB', 'PostgreSQL', 'OpenAI GPT'],
      link: '/projects/geaux-academy'
    },
    {
      id: 'geaux-helped',
      title: 'Geaux HelpED',
      description: 'Educational support platform providing essential resources for students of all levels with on-demand tutoring and interactive learning tools.',
      image: '/images/projects/geaux-helped.jpg',
      detailDescription: 'A comprehensive educational support system offering step-by-step guides, on-demand tutoring, and an extensive resource library to help students build confidence and overcome academic challenges.',
      keyFeatures: ['On-demand tutoring', 'Step-by-step guides', 'Interactive learning tools', 'Comprehensive resource library'],
      technologies: ['React', 'Express', 'PostgreSQL', 'WebSockets'],
      link: '/projects/geaux-helped'
    },
    {
      id: 'reanimated-echos',
      title: 'ReanimatED Echos',
      description: 'Legacy preservation technology that brings cherished memories to life through AI-powered digital preservation of photos, documents, and personal narratives.',
      image: '/images/projects/reanimated-echos.jpg',
      detailDescription: 'Using advanced AI, we transform photos, documents, and personal narratives into interactive, voice-enhanced stories that capture the essence of loved ones and important moments for future generations.',
      keyFeatures: ['AI voice enhancement', 'Digital memory preservation', 'Interactive storytelling', 'Legacy safeguarding'],
      technologies: ['TensorFlow', 'Python', 'React', 'Google Cloud'],
      link: '/projects/reanimated-echos'
    },
    {
      id: 'seo-geaux',
      title: 'SEO Geaux',
      description: 'Strategic digital growth solutions enhancing online visibility through tailored SEO strategies, content marketing, and performance analytics.',
      image: '/images/projects/seo-geaux.jpg',
      detailDescription: 'We craft sustainable strategies that align with your business goals to help attract targeted traffic, generate quality leads, and achieve long-term online success with measurable results.',
      keyFeatures: ['Comprehensive keyword research', 'Content marketing strategy', 'Performance analytics', 'Competitive analysis'],
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'WordPress', 'HubSpot'],
      link: '/projects/seo-geaux'
    },
    {
      id: 'geaux-emporium',
      title: 'Geaux Emporium',
      description: 'Innovative online marketplace showcasing educational materials to handcrafted items that supports creative entrepreneurs and discerning consumers.',
      image: '/images/projects/geaux-emporium.jpg',
      detailDescription: 'An online platform offering a seamless shopping experience with dynamic listings and secure transactions, creating a vibrant ecosystem for both creators and shoppers.',
      keyFeatures: ['Diverse product range', 'Seamless shopping experience', 'Creator support tools', 'Quality assurance'],
      technologies: ['Next.js', 'Stripe', 'Firebase', 'Material UI'],
      link: '/projects/geaux-emporium'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Our Projects | Geaux Specialist LLC</title>
        <meta name="description" content="Explore our portfolio of innovative solutions from Geaux Specialist LLC" />
      </Head>
      
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <div className="section-header mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative solutions we're building to transform education, preserve legacies, boost digital presence, and empower creative commerce.
            </p>
          </div>
          
          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image || '/images/project-placeholder.jpg'} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && 
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    }
                  </div>
                  <Link href={project.link}>
                    <a className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FlipCard Showcase Section */}
      <section className="py-16 bg-white">
        <FlipCardShowcase />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to collaborate on your next project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how Geaux Specialist LLC can help bring your vision to life with our innovative technology solutions.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;