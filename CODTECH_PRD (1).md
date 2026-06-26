# CODTECH IT Solutions Pvt. Ltd.
# Product Requirements Document
# React.js Web Development Internship

---

```
Document Title   : CODTECH Internship — Product Requirements Document
Document ID      : CODTECH-PRD-2026-CITS3986
Version          : 1.0.0
Status           : Approved
Classification   : Internal — Internship Use Only
Prepared By      : CODTECH Engineering & Documentation Team
Reviewed By      : CODTECH Technical Lead
Approved By      : CODTECH Program Director
Date Created     : 06 June 2026
Last Updated     : 06 June 2026
```

---

## Cover Page

| Field                | Details                                     |
|----------------------|---------------------------------------------|
| Student Name         | Pranav Sachin Naikude                       |
| Intern ID            | CITS3986                                    |
| Organization         | CODTECH IT Solutions Pvt. Ltd.              |
| Internship Domain    | React.js Web Development                    |
| Internship Duration  | 6 Weeks                                     |
| Internship Period    | 06 June 2026 – 18 July 2026                 |
| Total Projects       | 4                                           |
| Primary Technology   | React.js (Vite), JavaScript (ES2022+)       |
| Document Type        | Product Requirements Document (PRD)         |
| Confidentiality      | Internal — CODTECH IT Solutions Pvt. Ltd.   |

---

## Version History

| Version | Date           | Author                        | Description                            |
|---------|----------------|-------------------------------|----------------------------------------|
| 0.1.0   | 06 June 2026   | CODTECH Documentation Team    | Initial draft — project scope defined  |
| 0.5.0   | 07 June 2026   | CODTECH Technical Lead        | Technical stack and standards added    |
| 0.9.0   | 08 June 2026   | CODTECH Program Director      | Review and feedback incorporated       |
| 1.0.0   | 09 June 2026   | CODTECH Documentation Team    | Final approved version published       |

---

## Table of Contents

1. Introduction
2. Purpose
3. Scope
4. Internship Objectives
5. Development Standards
   - 5.1 Coding Standards
   - 5.2 Naming Conventions
   - 5.3 Folder Structures
   - 5.4 Technology Stack
6. GitHub Repository Rules
   - 6.1 Branch Strategy
   - 6.2 Commit Message Convention
   - 6.3 Environment Variable Policy
7. UI Guidelines
8. Responsive Design Standards
9. Accessibility Standards
10. Performance Standards
11. Error Handling Standards
12. Testing Standards
13. Security Standards
14. Deployment Standards
15. Documentation Standards
16. Project 1 — React Weather Hub
17. Project 2 — React 3D Product Viewer
18. Project 3 — Fitness Tracker (React Hooks)
19. Project 4 — Travel Planner App
20. Appendix A — Coding Standards
21. Appendix B — Folder Structures
22. Appendix C — Environment Variables
23. Appendix D — Commit Convention
24. Appendix E — Submission Checklist
25. Appendix F — Repository Checklist

---

## 1. Introduction

This Product Requirements Document (PRD) serves as the authoritative specification for all software deliverables produced by Pranav Sachin Naikude (Intern ID: CITS3986) during the CODTECH IT Solutions Pvt. Ltd. React.js Web Development Internship from 06 June 2026 to 18 July 2026.

This document defines the technical requirements, functional specifications, non-functional requirements, quality standards, and delivery expectations for each of the four projects assigned during the internship period. It is written to enterprise-grade standards to provide the intern with professional exposure to how real-world software development is planned, documented, and executed within a structured engineering organization.

This PRD must be treated as the single source of truth for all development decisions. Any deviation from this document must be formally discussed with the CODTECH Technical Lead and recorded in the version history.

---

## 2. Purpose

The purpose of this document is to:

- Define clear, unambiguous requirements for all four internship projects.
- Establish engineering standards that mirror industry best practices used in professional React.js development teams.
- Provide a reference document that governs code quality, architecture decisions, UI/UX standards, testing expectations, and deployment requirements.
- Create measurable acceptance criteria against which each project can be evaluated for successful completion.
- Ensure the intern gains professional-grade experience in requirements-driven software development.
- Serve as a learning artifact that demonstrates the intern's ability to operate within an enterprise software development lifecycle.

---

## 3. Scope

This document covers the following four projects assigned to Intern CITS3986:

| Project No. | Project Name                    | Repository Name                  | Domain          |
|-------------|----------------------------------|----------------------------------|-----------------|
| Task 1      | React Weather Hub               | react-weather-hub                | Weather / API   |
| Task 2      | React 3D Product Viewer         | react-3d-product-viewer          | 3D / WebGL      |
| Task 3      | Fitness Tracker (React Hooks)   | fitness-tracker-react-hooks      | Health / Tracker|
| Task 4      | Travel Planner App              | travel-planner-app               | Productivity    |

**In Scope:**
- All frontend React.js development.
- API integration where applicable.
- Responsive UI implementation.
- Local state management via React Hooks.
- LocalStorage-based persistence where applicable.
- GitHub repository management and documentation.
- README documentation for each project.

**Out of Scope:**
- Backend or server-side development.
- Database design or backend API construction.
- Authentication systems (unless specified per project).
- Monetization or production infrastructure.
- Automated CI/CD pipelines (beyond deployment checklist compliance).

---

## 4. Internship Objectives

By the conclusion of this internship on 18 July 2026, the intern is expected to have achieved the following objectives:

| # | Objective                                                                 | Measurement                                    |
|---|---------------------------------------------------------------------------|------------------------------------------------|
| 1 | Build four fully functional React.js applications                        | All four projects meet acceptance criteria     |
| 2 | Demonstrate mastery of core React concepts: Hooks, State, Props, Effects | Verified through code review                  |
| 3 | Integrate third-party APIs (REST) into a React application               | Task 1 functional with live weather data       |
| 4 | Implement 3D rendering using React Three Fiber and Three.js              | Task 2 renders interactive 3D models           |
| 5 | Build persistent client-side applications using LocalStorage             | Tasks 3 & 4 persist data across page refreshes|
| 6 | Follow professional GitHub workflow (branches, commits, PR etiquette)    | Repository history reflects standards in §6   |
| 7 | Write professional documentation (README, code comments)                | Each repo has compliant README                 |
| 8 | Build responsive, accessible UI across all four projects                | Verified via Chrome DevTools and Lighthouse    |
| 9 | Apply performance best practices (lazy loading, memoization)            | Lighthouse performance score ≥ 85              |
|10 | Complete and submit all projects within the 6-week timeline             | All projects submitted by 18 July 2026         |

---

## 5. Development Standards

### 5.1 Coding Standards

All code produced during this internship must conform to the following standards:

**Language:** JavaScript (ES2022+) — TypeScript is encouraged but not mandatory.

**Style Guide:** Airbnb JavaScript Style Guide with the following project-specific overrides:
- Semicolons: Required.
- Quotes: Single quotes for JS strings; double quotes for JSX attributes.
- Indentation: 2 spaces (no tabs).
- Max line length: 100 characters.
- Trailing commas: Required in multi-line structures.

**Linting:**
- ESLint with `eslint-plugin-react` and `eslint-plugin-react-hooks`.
- Prettier for code formatting.
- Configuration files (`.eslintrc.cjs`, `.prettierrc`) must be present in every repository.

**Code Quality Rules:**
- No `console.log` statements in committed code (use `// TODO: remove` comments during development, clean before commit).
- No unused variables or imports.
- All components must be functional (no class components).
- All event handlers must be named descriptively (`handleSubmit`, not `onClick`).
- Avoid magic numbers — define constants.
- Props must be destructured at the function parameter level.

```javascript
// ✅ Correct
const WeatherCard = ({ cityName, temperature, humidity }) => {
  return (
    <div className={styles.card}>
      <h2>{cityName}</h2>
      <p>{temperature}°C</p>
    </div>
  );
};

// ❌ Incorrect
const WeatherCard = (props) => {
  return (
    <div>
      <h2>{props.cityName}</h2>
    </div>
  );
};
```

### 5.2 Naming Conventions

| Entity               | Convention          | Example                          |
|----------------------|---------------------|----------------------------------|
| React Components     | PascalCase          | `WeatherCard`, `ProductViewer`   |
| Files (Components)   | PascalCase          | `WeatherCard.jsx`                |
| Files (Utilities)    | camelCase           | `formatTemperature.js`           |
| CSS Modules          | camelCase classes   | `styles.cardWrapper`             |
| Custom Hooks         | camelCase + `use`   | `useWeatherData`, `useLocalStorage` |
| Constants            | SCREAMING_SNAKE_CASE| `MAX_SEARCH_HISTORY`, `API_BASE_URL` |
| Variables            | camelCase           | `currentTemperature`, `isLoading`|
| Boolean Variables    | `is` / `has` prefix | `isLoading`, `hasError`         |
| Event Handlers       | `handle` prefix     | `handleSearch`, `handleReset`   |
| State Setters        | `set` prefix        | `setWeatherData`, `setIsLoading`|

### 5.3 Folder Structures

All four projects must follow the canonical folder structure defined in Appendix B. The top-level structure for all projects is:

```
project-name/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── constants/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### 5.4 Technology Stack

| Layer              | Technology           | Version (Min) | Notes                                   |
|--------------------|----------------------|---------------|-----------------------------------------|
| UI Framework       | React                | 18.x          | Functional components, Hooks only       |
| Build Tool         | Vite                 | 5.x           | Fast HMR, optimized production builds  |
| HTTP Client        | Axios                | 1.x           | Used in Task 1 for API calls            |
| 3D Rendering       | React Three Fiber    | 8.x           | Used in Task 2                          |
| 3D Utilities       | Three.js             | 0.160+        | Peer dep for React Three Fiber          |
| 3D Helpers         | Drei                 | 9.x           | Camera controls, loaders, environments  |
| Data Visualization | Chart.js             | 4.x           | Used in Task 3 for statistics           |
| Routing            | React Router DOM     | 6.x           | Used in Task 4                          |
| Styling            | CSS Modules          | Native        | Scoped styles per component             |
| Linting            | ESLint               | 8.x           | With React plugin                       |
| Formatting         | Prettier             | 3.x           | Auto-formatting                         |
| Package Manager    | npm                  | 9.x+          | `package-lock.json` must be committed   |
| Node.js            | Node.js              | 18.x LTS      | Minimum runtime version                 |

---

## 6. GitHub Repository Rules

### 6.1 Branch Strategy

All repositories must follow the following branching model:

| Branch        | Purpose                                          | Protection Rules                     |
|---------------|--------------------------------------------------|--------------------------------------|
| `main`        | Production-ready, always deployable code         | No direct pushes; merge via PR only  |
| `develop`     | Integration branch for ongoing development       | Force push disabled                  |
| `feature/*`   | Individual feature development                   | Branched from `develop`              |
| `fix/*`       | Bug fixes                                        | Branched from `develop`              |
| `docs/*`      | Documentation-only changes                       | Branched from `develop`              |
| `chore/*`     | Config, setup, dependency updates                | Branched from `develop`              |

**Branch Naming Examples:**
```
feature/city-search
feature/5-day-forecast
fix/temperature-unit-toggle
docs/update-readme
chore/add-eslint-config
```

### 6.2 Commit Message Convention

All commits must follow the Conventional Commits specification (v1.0.0):

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Allowed Types:**

| Type       | When to Use                                         |
|------------|-----------------------------------------------------|
| `feat`     | A new feature                                       |
| `fix`      | A bug fix                                           |
| `docs`     | Documentation changes only                         |
| `style`    | Code style changes (formatting, no logic change)   |
| `refactor` | Code change that neither fixes a bug nor adds feature|
| `perf`     | Performance improvement                             |
| `test`     | Adding or updating tests                            |
| `chore`    | Build process, tooling, dependency changes          |
| `ci`       | CI configuration changes                           |

**Examples:**
```
feat(search): add city search with debounced input
fix(weather): resolve temperature unit not persisting on refresh
docs(readme): add setup instructions and API key section
chore(deps): update axios to v1.6.8
refactor(hooks): extract weather fetch logic into useWeatherData hook
perf(3d): implement lazy loading for 3D model assets
style(card): apply CSS module scoping to WeatherCard component
```

### 6.3 Environment Variable Policy

- All environment variables must be prefixed with `VITE_` for Vite projects.
- `.env` files must **never** be committed to the repository.
- A `.env.example` file must exist in every repository with placeholder values.
- Sensitive keys (API keys, secrets) must be documented in `.env.example` with placeholder text.
- All environment variables must be validated at application startup.

**`.env.example` Format:**
```
# OpenWeather API
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5

# App Config
VITE_APP_NAME=React Weather Hub
VITE_MAX_SEARCH_HISTORY=5
```

**`.gitignore` must include:**
```
.env
.env.local
.env.*.local
```

---

## 7. UI Guidelines

- All UIs must be built mobile-first.
- Color systems must use CSS custom properties (variables).
- Typography must use a web-safe font or a Google Font loaded via `<link>` in `index.html`.
- Spacing must follow an 8-point grid system (8px, 16px, 24px, 32px, 48px, 64px).
- No inline styles unless dynamically computed at runtime.
- CSS Modules must be used for component-level scoping.
- Global styles must live in `src/styles/global.css`.
- No use of CSS frameworks (Bootstrap, Tailwind) — all styling must be hand-written CSS.
- All interactive elements must have visible focus indicators.
- Color contrast ratio must meet WCAG AA (minimum 4.5:1 for normal text).

**CSS Custom Properties Template:**
```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-surface: #ffffff;
  --color-background: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #64748b;
  --color-error: #ef4444;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-border: #e2e8f0;

  /* Typography */
  --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;

  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

