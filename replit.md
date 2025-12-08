# Gen-Z Dark Rave Portfolio

A stunning personal portfolio website with a futuristic dark rave/cyberpunk aesthetic, featuring 3D graphics, smooth animations, and neon visual effects.

## Overview

This is a full-stack portfolio application built with:
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, Three.js (React Three Fiber)
- **Backend**: Express.js, TypeScript
- **Styling**: Dark-only theme with neon accents (purple, cyan, magenta, acid green)

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── 3d/              # Three.js/R3F components (HeroScene, PlaygroundCanvas)
│   │   │   ├── layout/          # Layout components (Navbar, Footer, PageTransition)
│   │   │   └── ui/              # Reusable UI components (buttons, cards, badges, etc.)
│   │   ├── data/                # Centralized data files (profile, skills, experience, projects, socials)
│   │   ├── hooks/               # Custom React hooks
│   │   ├── lib/                 # Utilities and helpers
│   │   └── pages/               # Page components
│   └── index.html
├── server/
│   ├── routes.ts                # API endpoints
│   ├── storage.ts               # In-memory storage
│   └── index.ts                 # Express server setup
├── shared/
│   └── schema.ts                # Shared TypeScript types and Zod schemas
└── design_guidelines.md         # Design system documentation
```

## Pages

1. **Home (/)** - Hero landing with 3D animated scene
2. **About (/about)** - About section with skills display
3. **Experience (/experience)** - Work and education timeline
4. **Projects (/projects)** - Project gallery with tech stack badges
5. **Playground (/playground)** - Interactive 3D demos and experiments
6. **Contact (/contact)** - Contact form with social links

## Customization

All personal content is centralized in the `client/src/data/` folder:

- `profile.ts` - Name, tagline, location, bio
- `skills.ts` - Skill groups and proficiency levels
- `experience.ts` - Work and education history
- `projects.ts` - Portfolio projects
- `socials.ts` - Social media links

Replace placeholder values (YOUR_NAME, YOUR_COMPANY, etc.) with your actual information.

## Running the Application

```bash
npm run dev
```

The application runs on port 5000 with:
- Frontend: Vite dev server
- Backend: Express API server

## Design System

The theme follows a dark rave aesthetic with:
- Near-black background with noise texture
- Neon accent colors: purple (#a855f7), cyan (#06b6d4), magenta (#ec4899), green (#84cc16)
- Glowing effects and gradients
- Bold typography (Space Grotesk for headlines, Inter for body)
- Subtle animations and hover effects

See `design_guidelines.md` for complete design specifications.

## API Endpoints

- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Retrieve contact messages (for admin use)

## Recent Changes

- Initial setup with dark rave theme
- 6 pages with full routing
- 3D hero scene with Three.js
- Contact form with backend integration
- Framer Motion page transitions and animations
