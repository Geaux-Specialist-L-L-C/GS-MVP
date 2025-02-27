# Contributing to GeauxSpecialist.com

Thank you for your interest in contributing to the GeauxSpecialist.com website! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Process](#development-process)
4. [Coding Standards](#coding-standards)
5. [Pull Request Process](#pull-request-process)
6. [Issue Reporting Guidelines](#issue-reporting-guidelines)
7. [Project Structure](#project-structure)
8. [Communication](#communication)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v7.x or later) or Yarn (v1.22.x or later)
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/geauxspecialist.git
   cd geauxspecialist
   ```
3. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/geauxspecialist.git
   ```
4. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
5. Create a branch for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

1. **Keep your fork up to date**:
   ```bash
   git fetch upstream
   git checkout develop
   git merge upstream/develop
   ```

2. **Create a feature branch** from the `develop` branch:
   ```bash
   git checkout -b feature/your-feature-name develop
   ```

3. **Make your changes**: Implement your feature or fix, following the coding standards.

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "[feature/fix/chore/docs]: Brief description"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Submit a pull request** to the `develop` branch of the original repository.

## Coding Standards

### General Guidelines

- Write clean, readable, and maintainable code
- Follow established patterns in the codebase
- Document complex functions and components
- Write meaningful variable and function names
- Keep functions and components focused on single responsibilities

### JavaScript/React

- Use ES6+ features appropriately
- Use functional components with hooks
- Destructure props and state
- Handle errors appropriately
- Add proper prop validation

### CSS

- Use CSS modules for component-specific styling
- Follow BEM naming convention
- Design mobile-first
- Keep specificity low

### Testing

- Write unit tests for utility functions
- Create component tests for UI elements
- Test edge cases and error scenarios

## Pull Request Process

1. Update the README.md or documentation with details of changes if applicable
2. Fill out the pull request template completely
3. Ensure your code passes all tests and linting
4. Request review from at least one maintainer
5. Address any reviewer feedback
6. PRs require approval from at least one maintainer before merging

## Issue Reporting Guidelines

When creating an issue, please use the appropriate issue template and provide as much detail as possible, including:

- Clear and descriptive title
- Detailed description of the issue or feature request
- Steps to reproduce (for bugs)
- Expected behavior
- Screenshots if applicable
- Environment details (browser, OS, device)

## Project Structure

```
geauxspecialist/
├── components/          # Reusable UI components
├── pages/               # Next.js pages
├── public/              # Static assets
├── styles/              # Global styles and CSS modules
├── utils/               # Utility functions
├── .github/             # GitHub configuration
├── tests/               # Test files
```

For more details, refer to the [Development Guide](./DEVELOPMENT.md).

## Communication

- Use GitHub Issues for bug reports and feature requests
- Join our Slack channel for team discussions
- Major announcements will be posted in the repository

Thank you for contributing to GeauxSpecialist.com!