---

## 8. Responsive Design Standards

All four projects must be fully responsive. The following breakpoint system must be used:

| Breakpoint  | Name      | Min Width | Target Devices                     |
|-------------|-----------|-----------|-------------------------------------|
| `xs`        | Mobile    | 320px     | Small phones                        |
| `sm`        | Mobile L  | 480px     | Large phones                        |
| `md`        | Tablet    | 768px     | Tablets, large phones landscape     |
| `lg`        | Desktop   | 1024px    | Laptops, desktops                   |
| `xl`        | Wide      | 1280px    | Large monitors                      |
| `2xl`       | Ultra     | 1536px    | Ultra-wide monitors                 |

**Media Query Usage:**
```css
/* Mobile first — base styles target mobile */
.container {
  padding: var(--spacing-4);
  grid-template-columns: 1fr;
}

/* Tablet and above */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-8);
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Responsive Testing Requirements:**
- All projects must be tested at 375px (iPhone SE), 768px (iPad), and 1440px (desktop).
- Screenshots at all three breakpoints must be included in each project's README.

---

## 9. Accessibility Standards

All projects must meet WCAG 2.1 Level AA compliance:

| Requirement                    | Standard           | Implementation                                    |
|--------------------------------|--------------------|---------------------------------------------------|
| Color Contrast (Normal Text)   | 4.5:1 minimum      | Validate with Chrome DevTools / Lighthouse        |
| Color Contrast (Large Text)    | 3:1 minimum        | Headings ≥ 18px bold or ≥ 24px regular           |
| Keyboard Navigation            | Full support       | All interactive elements reachable via Tab key    |
| Focus Indicators               | Visible            | `:focus-visible` outline on all interactive elem  |
| Screen Reader Support          | Semantic HTML      | Correct use of `<header>`, `<main>`, `<nav>`, `<section>` |
| ARIA Labels                    | Where needed       | Use `aria-label` on icon buttons                  |
| Alt Text for Images            | Required           | All `<img>` elements must have descriptive `alt`  |
| Form Labels                    | Required           | All form inputs must have associated `<label>`    |
| Error Announcements            | ARIA live regions  | Errors surfaced to screen readers via `aria-live` |

```jsx
// ✅ Accessible button with icon
<button
  className={styles.searchButton}
  onClick={handleSearch}
  aria-label="Search for weather in this city"
  type="button"
>
  <SearchIcon aria-hidden="true" />
</button>

// ✅ Accessible form input
<label htmlFor="city-search" className={styles.label}>
  Search City
</label>
<input
  id="city-search"
  type="text"
  value={query}
  onChange={handleQueryChange}
  placeholder="Enter city name..."
  aria-required="true"
  aria-describedby="search-hint"
/>
<p id="search-hint" className={styles.hint}>
  Enter a city name to get current weather conditions.
</p>
```

---

## 10. Performance Standards

| Metric                         | Target         | Measurement Tool               |
|--------------------------------|----------------|--------------------------------|
| Lighthouse Performance Score   | ≥ 85           | Chrome Lighthouse              |
| First Contentful Paint (FCP)   | ≤ 1.8s         | Chrome Lighthouse              |
| Time to Interactive (TTI)      | ≤ 3.8s         | Chrome Lighthouse              |
| Total Bundle Size (gzipped)    | ≤ 500KB        | Vite build output              |
| Largest Contentful Paint (LCP) | ≤ 2.5s         | Chrome Lighthouse              |
| Cumulative Layout Shift (CLS)  | ≤ 0.1          | Chrome Lighthouse              |

**Performance Best Practices:**
- Use `React.memo()` for components that render frequently with identical props.
- Use `useMemo()` for expensive computations.
- Use `useCallback()` for event handlers passed as props.
- Implement lazy loading for routes using `React.lazy()` and `<Suspense>`.
- Optimize images: use `.webp` format, specify explicit `width` and `height`.
- Avoid layout thrashing by reading DOM properties in batch.

---

## 11. Error Handling Standards

All projects must implement consistent, user-friendly error handling:

**Error Categories:**
| Category           | Examples                                   | Handling Strategy                         |
|--------------------|--------------------------------------------|--------------------------------------------|
| Network Errors     | API timeout, no internet                  | Retry button + descriptive message         |
| API Errors         | 404, 401, 429 rate limit                  | Map status codes to human-readable messages|
| Validation Errors  | Empty input, invalid format               | Inline field-level error messages          |
| Runtime Errors     | Unexpected JS exceptions                  | Error boundary component                   |
| Not Found          | Invalid route                             | 404 page with navigation back to home      |

**Error Boundary Pattern:**
```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="error-boundary">
          <h2>Something went wrong</h2>
          <p>An unexpected error occurred. Please refresh the page.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

---

## 12. Testing Standards

While automated testing is encouraged, the following manual testing checklist must be completed for every project before submission:

**Functional Testing:**
- [ ] All user stories are exercised and produce expected outcomes.
- [ ] All error states are triggered and display correct messages.
- [ ] All interactive elements respond to click, keyboard, and touch events.
- [ ] All forms validate correctly and prevent invalid submissions.
- [ ] Data persistence works correctly across page refreshes (LocalStorage projects).

**Cross-Browser Testing:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if macOS available)
- [ ] Chrome Mobile (Android simulation)

**Responsive Testing:**
- [ ] 375px (Mobile)
- [ ] 768px (Tablet)
- [ ] 1440px (Desktop)

**Lighthouse Audits:**
- [ ] Performance ≥ 85
- [ ] Accessibility ≥ 90
- [ ] Best Practices ≥ 90
- [ ] SEO ≥ 80

---

## 13. Security Standards

| Requirement                                   | Implementation                                              |
|-----------------------------------------------|-------------------------------------------------------------|
| Never expose API keys in source code          | Store in `.env`; access via `import.meta.env.VITE_*`       |
| Never commit `.env` files                     | Enforce via `.gitignore`                                    |
| Sanitize user input before display            | React escapes JSX by default; avoid `dangerouslySetInnerHTML`|
| Avoid exposing sensitive data in LocalStorage | Store only non-sensitive UI state and user preferences      |
| Keep dependencies updated                     | Run `npm audit` before submission; resolve critical issues   |
| Content Security Policy                       | Configure in deployment platform                            |

---

## 14. Deployment Standards

All projects must be deployable and include a live deployment link in the README.

**Recommended Platforms:**
- Vercel (preferred for React/Vite projects)
- Netlify
- GitHub Pages (for static builds)

**Pre-Deployment Checklist:**
- [ ] `npm run build` completes without errors or warnings.
- [ ] Built output in `dist/` directory verified to work locally via `npm run preview`.
- [ ] All environment variables configured in the deployment platform's dashboard.
- [ ] `.env.example` is present and accurate.
- [ ] No hardcoded API keys or secrets in source code.
- [ ] Deployment URL added to GitHub repository About section.
- [ ] Deployment URL included in README.

---

## 15. Documentation Standards

**README Requirements (All Projects):**
Every project README must include:
1. Project title and description
2. Live demo link
3. Screenshots (minimum 3, at different breakpoints)
4. Features list
5. Technology stack
6. Prerequisites
7. Installation and setup steps
8. Environment variables setup
9. Available scripts
10. Folder structure
11. API documentation (if applicable)
12. Known limitations
13. License

---

---

# 16. Project 1 — React Weather Hub

---

## 16.1 Overview

React Weather Hub is a client-side React.js application that provides real-time weather information and a 5-day forecast for any city in the world. It integrates with the OpenWeatherMap API to fetch current conditions and extended forecast data, presenting this information through a clean, responsive, and visually rich user interface built with CSS Modules. The application enables users to search for cities, view weather conditions with appropriate weather icons, toggle between Celsius and Fahrenheit, and maintain a history of recent searches.

---

## 16.2 Problem Statement

Users frequently need to access weather information for multiple cities — whether for travel planning, monitoring home cities, or general curiosity. Existing weather applications are often cluttered with advertising, require account creation, or do not provide a clean developer-portfolio-quality user experience. React Weather Hub solves this by offering a lightweight, ad-free, API-powered weather interface that demonstrates professional React.js development practices including custom hooks, API integration, error handling, responsive design, and component composition.

---

## 16.3 Goals

| Goal | Description                                                                          |
|------|--------------------------------------------------------------------------------------|
| G1   | Provide accurate, real-time weather data from a reliable third-party API             |
| G2   | Deliver a fast, responsive UI that works on mobile, tablet, and desktop              |
| G3   | Enable users to quickly search and retrieve weather for any city worldwide           |
| G4   | Present weather data in a visually intuitive format with icons and formatted values  |
| G5   | Maintain search history for user convenience without requiring authentication        |
| G6   | Demonstrate mastery of Axios-based API integration and custom React hooks            |

---

## 16.4 Objectives

- Implement a real-time city weather search using the OpenWeatherMap Current Weather API.
- Display current temperature, weather condition, humidity, wind speed, and feels-like temperature.
- Implement a 5-day / 3-hour forecast using the OpenWeatherMap Forecast API.
- Allow users to toggle temperature display between Celsius and Fahrenheit.
- Maintain and display the last 5 searched cities using LocalStorage.
- Display weather-appropriate icons from the OpenWeatherMap icon set.
- Handle all loading, error, and empty states gracefully.
- Achieve Lighthouse performance score ≥ 85.

---

## 16.5 Target Users

- Travelers who need quick weather lookups for destination cities.
- General users who want weather for their current city or another location.
- Developers reviewing the intern's portfolio who want to see API integration skills.
- Students using the project as a reference implementation for React + API projects.

