# Bonny Makaniankhondo Portfolio

A React portfolio site for presenting my work as a systems-minded full stack engineer. The site combines project case studies, leadership experience, and contact information in a polished single-page style experience with dedicated routes for deeper reading.

## About

This portfolio is designed to show more than screenshots. It focuses on how I think about systems, product workflows, backend structure, and real-world delivery.

The current project lineup includes:

- **Time Ledger** - a live multi-tenant SaaS application for timesheets, project tracking, billing, team invites, and workspace management
- **Resume Agent** - an AI-assisted workflow system for tailored job application materials
- **United Airlines Dashboard** - a client-facing analytics product built under real delivery constraints
- **SyncUp** - a mentorship and collaboration platform
- **ChefBonBon** - an AI recipe product redesigned around a stronger relational backend

## Live Project Highlight

- **Time Ledger Live App**: https://timeledger.netlify.app/

## Tech Stack

- **Frontend**: React 19, React Router 7
- **Styling**: Tailwind CSS 4 and custom application styles
- **Build Tool**: Vite 7
- **Typography / Experimental UI**: `@chenglou/pretext`
- **Icons**: Lucide React

## Site Features

- Responsive layout across desktop and mobile
- Project cards on the home page with deeper case studies on the projects page
- Image preview modals for portfolio screenshots
- Leadership and growth storytelling alongside technical work
- Resume download and direct contact links
- Shared data-driven project content powering multiple pages

## Routes

- **Home (`/`)** - introduction, featured work, engineering approach, and leadership highlights
- **Projects (`/projects`)** - full project case studies including Time Ledger
- **Leadership (`/leadership`)** - leadership experience, growth, and team-facing context
- **Contact (`/contact`)** - ways to connect

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/bonny2long/icstarsPort.git
   cd icstarsPort
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
  assets/         Static images and media
  components/
    layout/       Shared page layout components
    ui/           Reusable interface components
  data/           Portfolio content and resume assets
  pages/          Route-level page components
  App.jsx         Application routes
  index.css       Global styles
  main.jsx        React entry point
```

## Author

**Bonny Makaniankhondo**

- LinkedIn: [linkedin.com/in/bonny-makaniankhondo-bb95a3321](https://www.linkedin.com/in/bonny-makaniankhondo-bb95a3321/)
- GitHub: [github.com/bonny2long](https://github.com/bonny2long)

## License

This project is open source and available under the MIT License.
