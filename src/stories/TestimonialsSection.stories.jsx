import React from 'react';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default {
  title: 'Sections/TestimonialsSection',
  component: TestimonialsSection,
};

const Template = (args) => <TestimonialsSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'What Our Clients Say',
  subtitle: 'Real testimonials from satisfied customers',
  testimonials: [
    {
      quote: "Working with GeauxSpecialist transformed our business processes. Their attention to detail was impressive.",
      name: "Sarah Johnson",
      role: "Operations Manager",
      project: "Process Automation",
      image: "/images/testimonials/sarah.jpg",
      metrics: [
        { value: "40%", label: "Time saved" },
        { value: "60%", label: "Error reduction" }
      ]
    },
    {
      quote: "The team delivered beyond our expectations and stayed within budget.",
      name: "Michael Chen",
      role: "CTO",
      project: "Enterprise System Integration",
      image: "/images/testimonials/michael.jpg"
    }
  ]
};

export const NoImages = Template.bind({});
NoImages.args = {
  ...Default.args,
  testimonials: Default.args.testimonials.map(t => ({ ...t, image: null }))
};