---

## 16.6 User Personas

**Persona 1 — The Traveler**
- Name: Meera, 28, Marketing Manager
- Uses Case: Planning a trip to London, wants to quickly check the weather for the next 5 days before packing.
- Device: Mobile (iPhone, iOS)
- Needs: Fast load, at-a-glance 5-day forecast, temperature in Celsius.
- Frustration: Sites with too many ads and distractions.

**Persona 2 — The Daily Checker**
- Name: Arjun, 34, Software Engineer
- Use Case: Checks weather for multiple cities — his hometown and his office city — every morning.
- Device: Desktop (macOS, Chrome)
- Needs: Recent searches, quick switch between cities.
- Frustration: Having to type the same cities over and over.

**Persona 3 — The Portfolio Reviewer**
- Name: Priya, 42, Engineering Manager at a tech company
- Use Case: Reviewing Pranav's internship portfolio to assess React skills.
- Device: Desktop (Windows, Chrome)
- Needs: Clean code, good UX, professional appearance.
- Frustration: Projects that don't work out of the box or are buggy.

---

## 16.7 User Stories

| ID    | As a…         | I want to…                                                   | So that…                                              |
|-------|---------------|--------------------------------------------------------------|-------------------------------------------------------|
| US-01 | User          | Search for a city by name                                    | I can see the current weather for that city            |
| US-02 | User          | See the current temperature, humidity, and wind speed        | I understand the current conditions at a glance        |
| US-03 | User          | See a weather icon that represents current conditions        | I can quickly identify sunny, rainy, or cloudy weather |
| US-04 | User          | View a 5-day weather forecast                               | I can plan my activities for the week ahead            |
| US-05 | User          | Toggle between Celsius and Fahrenheit                        | I can view temperatures in my preferred unit           |
| US-06 | User          | See my recent city searches listed                           | I can quickly switch back to previously viewed cities  |
| US-07 | User          | Click a recent search to reload that city's weather          | I don't have to retype city names I've searched before |
| US-08 | User          | See a loading indicator while weather data is being fetched  | I know the app is working and not frozen               |
| US-09 | User          | See a meaningful error message if a city is not found        | I understand why no data was shown                     |
| US-10 | User          | See a meaningful error message if the network is unavailable | I understand why the app isn't working                 |
| US-11 | User          | Use the app on my mobile phone                               | I get the same experience as on desktop                |

---

## 16.8 Functional Requirements

### P0 — Must Have (Launch Blockers)

| ID    | Requirement                                                                                          |
|-------|------------------------------------------------------------------------------------------------------|
| FR-01 | The application must provide a text input field for searching cities by name                         |
| FR-02 | On search submission, the application must call the OpenWeatherMap Current Weather API               |
| FR-03 | The application must display: city name, country code, current temperature, weather description, humidity, wind speed, and "feels like" temperature |
| FR-04 | The application must display a weather condition icon corresponding to the API response               |
| FR-05 | If the searched city is not found (API 404), display an error message: "City not found. Please check the spelling and try again." |
| FR-06 | If the network request fails, display an error message: "Unable to fetch weather data. Please check your internet connection." |
| FR-07 | A loading spinner or skeleton state must be shown while API requests are in progress                 |
| FR-08 | The application must display a 5-day weather forecast with date, icon, min/max temperature, and condition description |

### P1 — Should Have

| ID    | Requirement                                                                                          |
|-------|------------------------------------------------------------------------------------------------------|
| FR-09 | The application must allow the user to toggle temperature units between Celsius and Fahrenheit        |
| FR-10 | The selected temperature unit preference must persist in LocalStorage across page refreshes          |
| FR-11 | The application must store the last 5 searched cities in LocalStorage                                |
| FR-12 | Recent searches must be displayed below the search input as clickable chips or list items            |
| FR-13 | Clicking a recent search item must trigger a new weather search for that city                        |

### P2 — Nice to Have

| ID    | Requirement                                                                                          |
|-------|------------------------------------------------------------------------------------------------------|
| FR-14 | The search input must be debounced (300ms) to prevent excessive API calls on rapid keystrokes        |
| FR-15 | The application may display background imagery or gradient colors that reflect the current weather condition |
| FR-16 | The user may be able to clear individual recent searches or clear all recent searches                |
| FR-17 | Sunrise and sunset times may be displayed if provided by the API response                           |

---

## 16.9 Non-Functional Requirements

| ID     | Category       | Requirement                                                        |
|--------|----------------|--------------------------------------------------------------------|
| NFR-01 | Performance    | Initial page load ≤ 1.8s on a standard broadband connection        |
| NFR-02 | Performance    | API response to data display transition ≤ 500ms                   |
| NFR-03 | Reliability    | Application must degrade gracefully when API is unavailable        |
| NFR-04 | Scalability    | Application must handle searches for any city in the world         |
| NFR-05 | Compatibility  | Must function in Chrome 120+, Firefox 120+, and Safari 17+        |
| NFR-06 | Accessibility  | Lighthouse Accessibility score ≥ 90                               |
| NFR-07 | Security       | API key must never appear in client-side bundle source code output |
| NFR-08 | Maintainability| All components must be < 150 lines; extract logic to custom hooks  |

---

## 16.10 UI Requirements

- Search bar must be prominently displayed at the top of the page.
- Current weather section must display as a primary card with large typography for temperature.
- Forecast section must display as a horizontal scrollable row on mobile, a grid on desktop.
- Weather icons must be rendered from the OpenWeatherMap icon URL: `https://openweathermap.org/img/wn/{icon}@2x.png`
- Loading state must use an animated spinner or a skeleton loader (not a static placeholder).
- Error state must use a visually distinct error card with an icon and actionable message.
- Dark mode is optional (P2) but if implemented, must follow the CSS variable system.

---

## 16.11 Component Breakdown

```
src/
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.jsx          # Text input + search button
│   │   └── SearchBar.module.css
│   ├── WeatherCard/
│   │   ├── WeatherCard.jsx        # Current weather display
│   │   └── WeatherCard.module.css
│   ├── ForecastCard/
│   │   ├── ForecastCard.jsx       # Single forecast day card
│   │   └── ForecastCard.module.css
│   ├── ForecastGrid/
│   │   ├── ForecastGrid.jsx       # Container for 5 ForecastCards
│   │   └── ForecastGrid.module.css
│   ├── RecentSearches/
│   │   ├── RecentSearches.jsx     # Recent city chips
│   │   └── RecentSearches.module.css
│   ├── LoadingSpinner/
│   │   ├── LoadingSpinner.jsx     # Animated loading indicator
│   │   └── LoadingSpinner.module.css
│   ├── ErrorMessage/
│   │   ├── ErrorMessage.jsx       # Error display component
│   │   └── ErrorMessage.module.css
│   └── UnitToggle/
│       ├── UnitToggle.jsx         # °C / °F toggle button
│       └── UnitToggle.module.css
├── hooks/
│   ├── useWeatherData.js          # Fetches current weather via Axios
│   ├── useForecastData.js         # Fetches 5-day forecast via Axios
│   ├── useRecentSearches.js       # Manages LocalStorage recent history
│   └── useTemperatureUnit.js      # Manages °C/°F preference
├── utils/
│   ├── formatTemperature.js       # Celsius ↔ Fahrenheit conversion
│   ├── formatDate.js              # Date formatting for forecast cards
│   └── getWeatherIconUrl.js       # Builds icon URL from icon code
├── constants/
│   └── weather.js                 # API endpoints, max history count
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 16.12 Routing Structure

React Weather Hub is a single-page application with no client-side routing. All content is rendered conditionally based on state within `App.jsx`.

| View State        | Render Condition                       |
|-------------------|----------------------------------------|
| Empty/Initial     | No search has been submitted           |
| Loading           | API request in progress                |
| Error             | API returned error or network failed   |
| Weather Display   | API returned successful response       |

---

## 16.13 State Management

All state is managed locally using React Hooks. No global state library is required.

| State Variable       | Type      | Managed In             | Description                             |
|----------------------|-----------|------------------------|-----------------------------------------|
| `query`              | string    | `App.jsx`              | Current search input value              |
| `submittedQuery`     | string    | `App.jsx`              | Last submitted search term              |
| `weatherData`        | object    | `useWeatherData`       | Current weather API response            |
| `forecastData`       | array     | `useForecastData`      | 5-day forecast API response             |
| `isLoading`          | boolean   | `useWeatherData`       | Whether a fetch is in progress          |
| `error`              | string    | `useWeatherData`       | Error message string or null            |
| `temperatureUnit`    | string    | `useTemperatureUnit`   | `'metric'` or `'imperial'`              |
| `recentSearches`     | string[]  | `useRecentSearches`    | Array of recent city names              |

---

## 16.14 API Integration

**Base URL:** `https://api.openweathermap.org/data/2.5`

**Endpoints:**

| Endpoint         | Method | Description                        | Params                                         |
|------------------|--------|------------------------------------|------------------------------------------------|
| `/weather`       | GET    | Current weather for a city         | `q={city}`, `units=metric`, `appid={API_KEY}` |
| `/forecast`      | GET    | 5-day / 3-hour forecast            | `q={city}`, `units=metric`, `appid={API_KEY}` |

**Error Status Codes:**

| Status Code | Meaning                        | User-Facing Message                                     |
|-------------|--------------------------------|---------------------------------------------------------|
| 401         | Invalid API key                | "Authentication error. Please contact support."        |
| 404         | City not found                 | "City not found. Please check the spelling."           |
| 429         | Rate limit exceeded            | "Too many requests. Please wait a moment and try again."|
| 500+        | Server error                   | "Weather service is temporarily unavailable."          |

**Axios Configuration:**
```javascript
import axios from 'axios';

const weatherClient = axios.create({
  baseURL: import.meta.env.VITE_OPENWEATHER_BASE_URL,
  timeout: 10000,
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    units: 'metric',
  },
});

export default weatherClient;
```

---

## 16.15 Data Flow

```
User types city name in SearchBar
  → SearchBar calls onSearch(query) callback
    → App.jsx updates submittedQuery state
      → useWeatherData hook detects change via useEffect
        → Sets isLoading = true, clears previous error
          → Axios GET /weather?q={city}&units={unit}
            → On success: setWeatherData(response.data), setIsLoading(false)
            → On error: setError(parseError(err)), setIsLoading(false)
          → Axios GET /forecast?q={city}&units={unit}
            → On success: setForecastData(response.data.list)
      → useRecentSearches hook adds city to history
        → Writes updated array to LocalStorage
App.jsx renders:
  → <LoadingSpinner /> if isLoading
  → <ErrorMessage /> if error && !isLoading
  → <WeatherCard /> + <ForecastGrid /> if weatherData && !isLoading
  → <RecentSearches /> always (if history is non-empty)
```

---

## 16.16 Validation Rules

| Input Field    | Rule                                     | Error Message                                  |
|----------------|------------------------------------------|------------------------------------------------|
| City Search    | Must not be empty                        | "Please enter a city name."                    |
| City Search    | Must be at least 2 characters            | "City name must be at least 2 characters."     |
| City Search    | Must not contain special characters (except spaces and hyphens) | "Please enter a valid city name." |

---

## 16.17 Error Handling

- All Axios errors are caught in the custom hook and converted to user-friendly strings.
- Network errors (no response from server) show a specific connectivity message.
- API 404 shows a "city not found" message with a suggestion to check spelling.
- API 401 shows a configuration error message.
- API 429 shows a rate limit message.
- All error states clear when a new search is submitted.
- Error messages are rendered in a dedicated `<ErrorMessage>` component with `role="alert"` for screen reader announcement.

