import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialsSection from '../TestimonialsSection';

describe('TestimonialsSection', () => {
  const mockTestimonials = [
    {
      quote: "This service was amazing!",
      name: "John Doe",
      role: "CEO",
      project: "Website Redesign",
      image: "/path/to/image.jpg",
      metrics: [
        { value: "30%", label: "Increase in traffic" },
        { value: "25%", label: "Conversion improvement" }
      ]
    }
  ];

  it('renders the title and subtitle correctly', () => {
    render(
      <TestimonialsSection 
        title="Our Testimonials" 
        subtitle="What clients say about us" 
        testimonials={mockTestimonials} 
      />
    );
    
    expect(screen.getByText('Our Testimonials')).toBeInTheDocument();
    expect(screen.getByText('What clients say about us')).toBeInTheDocument();
  });

  it('renders the testimonials correctly', () => {
    render(
      <TestimonialsSection 
        title="Our Testimonials" 
        testimonials={mockTestimonials} 
      />
    );
    
    expect(screen.getByText('This service was amazing!')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('CEO')).toBeInTheDocument();
    expect(screen.getByText('Project: Website Redesign')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
    expect(screen.getByText('Increase in traffic')).toBeInTheDocument();
  });
});