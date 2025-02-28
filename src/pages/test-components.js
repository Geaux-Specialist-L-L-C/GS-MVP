import React from 'react';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const TestComponents = () => {
  const testimonials = [
    {
      quote: "GeauxSpecialist helped us increase productivity by 35% within the first month.",
      name: "Robert Smith",
      role: "Director of Operations",
      project: "Workflow Optimization",
      image: "/images/testimonials/robert.jpg",
      metrics: [
        { value: "35%", label: "Productivity increase" },
        { value: "20%", label: "Cost reduction" }
      ]
    },
    {
      quote: "The custom solution provided exactly what we needed.",
      name: "Lisa Wong",
      role: "Marketing Director",
      project: "Data Analytics Dashboard",
      image: "/images/testimonials/lisa.jpg"
    }
  ];

  return (
    <div>
      <h1 className="text-2xl p-4">Component Testing Page</h1>
      <TestimonialsSection 
        title="Our Client Testimonials" 
        subtitle="Hear what our clients have to say about our services" 
        testimonials={testimonials} 
      />
    </div>
  );
};

export default TestComponents;