---

## 16.18 Performance Requirements

- Weather icon images must use explicit `width` and `height` attributes to prevent CLS.
- Debounce search input by 300ms to prevent excessive re-renders.
- Use `useMemo` to compute formatted forecast data from raw API response.
- `useCallback` on `handleSearch` to prevent unnecessary re-renders of `SearchBar`.

---

## 16.19 Accessibility Requirements

- Search input must have an associated `<label>`.
- Unit toggle must have `aria-label` and `aria-pressed` attributes.
- Weather icons must have `alt` text describing the weather condition.
- Error messages must use `role="alert"`.
- Loading state must use `aria-busy="true"` on the main content area.

---

## 16.20 Testing Checklist

- [ ] Searching a valid city returns correct weather data.
- [ ] Searching an invalid city shows the city not found error.
- [ ] Submitting an empty search shows the validation error.
- [ ] Loading spinner shows during API request.
- [ ] Temperature unit toggle correctly converts values.
- [ ] Unit preference persists across page refresh.
- [ ] Recent searches appear after multiple searches.
- [ ] Clicking a recent search loads that city's weather.
- [ ] Recent searches persist across page refresh.
- [ ] App is functional at 375px, 768px, and 1440px.
- [ ] All interactive elements are keyboard accessible.
- [ ] Lighthouse Performance ≥ 85, Accessibility ≥ 90.

---

## 16.21 Acceptance Criteria

| ID    | Criterion                                                                     | Pass Condition                              |
|-------|-------------------------------------------------------------------------------|---------------------------------------------|
| AC-01 | City search returns weather data                                              | Data displays within 3 seconds              |
| AC-02 | Invalid city shows error                                                     | Error message visible, no broken state      |
| AC-03 | 5-day forecast displays                                                      | 5 distinct days with data visible           |
| AC-04 | Unit toggle works                                                            | Values update immediately without re-fetch  |
| AC-05 | Recent searches persist                                                      | History survives hard page refresh          |
| AC-06 | Responsive layout                                                            | No horizontal scroll at 375px               |
| AC-07 | Accessibility                                                                | Lighthouse Accessibility ≥ 90              |
| AC-08 | No API key in bundle                                                         | `npm run build` output contains no API key string |

---

## 16.22 Future Enhancements

- Geolocation-based weather for the user's current location.
- Hour-by-hour forecast view.
- Weather alerts and notifications.
- Multiple saved favorite cities.
- Air quality index (AQI) display.
- UV index display.
- Weather background animations matching current conditions.

---

## 16.23 Deployment Checklist

- [ ] Application builds successfully with `npm run build`.
- [ ] `VITE_OPENWEATHER_API_KEY` configured in Vercel/Netlify environment variables.
- [ ] Live URL works and shows weather data.
- [ ] URL added to repository About section.
- [ ] URL added to README.
- [ ] `.env` file not present in repository.

---

## 16.24 README Requirements

- Project title: "React Weather Hub"
- One-line description
- Live demo link
- Screenshots: search state, weather display (desktop), weather display (mobile)
- Features bullet list
- Tech stack table
- Prerequisites: Node.js 18+, OpenWeatherMap API key
- Step-by-step setup (clone, npm install, .env setup, npm run dev)
- `.env.example` contents shown
- Folder structure diagram

---

## 16.25 Screenshot Requirements

| Screenshot     | Content                                         | Viewport |
|----------------|-------------------------------------------------|----------|
| SS-01          | Initial/empty state with search bar             | 1440px   |
| SS-02          | Weather data displayed for a city (e.g. Mumbai) | 1440px   |
| SS-03          | 5-day forecast section visible                  | 1440px   |
| SS-04          | Mobile view of weather data                     | 375px    |
| SS-05          | Error state (invalid city)                      | 1440px   |

---

## 16.26 Out of Scope

- User authentication or accounts.
- Backend weather data storage.
- Push notifications.
- Server-side rendering (SSR).
- PWA / offline functionality.
- Weather maps or radar views.
- Multi-language support.

---

---

# 17. Project 2 — React 3D Product Viewer

---

## 17.1 Overview

React 3D Product Viewer is an interactive, browser-based 3D product visualization application built with React, React Three Fiber, Three.js, and the Drei helper library. It enables users to view, rotate, zoom, and pan 3D product models in a realistic lighting environment, simulating the experience of physically inspecting a product. The application includes a product selector that allows users to switch between multiple 3D models, demonstrating advanced React.js integration with WebGL-based rendering via Three.js.

---

## 17.2 Problem Statement

E-commerce and product showcase experiences are increasingly expected to provide 3D visualization — flat product photos are no longer sufficient for users who want to understand a product's form factor before purchasing. Building a 3D viewer from scratch using raw WebGL is prohibitively complex. React Three Fiber (R3F) solves this by providing a declarative React API over Three.js, enabling React developers to build immersive 3D experiences within a familiar component model. This project demonstrates that capability in a clean, performant, portfolio-quality implementation.

---

## 17.3 Goals

| Goal | Description                                                                               |
|------|-------------------------------------------------------------------------------------------|
| G1   | Render at least three distinct 3D models with smooth, real-time interaction              |
| G2   | Provide intuitive camera controls (rotate, zoom, pan) with mouse and touch support       |
| G3   | Apply realistic environment lighting to make models appear natural and visually appealing |
| G4   | Create a product selector UI that cleanly transitions between models                     |
| G5   | Demonstrate integration of React Three Fiber and Drei in a production-quality React app   |
| G6   | Maintain 60fps rendering performance on standard hardware                                 |

---

## 17.4 Objectives

- Implement a Canvas component using `@react-three/fiber` as the 3D rendering context.
- Load at least three GLTF/GLB 3D models using Drei's `useGLTF` hook.
- Implement full OrbitControls (rotate, zoom, pan) using Drei's `<OrbitControls>` component.
- Apply HDR environment lighting using Drei's `<Environment>` component.
- Build a product selector UI that switches between loaded models.
- Implement a loading state while 3D models are being downloaded.
- Support responsive canvas that adapts to viewport changes.
- Maintain ≥ 60fps rendering on modern hardware.

---

## 17.5 Target Users

- E-commerce product managers demonstrating 3D product displays.
- UX designers evaluating interactive product presentation approaches.
- Web developers reviewing Three.js and React Three Fiber integration patterns.
- Internship portfolio reviewers assessing advanced React and 3D skills.

---

## 17.6 User Personas

**Persona 1 — The Shopper**
- Name: Rahul, 31, Online Shopper
- Use Case: Wants to inspect a product from all angles before deciding to purchase.
- Device: Desktop (Windows, Chrome)
- Needs: Smooth rotation, ability to zoom into details.
- Frustration: Flat product images that don't show all sides.

**Persona 2 — The Developer Evaluator**
- Name: Shalini, 36, Frontend Tech Lead
- Use Case: Reviewing the intern's portfolio, specifically interested in WebGL/3D skills.
- Device: MacBook Pro, Safari/Chrome
- Needs: Clean code structure, good performance, professional UI.
- Frustration: 3D demos that are janky or crash the browser tab.

---

## 17.7 User Stories

| ID    | As a…     | I want to…                                               | So that…                                                    |
|-------|-----------|----------------------------------------------------------|-------------------------------------------------------------|
| US-01 | User      | See a 3D model rendered in the browser on page load      | I can immediately interact with the product viewer           |
| US-02 | User      | Rotate the 3D model by clicking and dragging             | I can see the product from all angles                        |
| US-03 | User      | Zoom in and out of the model using scroll wheel or pinch | I can inspect fine product details                           |
| US-04 | User      | Pan the model using right-click drag                     | I can reposition the model within the viewport               |
| US-05 | User      | Select from multiple product models in a selector panel  | I can switch between different products without page reload  |
| US-06 | User      | See the model illuminated realistically                  | I can appreciate the product's surface, texture, and form    |
| US-07 | User      | See a loading indicator while a model is being loaded    | I know the app is loading and not frozen                     |
| US-08 | User      | Use the viewer on a touchscreen device                   | I can rotate and zoom using touch gestures                   |

---

## 17.8 Functional Requirements

### P0 — Must Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-01 | The application must render a 3D scene using `@react-three/fiber` Canvas                             |
| FR-02 | At least three GLTF/GLB models must be available for viewing                                         |
| FR-03 | OrbitControls must enable rotation, zoom, and pan of the 3D model                                   |
| FR-04 | Environment lighting must be applied using Drei's `<Environment>` preset                             |
| FR-05 | A loading screen or spinner must display while models are being loaded                               |
| FR-06 | The 3D canvas must be responsive and fill the designated viewport area                               |

### P1 — Should Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-07 | A product selector panel must allow users to switch between the three models                         |
| FR-08 | The selected product's name and description must be displayed alongside the 3D viewer                 |
| FR-09 | OrbitControls must enable auto-rotation when the user is not interacting                             |
| FR-10 | A "Reset Camera" button must return the camera to its default position and rotation                  |

### P2 — Nice to Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-11 | Product color variants may be selectable, updating the model's material color                        |
| FR-12 | Wireframe mode toggle may be available for developer/technical audience demonstration                |
| FR-13 | Camera position may be animatable with smooth tweening when switching products                       |

---

## 17.9 Non-Functional Requirements

| ID     | Category       | Requirement                                                          |
|--------|----------------|----------------------------------------------------------------------|
| NFR-01 | Performance    | 3D scene must render at ≥ 60fps on mid-range hardware               |
| NFR-02 | Performance    | Model files must be ≤ 5MB each (use Draco-compressed GLBs)          |
| NFR-03 | Reliability    | Model loading must degrade gracefully if a model fails to load      |
| NFR-04 | Compatibility  | Must function in Chrome 120+, Firefox 120+, Edge 120+               |
| NFR-05 | Accessibility  | Viewer must have a text alternative describing the 3D content       |
| NFR-06 | UX             | OrbitControls must feel smooth and not jittery                      |

---

## 17.10 UI Requirements

- The 3D canvas must occupy the primary content area (≥ 60% of viewport height on desktop).
- Product selector must be displayed as a horizontal strip on desktop, a bottom drawer on mobile.
- Each product in the selector must show a thumbnail image and product name.
- The currently selected product must be visually indicated (border, highlight).
- A minimal overlay in the canvas corner must show camera control hints (drag to rotate, scroll to zoom).
- Loading state must use a dark overlay with a spinner centered on the canvas.

---

## 17.11 Component Breakdown

```
src/
├── components/
│   ├── Viewer/
│   │   ├── Viewer.jsx              # @react-three/fiber Canvas wrapper
│   │   └── Viewer.module.css
│   ├── ProductModel/
│   │   ├── ProductModel.jsx        # Loads and renders GLTF model
│   │   └── ProductModel.module.css
│   ├── SceneLighting/
│   │   └── SceneLighting.jsx       # Drei Environment + ambient/directional lights
│   ├── CameraControls/
│   │   └── CameraControls.jsx      # OrbitControls wrapper
│   ├── ProductSelector/
│   │   ├── ProductSelector.jsx     # Product list/selector panel
│   │   └── ProductSelector.module.css
│   ├── ProductSelectorCard/
│   │   ├── ProductSelectorCard.jsx # Single product card in selector
│   │   └── ProductSelectorCard.module.css
│   ├── ProductInfo/
│   │   ├── ProductInfo.jsx         # Name, description for selected product
│   │   └── ProductInfo.module.css
│   ├── LoadingOverlay/
│   │   ├── LoadingOverlay.jsx      # Dark loading overlay on canvas
│   │   └── LoadingOverlay.module.css
│   └── ControlsHint/
│       ├── ControlsHint.jsx        # Mouse/touch control instructions
│       └── ControlsHint.module.css
├── hooks/
│   └── useProductSelection.js      # Manages selected product state
├── data/
│   └── products.js                 # Product catalog: name, description, model path, thumbnail
├── models/                         # GLTF/GLB model files
│   ├── product-01.glb
│   ├── product-02.glb
│   └── product-03.glb
├── utils/
│   └── modelPreloader.js           # Preloads GLTF models using useGLTF.preload
├── constants/
│   └── viewer.js                   # Default camera position, FOV, OrbitControls limits
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 17.12 Routing Structure

React 3D Product Viewer is a single-page application with no client-side routing. All view states (loading, product display, product switching) are managed through component-level state.

---

## 17.13 State Management

| State Variable         | Type      | Managed In              | Description                                     |
|------------------------|-----------|-------------------------|-------------------------------------------------|
| `selectedProductId`    | string    | `useProductSelection`   | ID of the currently active product              |
| `selectedProduct`      | object    | `useProductSelection`   | Full product object (name, desc, modelPath)     |
| `isModelLoading`       | boolean   | `ProductModel.jsx`      | Whether the GLTF model is currently loading     |
| `cameraResetTrigger`   | number    | `App.jsx`               | Incremented to signal camera reset to OrbitControls |

---

## 17.14 Data Flow

```
App.jsx initializes with selectedProductId = products[0].id
  → useProductSelection resolves selectedProduct object
    → Viewer renders Canvas
      → SceneLighting renders Environment + lights
      → CameraControls renders OrbitControls (bound to Camera)
      → ProductModel receives selectedProduct.modelPath
          → Suspense boundary shows LoadingOverlay during model load
          → useGLTF(modelPath) loads and returns scene
          → Model scene rendered in Canvas
    → ProductSelector receives products list + selectedProductId
        → User clicks ProductSelectorCard
          → onSelect(productId) callback fires
            → useProductSelection updates selectedProductId
              → React re-renders ProductModel with new modelPath
    → ProductInfo receives selectedProduct (name, description)
```

---

## 17.15 Validation Rules

| Scenario                     | Validation                            | Behavior                                       |
|------------------------------|---------------------------------------|------------------------------------------------|
| Product model file missing   | Model file 404                        | Show error overlay: "Model failed to load"     |
| WebGL not supported          | `WebGLRenderer` fails to init         | Show fallback: "3D not supported in this browser" |
| No products in catalog       | `products.length === 0`               | Show empty state: "No products available"       |

---

## 17.16 Error Handling

- Wrap the `<Canvas>` and `<Suspense>` in an `<ErrorBoundary>` to catch WebGL/model errors.
- If a model fails to load, display an error overlay with a "Retry" button.
- If WebGL is not available (older hardware, software rendering mode), display a graceful fallback UI.
- Use Drei's `<Suspense>` fallback to show loading state during model streaming.

---

## 17.17 Performance Requirements

- GLTF models must be Draco-compressed (reduces file size by ~60-70%).
- Use `useGLTF.preload()` to preload models before they are selected.
- Use Drei's `<PerformanceMonitor>` to detect FPS drops and optionally degrade rendering quality.
- Canvas pixel ratio must be capped at `Math.min(window.devicePixelRatio, 2)` to prevent GPU overload on Retina displays.

```javascript
// Performance-optimized Canvas setup
<Canvas
  dpr={[1, 2]}
  camera={{ position: [0, 0, 5], fov: 45 }}
  gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
>
```

---

## 17.18 Accessibility Requirements

- The `<Canvas>` must have an `aria-label` describing the 3D viewer: "Interactive 3D product viewer".
- A text description of the currently displayed product must be visible outside the canvas.
- Users who cannot operate mouse/touch controls must have access to product information in text form.
- Product selector buttons must be keyboard navigable and have descriptive `aria-label` attributes.

---

## 17.19 Testing Checklist

- [ ] 3D model renders on page load without console errors.
- [ ] Rotate, zoom, and pan work with mouse on desktop.
- [ ] Rotate and pinch-zoom work on mobile touchscreen.
- [ ] Product selector correctly switches models.
- [ ] Loading overlay appears while model is loading.
- [ ] Auto-rotation starts when user is not interacting.
- [ ] Camera reset button returns to default view.
- [ ] No frame rate drops below 45fps during normal interaction.
- [ ] Canvas is responsive and adjusts on window resize.
- [ ] Error boundary activates and shows fallback on model load failure.

---

## 17.20 Acceptance Criteria

| ID    | Criterion                                         | Pass Condition                                     |
|-------|---------------------------------------------------|----------------------------------------------------|
| AC-01 | 3D model renders on load                         | Model visible within 3 seconds on broadband        |
| AC-02 | Camera controls functional                       | Rotate, zoom, pan all work with mouse and touch    |
| AC-03 | Product switching works                          | Switching product replaces model without page reload|
| AC-04 | Environment lighting applied                     | Model shows realistic highlights and shadows       |
| AC-05 | Loading state visible                            | Loading overlay shown before model appears         |
| AC-06 | Performance acceptable                           | ≥ 60fps during rotation on mid-range hardware      |
| AC-07 | Responsive canvas                                | Canvas fills container correctly at 375px + 1440px |

---

## 17.21 Future Enhancements

- Augmented reality (AR) view via WebXR API.
- Real-time material editor (change colors, textures).
- Product annotation hotspots (click to reveal feature callouts).
- Social share — capture canvas as image and share.
- Support for animated GLTF models with animation controls.
- Multiple camera presets (front, side, top-down views).

---

## 17.22 Deployment Checklist

- [ ] `npm run build` succeeds without errors.
- [ ] GLB model files present in `public/models/`.
- [ ] Application deployed to Vercel/Netlify.
- [ ] Live URL added to README and repository About.
- [ ] No large uncompressed model files (each ≤ 5MB).

---

## 17.23 Out of Scope

- Backend 3D model hosting or CDN.
- User-uploaded 3D models.
- Physics simulation.
- Multiplayer or collaborative viewing.
- Native app wrappers.

---

---

# 18. Project 3 — Fitness Tracker (React Hooks)

---

## 18.1 Overview

The Fitness Tracker is a comprehensive React.js application that helps users log workouts, calculate BMI, track fitness goals, monitor daily calorie intake and burn, and visualize their progress over time through a statistics dashboard. It is built exclusively using React functional components and Hooks, with no external state management library. All data is persisted in the browser's LocalStorage, enabling a fully functional, offline-capable personal fitness companion. The application includes a dark mode toggle and responsive layout.

---

## 18.2 Problem Statement

Many fitness enthusiasts want a simple, private tool to log their workouts and track progress without having to sign up for a subscription service or share their health data with third parties. Most free fitness apps are either too complex, require account creation, or are ad-supported. The Fitness Tracker provides a clean, fast, browser-based alternative that stores data privately on the user's device, requires no signup, and presents progress data visually through Chart.js-powered charts.

---

## 18.3 Goals

| Goal | Description                                                                              |
|------|------------------------------------------------------------------------------------------|
| G1   | Enable users to log workouts with type, duration, and calories burned                    |
| G2   | Provide a BMI calculator with health interpretation                                      |
| G3   | Allow users to set and track personal fitness goals                                      |
| G4   | Display today's activity summary at a glance                                             |
| G5   | Visualize progress over time using Chart.js charts                                        |
| G6   | Persist all data locally without requiring backend or authentication                      |
| G7   | Demonstrate expert-level usage of React Hooks: useState, useEffect, useReducer, useMemo, useCallback, useContext |

---

## 18.4 Objectives

- Build a Workout Logger that accepts exercise type, sets/reps or duration, and estimated calories.
- Build a BMI Calculator with real-time calculation and BMI category classification.
- Build a Goal Tracker allowing users to set weekly workout frequency and daily calorie targets.
- Build a Daily Progress view showing today's workout count, total calories burned, and goal completion percentage.
- Build a Statistics Dashboard with at least two Chart.js charts (workout frequency, calorie trend).
- Implement dark mode using CSS custom properties and a `ThemeContext` or `useTheme` hook.
- Persist all data to LocalStorage with a custom `useLocalStorage` hook.
- Implement data export to JSON (P2).

---

## 18.5 Target Users

- Fitness enthusiasts who prefer simple, private workout logging.
- Athletes who want to track goal progress without cloud sync.
- Developers reviewing the portfolio for advanced React Hooks proficiency.
- Health-conscious individuals wanting a quick BMI reference tool.

---

## 18.6 User Personas

**Persona 1 — The Self-Tracker**
- Name: Vikram, 26, Fitness Enthusiast
- Use Case: Logs daily gym sessions and tracks calorie burn over the week.
- Device: Mobile (Android, Chrome)
- Needs: Quick log entry, clear daily summary, streak visualization.
- Frustration: Apps that require creating accounts or internet connection.

**Persona 2 — The Health Monitor**
- Name: Ananya, 45, Working Professional
- Use Case: Tracks BMI and weekly exercise goals on doctor's recommendation.
- Device: Desktop (Windows, Chrome)
- Needs: BMI calculator, goal tracking, simple charts.
- Frustration: Complex apps with too many features to navigate.

---

## 18.7 User Stories

| ID    | As a…  | I want to…                                                          | So that…                                                            |
|-------|--------|----------------------------------------------------------------------|---------------------------------------------------------------------|
| US-01 | User   | Log a workout with type, duration, and calories burned               | I have a record of my exercise activity                              |
| US-02 | User   | View all my logged workouts in a list                                | I can see my workout history                                         |
| US-03 | User   | Delete a workout entry                                               | I can remove entries logged by mistake                               |
| US-04 | User   | Calculate my BMI by entering height and weight                       | I know my current BMI and health category                            |
| US-05 | User   | Set a weekly workout goal (e.g., 5 workouts per week)                | I have a target to work towards                                      |
| US-06 | User   | Set a daily calorie burn goal                                        | I know when I've met my daily target                                 |
| US-07 | User   | See today's workout summary on the daily progress screen             | I know how much I've done today without scrolling                    |
| US-08 | User   | View a chart showing my workout frequency over the past week         | I can see if I've been consistently exercising                       |
| US-09 | User   | View a chart showing my calorie burn trend over time                 | I can identify patterns in my activity level                         |
| US-10 | User   | Toggle between light mode and dark mode                              | I can use the app comfortably in different lighting conditions       |
| US-11 | User   | Have my workout and goal data persist when I close and reopen the app| I don't lose my history between sessions                             |
| US-12 | User   | Use the app on my phone                                              | I can log workouts immediately after finishing them                  |

---

## 18.8 Functional Requirements

### P0 — Must Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-01 | Users must be able to add a workout entry with: exercise name, type (cardio/strength/flexibility), duration (minutes), and calories burned |
| FR-02 | All logged workouts must be displayed in a chronological list                                        |
| FR-03 | Users must be able to delete any workout entry                                                       |
| FR-04 | BMI calculator must accept height (cm or ft/in) and weight (kg or lbs) and output BMI value and category |
| FR-05 | All workout and goal data must persist in LocalStorage                                               |
| FR-06 | Daily Progress view must show: workouts completed today, calories burned today, active goal progress  |

### P1 — Should Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-07 | Goal Tracker must allow setting: weekly workout frequency goal and daily calorie burn goal            |
| FR-08 | Statistics Dashboard must include a bar chart of workout frequency by day (last 7 days)             |
| FR-09 | Statistics Dashboard must include a line chart of calories burned per day (last 7 days)             |
| FR-10 | Dark mode toggle must switch the entire UI between light and dark themes                             |
| FR-11 | Dark mode preference must persist in LocalStorage                                                    |
| FR-12 | Workout types must be filterable (show only cardio, only strength, etc.)                            |

### P2 — Nice to Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-13 | Users may be able to export their workout history as a JSON file                                     |
| FR-14 | A streak counter may show the number of consecutive days with at least one workout                   |
| FR-15 | Workout entry timestamps may be editable                                                             |
| FR-16 | A notes field may be available on each workout entry                                                 |

---

## 18.9 Non-Functional Requirements

| ID     | Category         | Requirement                                                              |
|--------|------------------|--------------------------------------------------------------------------|
| NFR-01 | Performance      | App must load within 1.5 seconds on standard hardware                    |
| NFR-02 | Persistence      | LocalStorage reads/writes must be < 50ms                                |
| NFR-03 | Data Integrity   | Data must survive browser refresh, back/forward navigation               |
| NFR-04 | Capacity         | LocalStorage must handle ≥ 365 days of daily workout entries            |
| NFR-05 | Compatibility    | Must work in Chrome 120+, Firefox 120+                                  |
| NFR-06 | Accessibility    | Lighthouse Accessibility ≥ 90                                           |

---

## 18.10 UI Requirements

- Navigation: Tab-based navigation between Workout Logger, BMI Calculator, Goals, Daily Progress, Statistics.
- The active tab must be clearly indicated.
- Charts must use Chart.js with appropriate colors for light and dark mode.
- BMI result must be color-coded by category (underweight: blue, normal: green, overweight: yellow, obese: red).
- Goal progress must be displayed as a percentage progress bar.
- Dark mode must invert the primary surface color (white ↔ dark gray) and update all text and chart colors accordingly.

---

## 18.11 Component Breakdown

```
src/
├── components/
│   ├── Navigation/
│   │   ├── Navigation.jsx          # Tab navigation bar
│   │   └── Navigation.module.css
│   ├── WorkoutLogger/
│   │   ├── WorkoutLogger.jsx       # Workout form + workout list
│   │   └── WorkoutLogger.module.css
│   ├── WorkoutForm/
│   │   ├── WorkoutForm.jsx         # Add workout entry form
│   │   └── WorkoutForm.module.css
│   ├── WorkoutList/
│   │   ├── WorkoutList.jsx         # List of logged workouts
│   │   └── WorkoutList.module.css
│   ├── WorkoutItem/
│   │   ├── WorkoutItem.jsx         # Single workout entry row
│   │   └── WorkoutItem.module.css
│   ├── BmiCalculator/
│   │   ├── BmiCalculator.jsx       # BMI form and result display
│   │   └── BmiCalculator.module.css
│   ├── GoalTracker/
│   │   ├── GoalTracker.jsx         # Goal setting + progress display
│   │   └── GoalTracker.module.css
│   ├── DailyProgress/
│   │   ├── DailyProgress.jsx       # Today's activity summary
│   │   └── DailyProgress.module.css
│   ├── StatsDashboard/
│   │   ├── StatsDashboard.jsx      # Container for charts
│   │   └── StatsDashboard.module.css
│   ├── WorkoutFrequencyChart/
│   │   ├── WorkoutFrequencyChart.jsx # Bar chart via Chart.js
│   │   └── WorkoutFrequencyChart.module.css
│   ├── CalorieTrendChart/
│   │   ├── CalorieTrendChart.jsx    # Line chart via Chart.js
│   │   └── CalorieTrendChart.module.css
│   ├── ProgressBar/
│   │   ├── ProgressBar.jsx          # Reusable animated progress bar
│   │   └── ProgressBar.module.css
│   ├── ThemeToggle/
│   │   ├── ThemeToggle.jsx          # Dark/light mode toggle button
│   │   └── ThemeToggle.module.css
│   └── EmptyState/
│       ├── EmptyState.jsx           # Empty list / no data placeholder
│       └── EmptyState.module.css
├── context/
│   └── ThemeContext.jsx             # Dark mode context provider
├── hooks/
│   ├── useLocalStorage.js           # Generic LocalStorage sync hook
│   ├── useWorkouts.js               # Workout CRUD operations
│   ├── useGoals.js                  # Goal state management
│   ├── useBmi.js                    # BMI calculation logic
│   ├── useDailyProgress.js          # Derives today's stats from workout data
│   ├── useTheme.js                  # Reads ThemeContext
│   └── useWorkoutStats.js           # Derives chart data from workout history
├── utils/
│   ├── bmiCalculations.js           # BMI formula and category logic
│   ├── dateHelpers.js               # Format dates, get today's date string
│   ├── calorieHelpers.js            # Aggregate calories by date
│   └── workoutFilters.js            # Filter workouts by type, date
├── constants/
│   ├── workoutTypes.js              # CARDIO, STRENGTH, FLEXIBILITY etc.
│   ├── bmiCategories.js             # BMI range definitions
│   └── storageKeys.js               # LocalStorage key strings
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 18.12 Routing Structure

