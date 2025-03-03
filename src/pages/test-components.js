import React from 'react';
import Layout from '../components/layout/Layout';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import Link from 'next/link';

const TestComponents = () => {
  // Sample testimonials with ratings and project links
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
    },
    {
      quote: "The legacy preservation technology developed for our museum has allowed visitors to connect with historical figures in an unprecedented way. It's emotional and educational at the same time.",
      name: "Sarah Williams",
      role: "Museum Curator",
      project: "ReanimatED Echos",
      projectLink: "/projects/reanimated-echos",
      image: "/images/testimonials/sarah.jpg",
      rating: 4.5
    },
    {
      quote: "We've tried multiple educational support platforms before, but Geaux HelpED stands out with its personalized approach. Our test scores have improved across all subjects.",
      name: "David Chen",
      role: "School Principal",
      project: "Geaux HelpED",
      projectLink: "/projects/geaux-helped",
      image: "/images/testimonials/david.jpg",
      rating: 5,
      metrics: [
        { value: "32%", label: "Test score improvement" }
      ]
    }
  ];

  return (
    <Layout 
      title="Component Testing | GeauxSpecialist" 
      description="Test page for GeauxSpecialist components"
    >
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">TestimonialsSection Component Demo</h1>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Grid Display Mode</h2>
            <TestimonialsSection 
              title="What Our Clients Say" 
              subtitle="Hear from organizations that have partnered with GeauxSpecialist" 
              testimonials={testimonials} 
              displayMode="grid"
              showProjectsButton={true}
            />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Carousel Display Mode</h2>
            <TestimonialsSection 
              title="Client Success Stories" 
              subtitle="Swipe through testimonials from our valued clients" 
              testimonials={testimonials} 
              displayMode="carousel"
              bgColor="#f0f7ff"
              autoplaySpeed={7000}
              showProjectsButton={true}
            />
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-center">Custom Colored Background</h2>
            <TestimonialsSection 
              title="Industry Feedback" 
              subtitle="What experts in various fields have to say about our solutions" 
              testimonials={testimonials.slice(0, 3)} 
              displayMode="grid"
              bgColor="#f8f0ff"
            />
          </div>
          
          <div className="text-center my-12">
            <p className="text-gray-600 mb-4">
              The TestimonialsSection component supports both grid and carousel layouts,
              with options for star ratings, custom backgrounds, metrics, and project links.
            </p>
            <Link href="/">
              <span>Navigate to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestComponents;