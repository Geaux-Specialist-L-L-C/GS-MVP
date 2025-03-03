// File: /src/components/sections/__tests__/TestimonialsSection.test.jsx
// Description: Unit tests for the TestimonialsSection component
// Author: GitHub Copilot
// Created: 2024-03-03

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestimonialsSection from '../TestimonialsSection';

const mockTestimonials = [
  { quote: 'This service was amazing!', author: 'John Doe' },
  { quote: 'Highly recommend to everyone.', author: 'Jane Smith' },
];

describe('TestimonialsSection', () => {
  test('renders TestimonialsSection with correct props', () => {
    render(
      <TestimonialsSection
        title='Our Testimonials'
        subtitle='What clients say about us'
        testimonials={mockTestimonials}
        showProjectsButton={true}
        displayMode='carousel'
        bgColor='bg-gray-100'
        autoplaySpeed={5000}
      />
    );

    expect(screen.getByText('Our Testimonials')).toBeInTheDocument();
    expect(screen.getByText('What clients say about us')).toBeInTheDocument();
    expect(screen.getByText('This service was amazing!')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Highly recommend to everyone.')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Explore Our Projects')).toBeInTheDocument();
  });
});