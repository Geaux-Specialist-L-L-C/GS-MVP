import React from 'react';
import Layout from '../../components/layout/Layout';
import Head from 'next/head';

const ProjectsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Our Projects | GeauxSpecialist</title>
        <meta name="description" content="Explore our portfolio of successful projects" />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">Project Title</h3>
              <p className="text-gray-700">Brief description of the project and the results achieved.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;