The Fitness Tracker uses tab-based navigation managed by component state (not React Router). Each tab renders a distinct view component.

| Tab Label        | Component         | Key                  |
|------------------|-------------------|----------------------|
| Workout Log      | `WorkoutLogger`   | `workout-logger`     |
| BMI Calculator   | `BmiCalculator`   | `bmi-calculator`     |
| Goals            | `GoalTracker`     | `goal-tracker`       |
| Daily Progress   | `DailyProgress`   | `daily-progress`     |
| Statistics       | `StatsDashboard`  | `stats-dashboard`    |

---

## 18.13 State Management

| State Variable    | Type      | Managed In           | Persistence       | Description                              |
|-------------------|-----------|----------------------|-------------------|------------------------------------------|
| `workouts`        | array     | `useWorkouts`        | LocalStorage      | All logged workout entries               |
| `goals`           | object    | `useGoals`           | LocalStorage      | Weekly and daily goal targets            |
| `activeTab`       | string    | `App.jsx`            | None              | Currently active navigation tab          |
| `isDarkMode`      | boolean   | `ThemeContext`       | LocalStorage      | Dark mode on/off state                   |
| `bmiInput`        | object    | `BmiCalculator.jsx`  | None (session)    | Height and weight input values           |
| `bmiResult`       | object    | `useBmi`             | None (computed)   | BMI value and category                   |
| `workoutFilter`   | string    | `WorkoutLogger.jsx`  | None              | Active workout type filter               |

---

## 18.14 Data Flow

```
User submits WorkoutForm
  → handleAddWorkout(workoutData) called
    → useWorkouts.addWorkout(workoutData)
      → Generates UUID, adds timestamp
      → Updates workouts state array
        → useLocalStorage writes to 'fittrack_workouts' key
WorkoutList re-renders with updated workouts
DailyProgress re-renders (useDailyProgress derives today's stats from workouts)
StatsDashboard charts re-render (useWorkoutStats derives chart data)
GoalTracker progress bar re-renders

Dark mode toggle:
User clicks ThemeToggle
  → useTheme.toggleTheme() called
    → ThemeContext updates isDarkMode
      → useLocalStorage writes to 'fittrack_theme' key
      → App.jsx adds/removes 'dark' class on document.body
        → CSS variables switch to dark palette
```

---

## 18.15 Validation Rules

| Field              | Rule                                        | Error Message                              |
|--------------------|---------------------------------------------|--------------------------------------------|
| Exercise Name      | Required, 2-50 characters                  | "Please enter an exercise name."           |
| Exercise Type      | Required, must be valid type               | "Please select an exercise type."          |
| Duration           | Required, positive integer, ≤ 600 minutes | "Please enter a valid duration."           |
| Calories Burned    | Required, positive integer, ≤ 5000        | "Please enter valid calories burned."      |
| BMI Height         | Required, positive number                  | "Please enter a valid height."             |
| BMI Weight         | Required, positive number                  | "Please enter a valid weight."             |
| Weekly Goal        | Positive integer, 1-7                       | "Weekly goal must be between 1 and 7."    |
| Daily Calorie Goal | Positive integer, 100-10000               | "Please enter a valid calorie goal."       |

---

## 18.16 Error Handling

- Form validation errors display inline below the relevant input field.
- LocalStorage quota errors (rare, but possible) show a global notification: "Storage limit reached. Please clear some data."
- Chart rendering errors (Chart.js) fall back to a text summary of the data.

---

## 18.17 Performance Requirements

- Use `useMemo` to derive chart data from raw workout array to avoid recalculating on every render.
- Use `useCallback` on workout CRUD handlers to prevent WorkoutList and WorkoutItem re-renders.
- Chart.js charts must be destroyed and recreated properly when component unmounts (`useEffect` cleanup).
- Workout list with > 50 entries must not cause visible lag on scroll.

---

## 18.18 Testing Checklist

- [ ] Adding a workout adds it to the list and persists after refresh.
- [ ] Deleting a workout removes it from the list and updates LocalStorage.
- [ ] BMI calculator returns correct value and category for known input.
- [ ] Goal progress bars reflect correct percentages.
- [ ] Daily progress shows only today's workouts.
- [ ] Charts render correctly with workout data.
- [ ] Dark mode toggles and persists.
- [ ] App works at 375px, 768px, and 1440px.
- [ ] All form validation rules trigger correctly.
- [ ] Lighthouse Accessibility ≥ 90.

---

## 18.19 Acceptance Criteria

| ID    | Criterion                                      | Pass Condition                                         |
|-------|------------------------------------------------|--------------------------------------------------------|
| AC-01 | Workout logging works                          | Entry appears in list immediately and survives refresh |
| AC-02 | BMI calculation correct                        | BMI for 70kg/175cm = 22.9 (Normal)                   |
| AC-03 | Goal progress visible                          | Progress bars show percentage of goal completion       |
| AC-04 | Charts display                                 | Both charts render with data and labels                |
| AC-05 | Dark mode works                                | All UI elements switch correctly; persists on refresh  |
| AC-06 | Data persists                                  | All workouts and goals survive hard page refresh       |
| AC-07 | Responsive layout                              | No horizontal scroll at 375px                          |

---

## 18.20 Future Enhancements

- Cloud sync via Firebase or Supabase.
- Step counter integration via browser APIs.
- Water intake tracking.
- Body measurements tracker (waist, chest, etc.).
- Progress photos with date stamps.
- Weekly email summary (requires backend).
- Integration with wearables API.

---

## 18.21 Deployment Checklist

- [ ] `npm run build` succeeds.
- [ ] No environment variables required (fully client-side).
- [ ] Deployed to Vercel or Netlify.
- [ ] Live URL in README and repository About.

---

## 18.22 Out of Scope

- Backend or cloud storage.
- User authentication.
- Social features (sharing, leaderboards).
- Calorie intake tracking (only output/burn tracked).
- Wearable device sync.
- Native app packaging.

---

---

# 19. Project 4 — Travel Planner App

---

## 19.1 Overview

The Travel Planner App is a multi-page React.js application that helps users plan, organize, and manage their trips from a single interface. Built with React Router for multi-page navigation, it allows users to create trips, manage destinations, set budgets and track expenses, create packing checklists, and write trip notes. All data is persisted in LocalStorage, enabling a fully client-side travel companion that requires no backend. The application is designed with a responsive, professional travel-themed UI.

---

## 19.2 Problem Statement

Planning a trip involves managing information across multiple categories: where to go, how much to spend, what to pack, and what to remember. Most users juggle this information across spreadsheets, notes apps, and browser bookmarks. A purpose-built travel planner consolidates all of this into one intuitive application. The Travel Planner App solves this by providing a multi-page React SPA with React Router, demonstrating route-based navigation, shared state across routes, and complex UI organization — all key skills for a professional React developer.

