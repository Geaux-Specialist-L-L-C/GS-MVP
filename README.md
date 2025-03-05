# GeauxSpecialist.com

Official website for Geaux Specialist LLC, developed with Next.js.
a
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [CI/CD](#cicd)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

GeauxSpecialist.com serves as the central hub for Geaux Specialist LLC, showcasing the company's various projects:
- Geaux Academy (education platform)
- Geaux Health (AI-powered healthcare assistance)
- ReanimatED Echos (voice processing technology)
- Geaux Emporium (e-commerce for educational resources)

## Features

- Responsive design optimized for all device sizes
- Modern, clean UI with intuitive navigation
- Comprehensive project showcases 
- Contact form with validation
- SEO-optimized content
- Fast loading performance
- Accessibility compliance (WCAG 2.1 AA)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: CSS Modules
- **Deployment**: [Vercel](https://vercel.com/)
- **Testing**: Jest and React Testing Library
- **Linting**: ESLint and Prettier
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v7.x or later) or Yarn (v1.22.x or later)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/[your-organization]/geauxspecialist.git
   cd geauxspecialist
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment files:
   ```bash
   cp .env.example .env.local
   ```

4. Update environment variables in `.env.local` as needed.

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
geauxspecialist/
├── components/          # Reusable UI components
│   ├── layout/          # Layout components (header, footer, etc.)
│   ├── sections/        # Page sections (hero, features, etc.)
│   └── ui/              # UI elements (buttons, cards, etc.)
├── pages/               # Next.js pages
│   ├── projects/        # Project-specific pages
│   │   ├── geaux-academy.js
│   │   ├── geaux-health.js
│   │   ├── reanimated-echos.js
│   │   └── geaux-emporium.js
│   ├── _app.js          # Custom App component
│   ├── _document.js     # Custom Document component
│   ├── index.js         # Home page
│   ├── about.js         # About page
│   ├── projects.js      # Projects overview page
│   └── contact.js       # Contact page
├── public/              # Static assets
│   ├── images/          # Image files
│   ├── fonts/           # Font files
│   └── favicon.ico      # Site favicon
├── styles/              # Global styles and CSS modules
│   ├── globals.css      # Global CSS
│   └── *.module.css     # Component-specific CSS modules
├── utils/               # Utility functions
├── .github/             # GitHub configuration
│   └── workflows/       # GitHub Actions workflows
├── tests/               # Test files
├── .eslintrc.js         # ESLint configuration
├── .prettierrc.js       # Prettier configuration
├── jest.config.js       # Jest configuration
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Deployment

The website is automatically deployed to Vercel through GitHub Actions:

- `develop` branch deploys to staging: [staging.geauxspecialist.com](https://staging.geauxspecialist.com)
- `main` branch deploys to production: [geauxspecialist.com](https://geauxspecialist.com)

## CI/CD

CI/CD is implemented using GitHub Actions workflows:

- **Lint**: Validates code style and quality
- **Test**: Runs unit and integration tests
- **Build**: Builds the application
- **Deploy**: Deploys to Vercel staging or production environments

## Testing

We use Jest and React Testing Library for testing:

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## Contributing

Please read our [Contributing Guidelines](./Contributing_Guidelines.md) and [Development Guide](./DEVELOPMENT_GUIDE.md) before submitting contributions.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For questions or inquiries, please contact the development team at [dev@geauxspecialist.com](mailto:dev@geauxspecialist.com).
