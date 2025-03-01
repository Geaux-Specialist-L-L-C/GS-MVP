# GeauxSpecialist.com Development Guide

This comprehensive guide outlines the development process, standards, and workflows for the GeauxSpecialist.com Next.js website. Following these guidelines will ensure consistent code quality, efficient collaboration, and streamlined deployment.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Development Environment Setup](#development-environment-setup)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Coding Standards](#coding-standards)
6. [Components Library](#components-library)
7. [Performance Optimization](#performance-optimization)
8. [Testing Strategy](#testing-strategy)
9. [Deployment Process](#deployment-process)
10. [Maintenance Guidelines](#maintenance-guidelines)
11. [Development Status](#development-status)

## Project Overview

GeauxSpecialist.com serves as the central hub for Geaux Specialist LLC, showcasing the company's various projects:
- Geaux Academy - AI-driven educational platform
- Geaux HelpED - Educational support resources
- ReanimatED Echos - Legacy preservation technology
- SEO Geaux - Digital growth strategies
- Geaux Emporium - Creative marketplace platform

The website is built with Next.js to leverage server-side rendering, static site generation, and optimized client-side navigation.

## Development Environment Setup

### Prerequisites
- Node.js (v16.x or later)
- npm (v8.x or later) or yarn (v1.22.x or later)
- Git

### Installation Steps
1. Clone the repository: `git clone https://github.com/geauxspecialist/gs-mvp.git`
2. Navigate to the project directory: `cd gs-mvp`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
5. Open your browser at `http://localhost:3000`

## Project Structure

The project follows a standard Next.js structure with custom organization for components:

```
gs-mvp/
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── forms/      # Form components
│   │   ├── layout/     # Layout components
│   │   ├── sections/   # Page section components
│   │   └── ui/         # UI components
│   ├── pages/          # Next.js pages
│   │   └── projects/   # Project-specific pages
│   ├── stories/        # Storybook stories
│   └── styles/         # CSS modules
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore file
├── jest.config.js      # Jest configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `dev` - Development branch, merge features here
- `feature/feature-name` - Feature branches

### Development Process
1. Create a feature branch from `dev`
2. Implement the feature with appropriate tests
3. Submit a pull request to `dev`
4. After review and approval, merge to `dev`
5. Periodically, merge `dev` into `main` for releases

## Coding Standards

### JavaScript/React
- Use ES6+ syntax
- Follow React best practices and hooks patterns
- Use functional components with hooks instead of class components
- Comment complex logic and component purposes
- Use PropTypes or TypeScript for component prop validation

### CSS
- Use CSS modules for component styling
- Follow BEM naming convention for classes
- Maintain responsive design principles
- Use variables for colors, spacing, and typography

### Accessibility
- Maintain WCAG 2.1 AA compliance
- Use semantic HTML elements
- Include appropriate ARIA attributes
- Ensure keyboard navigation support
- Test with screen readers

## Components Library

### UI Components
- **Button**: Customizable button with various styles and sizes
- **Card**: Content container with optional hover effects
- **FlipCard**: Interactive card that flips to reveal content
- **ProjectCard**: Specialized card for project display

### Layout Components
- **Layout**: Main layout wrapper with meta tags and SEO
- **Header**: Responsive navigation header
- **Footer**: Site footer with links and company info
- **Navigation**: Main navigation menu

### Section Components
- **Hero**: Main landing section with call-to-action
- **AnimatedHero**: Enhanced hero with animations
- **FeaturesSection**: Display project features in grid
- **FlipCardShowcase**: Grid display of FlipCard components
- **TestimonialsSection**: Customer testimonials display

### Form Components
- **ContactForm**: Validated contact form with submission handling

## Performance Optimization

- Use Next.js Image component for optimized images
- Implement code splitting with dynamic imports
- Lazy load below-the-fold content
- Optimize animations with will-change and GPU acceleration
- Cache API responses where appropriate

## Testing Strategy

### Unit Testing
- Use Jest for unit tests
- Test component rendering and functionality
- Mock external dependencies

### Integration Testing
- Test component interactions
- Validate form submissions and validations

### End-to-End Testing
- Use Cypress for E2E testing
- Test critical user flows

### Accessibility Testing
- Use axe-core for automated accessibility tests
- Perform manual keyboard navigation testing

## Deployment Process

### Staging Deployment
1. Merge features into `dev` branch
2. Automated deployment to staging environment
3. Perform QA testing

### Production Deployment
1. Create a release branch from `dev`
2. Perform final QA on release branch
3. Merge to `main` branch
4. Automated deployment to production

## Maintenance Guidelines

### Regular Updates
- Update dependencies monthly
- Review and resolve security vulnerabilities
- Monitor performance metrics

### Code Reviews
- All PRs require at least one reviewer
- Check for code quality, performance, and accessibility
- Ensure test coverage for new features

## Development Status

### Completed Features
- ✅ Basic project structure and component architecture
- ✅ Layout component with SEO optimizations
- ✅ Enhanced Navigation component
- ✅ Animated Hero component
- ✅ FlipCard interactive component
- ✅ Project showcase with flip cards
- ✅ Footer component with social links
- ✅ Detailed project pages for all projects (Geaux Academy, ReanimatED Echos, Geaux HelpED, Geaux Emporium)
- ✅ Enhanced TestimonialsSection with carousel functionality and star ratings
- ✅ Fixed testimonials data in homepage
- ✅ Enhanced FlipCard and FlipCardShowcase components

### In Progress
- 🟡 Features section completion
- 🟡 Contact form implementation and validation
- 🟡 About page implementation

### Pending Tasks
- ⬜ Blog/News section
- ⬜ Integration with CMS for content management
- ⬜ API routes for form submissions
- ⬜ Analytics integration
- ⬜ Unit and integration tests
- ⬜ Storybook documentation for all components
- ⬜ CI/CD pipeline setup
- ⬜ Progressive Web App (PWA) features

### Known Issues
- Form submissions currently use mock functionality
- Missing fallback/error states for some components
- Some responsive design adjustments needed for small devices
- Accessibility improvements needed for interactive elements

---

This development guide will evolve as the project grows. All team members are encouraged to suggest improvements to these guidelines through pull requests to the repository.