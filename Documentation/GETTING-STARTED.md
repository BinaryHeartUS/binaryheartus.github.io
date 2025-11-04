# Getting Started

This guide will help you set up the BinaryHeart website project for local development.

## Prerequisites

- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)
- **Git**
- A code editor (VS Code recommended)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BinaryHeartUS/binaryheartus.github.io.git
   cd binaryheartus.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Project Overview

### Tech Stack

- **React 18** - UI library with TypeScript for type safety
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### High-Level Folder Structure

```
├── Documentation/        # All project documentation
├── public/              # Static assets (not processed by build)
│   └── assets/         # Images and icons
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components organized by chapter
│   │   ├── national/   # National/501(c)(3) pages
│   │   ├── iu/         # Indiana University chapter pages
│   │   ├── purdue/     # Purdue University chapter pages
│   │   ├── nu/         # Northwestern University chapter pages
│   │   ├── nt/         # New Trier chapter pages
│   │   └── rose-hulman/ # Rose-Hulman chapter pages
│   ├── data/           # JSON data files
│   ├── utils/          # Utility functions (URL helpers, stats, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
└── .github/            # CI/CD workflows
```

## Development Commands

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production (outputs to `dist/`)
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run deploy`** - Deploy to GitHub Pages (manual deployment)

## Key Features

- ✅ Responsive design (mobile-first)
- ✅ Component-based architecture
- ✅ Chapter-specific pages with unique content per chapter
- ✅ Dynamic chapter dropdown (loads from JSON)
- ✅ Chapter-aware navigation and routing
- ✅ React Router for client-side navigation
- ✅ Tailwind CSS for consistent styling
- ✅ TypeScript for type safety
- ✅ Automatic deployment via GitHub Actions

## Configuration Files

- **`vite.config.ts`** - Vite configuration (build tool)
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`eslint.config.js`** - ESLint configuration (code linting)
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Project dependencies and scripts

## Next Steps

- 📖 Learn how to [manage chapters](./MANAGING-CHAPTERS.md)
- 🖼️ Understand [image organization](./IMAGE-MANAGEMENT.md)
- 📄 See how to [add new pages](./ADDING-PAGES.md)
- 🚀 Learn about [deployment](./DEPLOYMENT.md)