---

## 19.3 Goals

| Goal | Description                                                                                    |
|------|------------------------------------------------------------------------------------------------|
| G1   | Allow users to create and manage multiple trip profiles                                        |
| G2   | Provide a budget tracker with income and expense entries per trip                              |
| G3   | Provide a packing checklist with item management and completion tracking                       |
| G4   | Allow destination entries with notes per trip                                                  |
| G5   | Provide a trip notes section for free-form text journaling                                    |
| G6   | Demonstrate multi-page React routing with shared trip state                                    |
| G7   | Persist all trip data locally                                                                  |

---

## 19.4 Objectives

- Build a Trip List / Home page that shows all created trips with creation date and quick stats.
- Build a Trip Detail page with tabs for: Overview, Destinations, Budget, Packing List, and Notes.
- Build a Trip Creator form to add new trips with name, destination, start date, and end date.
- Build a Budget Tracker with income/expense entries, running total, and remaining budget display.
- Build a Packing Checklist with item add/remove and checkbox completion.
- Build a Destination Manager with destination name and notes per destination.
- Build a Notes section with free-form text editing per trip.
- Implement React Router v6 with nested routes for trip details.
- Persist all data to LocalStorage.

---

## 19.5 Target Users

- Individual travelers planning personal trips.
- Families organizing group travel logistics.
- Budget-conscious travelers who want a simple expense tracker.
- Developers reviewing the portfolio for React Router and state management skills.

---

## 19.6 User Personas

**Persona 1 — The Solo Traveler**
- Name: Kiran, 24, Graduate Student
- Use Case: Planning a solo backpacking trip across Europe, needs budget tracking and packing list.
- Device: Laptop (Ubuntu, Chrome)
- Needs: Multi-destination management, budget awareness, offline functionality.
- Frustration: Travel apps that require login or internet connection to function.

**Persona 2 — The Family Trip Organizer**
- Name: Deepa, 39, Project Manager
- Use Case: Organizing a family vacation — needs to track budget, packing for 4 people, and itinerary notes.
- Device: iPad (Safari), iPhone
- Needs: Multiple trips, packing list with quantities, notes per destination.
- Frustration: Apps with too much complexity or upsell prompts.

---

## 19.7 User Stories

| ID    | As a…  | I want to…                                                              | So that…                                                              |
|-------|--------|-------------------------------------------------------------------------|-----------------------------------------------------------------------|
| US-01 | User   | Create a new trip with a name, destination, and date range             | I can organize my travel plans under a single trip profile            |
| US-02 | User   | View a list of all my trips on the home screen                         | I can quickly access any trip I've created                            |
| US-03 | User   | Open a trip and navigate its different sections (tabs/routes)          | I can switch between budget, packing, destinations, and notes         |
| US-04 | User   | Add destinations to a trip with a name and notes                       | I can keep location-specific information organized                    |
| US-05 | User   | Add income and expense entries to a trip budget                        | I can track my total spend against my budget                          |
| US-06 | User   | See the remaining budget balance after all income and expenses         | I know if I'm over or under budget                                    |
| US-07 | User   | Add items to a packing checklist                                        | I have a list of everything I need to bring                           |
| US-08 | User   | Check off items on the packing list as I pack them                     | I know what's already packed and what still needs to go in            |
| US-09 | User   | Write and save freeform notes for a trip                               | I can jot down ideas, reminders, or travel diary entries              |
| US-10 | User   | Delete a trip and all its associated data                              | I can remove trips I no longer need                                   |
| US-11 | User   | Have all my trip data persist after closing and reopening the app      | I don't lose my trip information between sessions                     |
| US-12 | User   | Use the app on my phone while traveling                                | I can access my packing list and budget on the go                     |

---

## 19.8 Functional Requirements

### P0 — Must Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-01 | Users must be able to create a new trip with: trip name, primary destination, start date, end date    |
| FR-02 | Users must be able to view all created trips on the home page                                        |
| FR-03 | Users must be able to open a trip and view its detail pages via React Router routes                  |
| FR-04 | Users must be able to delete a trip (with confirmation)                                              |
| FR-05 | Budget Tracker must allow adding income and expense entries with label, amount, and category          |
| FR-06 | Budget Tracker must display total income, total expenses, and remaining balance                      |
| FR-07 | Packing Checklist must allow adding and removing items                                               |
| FR-08 | Packing Checklist items must be checkable/uncheckable                                               |
| FR-09 | All trip data must persist in LocalStorage                                                           |

### P1 — Should Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-10 | Destination Manager must allow adding destinations with name and free-form notes                     |
| FR-11 | Trip Notes must provide a textarea for freeform text, auto-saved to LocalStorage on change          |
| FR-12 | Trip overview page must show a summary: trip name, dates, destination count, budget remaining, packing progress |
| FR-13 | Packing list progress must show as "X of Y items packed" and a progress bar                         |
| FR-14 | Budget entries must be categorized (accommodation, transport, food, activities, other)               |

### P2 — Nice to Have

| ID    | Requirement                                                                                           |
|-------|-------------------------------------------------------------------------------------------------------|
| FR-15 | Trips may be sortable by creation date, trip start date, or name                                     |
| FR-16 | Packing list items may have a quantity field                                                          |
| FR-17 | Budget tracker may display a pie chart of expenses by category                                       |
| FR-18 | Trip may have a status: Planning, Upcoming, Active, Completed                                        |

---

## 19.9 Non-Functional Requirements

| ID     | Category        | Requirement                                                          |
|--------|-----------------|----------------------------------------------------------------------|
| NFR-01 | Performance     | App must load in ≤ 1.5 seconds                                      |
| NFR-02 | Persistence     | All CRUD operations must reflect in LocalStorage within 100ms        |
| NFR-03 | Navigation      | All React Router route transitions must be instantaneous             |
| NFR-04 | Reliability     | App must not crash on corrupt LocalStorage data; gracefully reset   |
| NFR-05 | Accessibility   | Lighthouse Accessibility ≥ 90                                       |
| NFR-06 | Compatibility   | Must function in Chrome 120+, Firefox 120+                          |

---

## 19.10 UI Requirements

- Home page must display trip cards in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop).
- Trip card must show: trip name, primary destination, date range, and a quick budget indicator.
- Trip detail page must use tab-based navigation (or nested routes) for each section.
- Budget tracker must use a clear income/expense ledger layout.
- Packing list must use large checkboxes for mobile touch usability.
- An empty state illustration/message must appear when no trips, no destinations, no items exist.
- Confirmation dialog must appear before deleting a trip.

---

## 19.11 Component Breakdown

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.jsx              # Global layout with header and nav
│   │   └── Layout.module.css
│   ├── Header/
│   │   ├── Header.jsx              # App header with title and nav link
│   │   └── Header.module.css
│   ├── TripCard/
│   │   ├── TripCard.jsx            # Summary card for trip list
│   │   └── TripCard.module.css
│   ├── TripForm/
│   │   ├── TripForm.jsx            # Create/edit trip form
│   │   └── TripForm.module.css
│   ├── TripOverview/
│   │   ├── TripOverview.jsx        # Trip summary stats
│   │   └── TripOverview.module.css
│   ├── DestinationManager/
│   │   ├── DestinationManager.jsx  # Add/list/delete destinations
│   │   └── DestinationManager.module.css
│   ├── BudgetTracker/
│   │   ├── BudgetTracker.jsx       # Income/expense ledger
│   │   └── BudgetTracker.module.css
│   ├── BudgetEntry/
│   │   ├── BudgetEntry.jsx         # Single ledger entry
│   │   └── BudgetEntry.module.css
│   ├── BudgetSummary/
│   │   ├── BudgetSummary.jsx       # Total income, expenses, balance
│   │   └── BudgetSummary.module.css
│   ├── PackingChecklist/
│   │   ├── PackingChecklist.jsx    # Packing list manager
│   │   └── PackingChecklist.module.css
│   ├── PackingItem/
│   │   ├── PackingItem.jsx         # Single checkable packing item
│   │   └── PackingItem.module.css
│   ├── TripNotes/
│   │   ├── TripNotes.jsx           # Freeform notes textarea
│   │   └── TripNotes.module.css
│   ├── ProgressBar/
│   │   ├── ProgressBar.jsx         # Reusable progress bar
│   │   └── ProgressBar.module.css
│   ├── ConfirmDialog/
│   │   ├── ConfirmDialog.jsx       # Confirmation modal for delete
│   │   └── ConfirmDialog.module.css
│   └── EmptyState/
│       ├── EmptyState.jsx          # No-data placeholder
│       └── EmptyState.module.css
├── pages/
│   ├── Home/
│   │   ├── Home.jsx                # Trip list / home page
│   │   └── Home.module.css
│   ├── NewTrip/
│   │   ├── NewTrip.jsx             # Create trip page
│   │   └── NewTrip.module.css
│   └── TripDetail/
│       ├── TripDetail.jsx          # Trip detail with nested routes
│       └── TripDetail.module.css
├── hooks/
│   ├── useLocalStorage.js          # Generic LocalStorage sync hook
│   ├── useTrips.js                 # Trip CRUD operations
│   ├── useBudget.js                # Budget CRUD for a specific trip
│   ├── usePackingList.js           # Packing list CRUD for a specific trip
│   ├── useDestinations.js          # Destination CRUD for a specific trip
│   └── useTripNotes.js             # Notes read/write for a specific trip
├── utils/
│   ├── generateId.js               # UUID generation
│   ├── formatCurrency.js           # Currency formatting
│   ├── formatDate.js               # Date formatting
│   └── budgetCalculations.js       # Total income, expenses, balance
├── constants/
│   ├── budgetCategories.js         # Expense category definitions
│   └── storageKeys.js              # LocalStorage key strings
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## 19.12 Routing Structure

```
/                         → Home (TripList)
/trips/new                → NewTrip (TripForm)
/trips/:tripId            → TripDetail (redirects to /trips/:tripId/overview)
/trips/:tripId/overview   → TripOverview
/trips/:tripId/destinations → DestinationManager
/trips/:tripId/budget     → BudgetTracker
/trips/:tripId/packing    → PackingChecklist
/trips/:tripId/notes      → TripNotes
*                         → NotFound (404 page)
```

**React Router v6 Configuration:**
```jsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="trips/new" element={<NewTrip />} />
    <Route path="trips/:tripId" element={<TripDetail />}>
      <Route index element={<Navigate to="overview" replace />} />
      <Route path="overview" element={<TripOverview />} />
      <Route path="destinations" element={<DestinationManager />} />
      <Route path="budget" element={<BudgetTracker />} />
      <Route path="packing" element={<PackingChecklist />} />
      <Route path="notes" element={<TripNotes />} />
    </Route>
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 19.13 State Management

| State Variable       | Type      | Managed In           | Persistence   | Description                               |
|----------------------|-----------|----------------------|---------------|-------------------------------------------|
| `trips`              | array     | `useTrips`           | LocalStorage  | All trip objects                          |
| `budgetEntries`      | array     | `useBudget`          | LocalStorage  | Budget entries keyed per trip             |
| `packingItems`       | array     | `usePackingList`     | LocalStorage  | Packing items keyed per trip              |
| `destinations`       | array     | `useDestinations`    | LocalStorage  | Destinations keyed per trip               |
| `notes`              | string    | `useTripNotes`       | LocalStorage  | Free-form notes string keyed per trip     |
| `confirmDialog`      | object    | `ConfirmDialog`      | None          | Open/close state and callback for delete  |

---

## 19.14 Data Flow

```
Home renders TripList (from useTrips)
User clicks "New Trip" → navigate('/trips/new')
  → NewTrip renders TripForm
    → User fills form → handleSubmit
      → useTrips.addTrip(tripData)
        → Generates UUID, timestamp
        → Updates trips array
          → LocalStorage writes to 'travel_planner_trips'
      → navigate(`/trips/${newTrip.id}/overview`)
        → TripDetail renders with tripId from useParams
          → TripOverview reads tripId, fetches trip from useTrips
          → Tab navigation links to nested routes

