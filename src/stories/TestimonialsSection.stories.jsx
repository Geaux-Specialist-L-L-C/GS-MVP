import React from 'react';
import TestimonialsSection from '../components/sections/TestimonialsSection';

export default {
  title: 'Sections/TestimonialsSection',
  component: TestimonialsSection,
  argTypes: {
    displayMode: {
      control: 'select',
      options: ['grid', 'carousel'],
      description: 'Display mode for testimonials: grid or carousel'
    },
    bgColor: {
      control: 'color',
      description: 'Background color for the section'
    },
    autoplaySpeed: {
      control: { type: 'number', min: 0, step: 1000 },
      description: 'Autoplay speed in milliseconds (0 to disable)'
    },
    showProjectsButton: {
      control: 'boolean',
      description: 'Show or hide the "Explore Our Projects" button'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A dynamic testimonial section that can be displayed as a grid or carousel, with support for star ratings, metrics, and customizable styling.'
      }
    },
    layout: 'fullscreen',
  }
};

const sampleTestimonials = [
  {
    quote: "Working with GeauxSpecialist transformed our business processes. Their attention to detail and willingness to understand our unique challenges made all the difference in our project's success.",
    name: "Sarah Johnson",
    role: "Operations Manager",
    project: "Process Automation",
    projectLink: "/projects/geaux-academy",
    image: "/images/testimonials/sarah.jpg",
    rating: 5,
    metrics: [
      { value: "40%", label: "Time saved" },
      { value: "60%", label: "Error reduction" }
    ]
  },
  {
    quote: "The team delivered beyond our expectations and stayed within budget. The custom solution they built has scaled seamlessly with our growing business.",
    name: "Michael Chen",
    role: "CTO",
    project: "Enterprise System Integration",
    image: "/images/testimonials/michael.jpg",
    rating: 4.5
  },
  {
    quote: "Geaux Academy's AI-driven learning platform has revolutionized how we train new employees. Onboarding time has decreased significantly while knowledge retention has improved.",
    name: "Jennifer Williams",
    role: "HR Director",
    project: "Geaux Academy Implementation",
    projectLink: "/projects/geaux-academy",
    image: "/images/testimonials/jennifer.jpg",
    rating: 5,
    metrics: [
      { value: "65%", label: "Faster onboarding" },
      { value: "42%", label: "Better retention" }
    ]
  },
  {
    quote: "The ReanimatED Echos platform helped our museum create an interactive experience that brings history to life. Our visitor engagement metrics have never been better.",
    name: "Robert Taylor",
    role: "Museum Director",
    project: "ReanimatED Echos",
    projectLink: "/projects/reanimated-echos",
    image: "/images/testimonials/robert.jpg",
    rating: 4.5
  },
  {
    quote: "As an e-commerce artisan, Geaux Emporium has given me tools to reach customers globally while maintaining the personal touch that defines my brand.",
    name: "Lisa Martinez",
    role: "Independent Artisan",
    project: "Geaux Emporium",
    projectLink: "/projects/geaux-emporium",
    image: "/images/testimonials/lisa.jpg",
    rating: 5
  }
];

const Template = (args) => <div className="py-8"><TestimonialsSection {...args} /></div>;

export const GridDisplay = Template.bind({});
GridDisplay.args = {
  title: 'What Our Clients Say',
  subtitle: 'Real testimonials from satisfied customers',
  testimonials: sampleTestimonials,
  displayMode: 'grid',
  showProjectsButton: true
};
GridDisplay.parameters = {
  docs: {
    description: {
      story: 'Testimonials displayed in a responsive grid layout with star ratings and metrics.'
    }
  }
};

export const CarouselDisplay = Template.bind({});
CarouselDisplay.args = {
  title: 'Client Success Stories',
  subtitle: 'Swipe through testimonials from our valued clients',
  testimonials: sampleTestimonials,
  displayMode: 'carousel',
  bgColor: '#f0f7ff',
  autoplaySpeed: 5000,
  showProjectsButton: false
};
CarouselDisplay.parameters = {
  docs: {
    description: {
      story: 'Testimonials displayed in an interactive carousel with autoplay capability.'
    }
  }
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  title: 'Industry Feedback',
  subtitle: 'What experts in various fields have to say',
  testimonials: sampleTestimonials.slice(0, 3),
  displayMode: 'grid',
  bgColor: '#f8f0ff',
  showProjectsButton: true
};
CustomBackground.parameters = {
  docs: {
    description: {
      story: 'Testimonials section with a custom background color.'
    }
  }
};

export const NoImages = Template.bind({});
NoImages.args = {
  title: 'Anonymous Testimonials',
  subtitle: 'Feedback from our clients',
  testimonials: sampleTestimonials.map(t => ({ ...t, image: null })),
  displayMode: 'grid'
};
NoImages.parameters = {
  docs: {
    description: {
      story: 'Testimonials without profile images.'
    }
  }
};

export const WithRatingsOnly = Template.bind({});
WithRatingsOnly.args = {
  title: 'Client Ratings',
  subtitle: 'See how clients rate our services',
  testimonials: sampleTestimonials.map(t => ({ 
    name: t.name, 
    role: t.role, 
    quote: t.quote,
    rating: t.rating 
  })),
  displayMode: 'carousel',
  autoplaySpeed: 3000
};
WithRatingsOnly.parameters = {
  docs: {
    description: {
      story: 'Testimonials with star ratings but no metrics or project information.'
    }
  }
};

export const WithMetricsOnly = Template.bind({});
WithMetricsOnly.args = {
  title: 'Success Metrics',
  subtitle: 'Measurable results from our work',
  testimonials: sampleTestimonials
    .filter(t => t.metrics)
    .map(t => ({ 
      name: t.name, 
      quote: t.quote.substring(0, 60) + '...',
      metrics: t.metrics
    })),
  displayMode: 'grid'
};
WithMetricsOnly.parameters = {
  docs: {
    description: {
      story: 'Focus on result metrics with simplified testimonials.'
    }
  }
};

export const MinimalistStyle = Template.bind({});
MinimalistStyle.args = {
  title: 'Client Feedback',
  testimonials: sampleTestimonials.map(t => ({ 
    quote: t.quote,
    name: t.name
  })),
  displayMode: 'grid',
  bgColor: '#ffffff'
};
MinimalistStyle.parameters = {
  docs: {
    description: {
      story: 'Minimalist version with just quotes and names.'
    }
  }
};