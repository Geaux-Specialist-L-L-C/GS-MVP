# .github/CODEOWNERS

# These owners will be the default owners for everything in the repo.
# Unless a later match takes precedence, these owners will be requested
# for review when someone opens a pull request.
*       @project-admin

# Core application files
/pages/             @frontend-lead
/components/        @frontend-lead
/styles/            @design-lead
/utils/             @backend-lead

# Configuration files
/next.config.js     @devops-lead
/.github/           @devops-lead
/.eslintrc.json     @frontend-lead
/.prettierrc        @frontend-lead

# Documentation
/README.md          @docs-maintainer
/CONTRIBUTING.md    @docs-maintainer
/LICENSE            @legal-team

# Project-specific pages
/pages/projects/    @content-manager @frontend-lead

# API and backend functionality
/pages/api/         @backend-lead