Budget flow:
  → BudgetTracker reads tripId from useParams
    → useBudget(tripId) reads 'travel_budget_{tripId}' from LocalStorage
      → User adds expense → useBudget.addEntry(entry)
        → Updates entries → LocalStorage write
          → BudgetSummary recalculates totals
```

---

## 19.15 Validation Rules

| Field            | Rule                                     | Error Message                               |
|------------------|------------------------------------------|---------------------------------------------|
| Trip Name        | Required, 2-100 characters              | "Please enter a trip name."                 |
| Primary Destination | Required                            | "Please enter a destination."               |
| Start Date       | Required, valid date                    | "Please enter a valid start date."          |
| End Date         | Required, must be ≥ start date          | "End date must be after start date."        |
| Budget Amount    | Required, positive number               | "Please enter a valid amount."              |
| Budget Label     | Required                                | "Please enter a description."               |
| Packing Item     | Required, 1-100 characters             | "Please enter an item name."                |
| Destination Name | Required, 2-100 characters             | "Please enter a destination name."          |

---

## 19.16 Error Handling

- If a `tripId` in the URL does not match any stored trip, redirect to `/` with a toast notification: "Trip not found."
- If LocalStorage is unavailable, display a persistent banner: "Data cannot be saved in this browser. Please enable cookies and local storage."
- Confirm dialog must be used before any destructive delete operation.
- All form errors display inline below the relevant input.

---

## 19.17 Performance Requirements

- Use `useMemo` to compute budget totals from entries array.
- Use `useCallback` on all trip CRUD handlers.
- React Router's code-splitting is not required but recommended for larger scaling.
- Packing list with > 100 items must not cause visible lag.

---

## 19.18 Testing Checklist

- [ ] Create a trip and verify it appears on the home page.
- [ ] Open a trip and navigate all five tabs.
- [ ] Add a destination and verify it persists.
- [ ] Add income and expense entries; verify correct balance.
- [ ] Add packing items; check them off; verify progress bar updates.
- [ ] Write trip notes; verify persistence after refresh.
- [ ] Delete a trip; verify confirmation dialog and successful removal.
- [ ] Navigate to a non-existent trip ID; verify redirect to home.
- [ ] App responsive at 375px, 768px, and 1440px.
- [ ] All data persists after hard refresh.
- [ ] Lighthouse Accessibility ≥ 90.

---

## 19.19 Acceptance Criteria

| ID    | Criterion                              | Pass Condition                                          |
|-------|----------------------------------------|---------------------------------------------------------|
| AC-01 | Trip creation works                    | New trip appears on home page immediately               |
| AC-02 | Multi-route navigation                 | All 5 trip detail routes render correct content         |
| AC-03 | Budget tracking correct                | Balance = Total Income - Total Expenses                 |
| AC-04 | Packing list functional                | Items check/uncheck; progress bar reflects state        |
| AC-05 | Notes persist                          | Notes content survives hard page refresh                |
| AC-06 | Delete with confirmation               | Confirmation dialog shown; deletion removes all trip data |
| AC-07 | Responsive layout                      | No horizontal scroll at 375px on all routes            |
| AC-08 | 404 handling                          | Non-existent route shows NotFound page                  |

---

## 19.20 Future Enhancements

- Map integration (Google Maps or Leaflet) to pin destinations.
- Currency converter for multi-currency trip budgets.
- Collaborative trip planning (shared trip via URL with Firebase).
- Photo gallery per trip.
- Calendar view for itinerary planning.
- PDF export of trip details.
- Offline PWA support with Service Worker.

---

## 19.21 Deployment Checklist

- [ ] `npm run build` succeeds.
- [ ] No environment variables required.
- [ ] React Router configured for correct base path on Vercel/Netlify.
- [ ] `vercel.json` or `netlify.toml` configured for SPA redirect (all routes → `index.html`).
- [ ] Live URL in README and repository About.

**Netlify/Vercel SPA Redirect Configuration:**
```toml
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 19.22 Out of Scope

- Backend persistence or cloud sync.
- User authentication.
- Real-time collaboration.
- Flight or hotel booking integration.
- Map visualization.
- Currency conversion (P2 future).
- Native mobile app.

---

---

# Appendix A — Coding Standards

## A.1 File and Component Standards

- Every component must be in its own directory with an accompanying `.module.css` file.
- `index.js` barrel files are optional but must not create circular imports.
- All imports must be grouped in order: React, third-party libraries, internal modules.
- Absolute imports must be configured in `vite.config.js` using path aliases.

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
});
```

## A.2 ESLint Configuration

```javascript
// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
  },
};
```

## A.3 Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "printWidth": 100,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

---

# Appendix B — Folder Structures

## B.1 Standard Project Folder Structure

```
project-name/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   └── ComponentName/
│   │       ├── ComponentName.jsx
│   │       └── ComponentName.module.css
│   ├── hooks/
│   │   └── useHookName.js
│   ├── pages/               # (React Router projects only)
│   │   └── PageName/
│   │       ├── PageName.jsx
│   │       └── PageName.module.css
│   ├── context/             # (Context API projects)
│   │   └── ContextName.jsx
│   ├── utils/
│   │   └── utilityFunction.js
│   ├── constants/
│   │   └── domainConstants.js
│   ├── data/                # (Static data / mock data)
│   │   └── products.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

# Appendix C — Environment Variables

## C.1 Policy Summary

| Rule                                 | Detail                                                             |
|--------------------------------------|--------------------------------------------------------------------|
| Prefix all variables                 | All Vite project env vars must start with `VITE_`                |
| Never commit `.env`                  | `.gitignore` must list `.env`, `.env.local`, `.env.*.local`       |
| Always provide `.env.example`        | Must include all required keys with placeholder values             |
| Validate on startup                  | Check for missing variables and fail early with clear error        |
| Document all variables               | Each variable must be listed in README environment section        |

## C.2 Environment Variable Validation Pattern

```javascript
// src/utils/validateEnv.js
const REQUIRED_ENV_VARS = [
  'VITE_OPENWEATHER_API_KEY',
  'VITE_OPENWEATHER_BASE_URL',
];

export const validateEnv = () => {
  const missing = REQUIRED_ENV_VARS.filter(
    (key) => !import.meta.env[key]
  );
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
      'Please copy .env.example to .env and fill in the values.'
    );
  }
};
```

---

# Appendix D — Commit Convention

## D.1 Full Commit Message Template

```
<type>(<scope>): <imperative present-tense summary, ≤ 72 chars>

[Blank line]
[Optional body — what and why, not how. Wrap at 72 chars.]

[Blank line]
[Optional footer — BREAKING CHANGE: ..., Closes #issue]
```

## D.2 Scope Reference by Project

| Project          | Allowed Scopes                                               |
|------------------|--------------------------------------------------------------|
| Weather Hub      | `search`, `weather`, `forecast`, `units`, `history`, `ui`, `api`, `hooks` |
| 3D Viewer        | `viewer`, `model`, `controls`, `lighting`, `selector`, `ui`, `perf` |
| Fitness Tracker  | `workout`, `bmi`, `goals`, `progress`, `charts`, `theme`, `storage`, `ui` |
| Travel Planner   | `trips`, `budget`, `packing`, `destinations`, `notes`, `routing`, `ui`, `storage` |

## D.3 Bad vs Good Commit Messages

| Bad                              | Good                                                        |
|----------------------------------|-------------------------------------------------------------|
| `fix stuff`                      | `fix(search): resolve empty query bypass validation`        |
| `update`                         | `feat(forecast): add 5-day forecast grid with icons`        |
| `WIP`                            | `chore(deps): add axios and configure weather API client`   |
| `added dark mode`                | `feat(theme): implement dark mode with ThemeContext`        |
| `fixed bug`                      | `fix(storage): prevent LocalStorage write on empty workout` |

---

# Appendix E — Submission Checklist

The following checklist must be completed before declaring any project as submitted:

**Code Quality**
- [ ] ESLint passes with zero errors
- [ ] Prettier formatting applied across all files
- [ ] No `console.log` statements in committed code
- [ ] No unused imports or variables
- [ ] All components are functional (no class components)

**Functionality**
- [ ] All P0 functional requirements are implemented and working
- [ ] All P1 functional requirements are implemented and working
- [ ] All acceptance criteria pass

**Responsiveness**
- [ ] Tested at 375px (mobile), 768px (tablet), 1440px (desktop)
- [ ] No horizontal scroll at any breakpoint
- [ ] Screenshots taken at all three breakpoints

**Accessibility**
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] All form inputs have associated labels
- [ ] All images have alt text
- [ ] Keyboard navigation tested

**Performance**
- [ ] Lighthouse Performance score ≥ 85
- [ ] `npm run build` succeeds without errors or warnings
- [ ] Bundle size is within acceptable limits

**GitHub**
- [ ] Repository created and named correctly per this PRD
- [ ] All work is on `main` branch (final state)
- [ ] Commit history follows Conventional Commits convention
- [ ] `.env` file is NOT committed
- [ ] `.env.example` IS committed with placeholder values
- [ ] `.gitignore` includes all required entries

**Documentation**
- [ ] README.md is complete per Section 15 requirements
- [ ] Live deployment URL is in README
- [ ] Screenshots are embedded in README
- [ ] Repository About section has live URL and description

**Deployment**
- [ ] Application is deployed and publicly accessible
- [ ] All environment variables set in deployment platform
- [ ] Deployment URL tested in production environment

---

# Appendix F — Repository Checklist

Each of the four repositories must meet the following requirements:

| Check               | Requirement                                                         | Status |
|---------------------|---------------------------------------------------------------------|--------|
| Repository Name     | Matches name in this PRD exactly                                    | [ ]    |
| Visibility          | Public (visible without login)                                      | [ ]    |
| Description         | Repository About has 1-line description + live URL                 | [ ]    |
| `main` Branch       | Contains final, production-ready code                               | [ ]    |
| README.md           | Present, complete, with screenshots and live link                   | [ ]    |
| `.gitignore`        | Present, node_modules and .env excluded                             | [ ]    |
| `.env.example`      | Present, all variables documented                                   | [ ]    |
| `.eslintrc.cjs`     | Present and valid                                                   | [ ]    |
| `.prettierrc`       | Present and valid                                                   | [ ]    |
| `package.json`      | `name`, `version`, `scripts` all correctly set                     | [ ]    |
| `package-lock.json` | Committed (not in .gitignore)                                       | [ ]    |
| Commit History      | At least 10 meaningful commits per project                         | [ ]    |
| Commit Messages     | Follows Conventional Commits specification                         | [ ]    |
| No Large Files      | No binary files > 5MB except approved model assets (Task 2)        | [ ]    |
| Live Deployment     | Deployed to Vercel/Netlify; URL in About and README                 | [ ]    |

---

*End of CODTECH_PRD.md*

*Document ID: CODTECH-PRD-2026-CITS3986 | Version 1.0.0 | Approved | 06 June 2026*

*CODTECH IT Solutions Pvt. Ltd. — All Rights Reserved*
