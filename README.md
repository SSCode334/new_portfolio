# Compact Prompt Generator - Portfolio

A modern, full-stack portfolio application built with React, TypeScript, Express, and Three.js.

## Features

- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 🎭 3D graphics with Three.js and React Three Fiber
- ⚡ Fast development with Vite
- 🚀 Production-ready build system
- 📱 Responsive design
- 🎯 Type-safe with TypeScript

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **UI Components**: Radix UI, shadcn/ui
- **State Management**: TanStack Query
- **Routing**: Wouter

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Compact-Prompt-Generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server (requires build first)
- `npm run check` - Type check TypeScript files
- `npm run db:push` - Push database schema (requires DATABASE_URL)

## Building for Production

1. Build the project:
```bash
npm run build
```

This will:
- Build the React client to `dist/public`
- Bundle the Express server to `dist/index.cjs`

2. Start the production server:
```bash
npm run start
```

## Deployment

### Replit Deployment

The project is configured for Replit deployment with the `.replit` file. The deployment settings are:

- **Build Command**: `npm run build`
- **Run Command**: `npm run start`
- **Port**: 5000 (configured via PORT environment variable)

### Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode (development/production)
- `DATABASE_URL` - PostgreSQL connection string (optional, uses in-memory storage by default)

## Project Structure

```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Static data
│   │   └── lib/         # Utilities
│   └── index.html
├── server/          # Express backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes
│   ├── storage.ts   # Data storage layer
│   └── vite.ts      # Vite dev server setup
├── shared/          # Shared TypeScript types
├── script/          # Build scripts
└── dist/            # Production build output
```

## Development Notes

- The project uses in-memory storage by default (no database required)
- Windows compatibility is handled via `cross-env` for environment variables
- The server automatically serves the Vite dev server in development mode
- Production builds serve static files from `dist/public`

## License

MIT

