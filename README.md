# BitRobot Dashboard

A modern React dashboard application for BitRobot, built with Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: Radix UI + shadcn/ui pattern
- **Routing**: React Router v6
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint, Prettier, Husky

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- npm (comes with Node.js)

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run development server:

```bash
npm run dev
```

Your project will be accessible at [http://localhost:5173/](http://localhost:5173/)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs typecheck + vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Lint and auto-fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript type checking
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── app/                    # App initialization
│   ├── App.tsx            # Main app with router
│   └── main.tsx           # Entry point
├── pages/                 # Page components (routes)
│   ├── Dashboard/
│   │   ├── Dashboard.tsx
│   │   └── sections/      # Dashboard sections
│   └── NotFound/
├── components/            # Shared components
│   ├── ui/               # shadcn UI components
│   └── icons/            # SVG icon components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and types
│   ├── utils.ts
│   ├── constants.ts
│   └── types/
├── styles/
│   └── globals.css       # Global styles + Tailwind
└── test/                 # Test utilities
```

## Code Quality

### Pre-commit Hooks

After running `npm install`, Husky will be set up automatically. Code will be linted and formatted before each commit.

### Manual Checks

```bash
# Check types
npm run typecheck

# Lint code
npm run lint

# Format code
npm run format
```

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy to Vercel

This project is configured for Vercel deployment. Simply connect your repository to Vercel and it will automatically build and deploy.

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Available environment variables:
- `VITE_APP_TITLE` - Application title
- API configuration (for future use)

## Contributing

1. Follow the existing code style
2. Run `npm run typecheck` before committing
3. Ensure all tests pass with `npm test`
4. Format code with `npm run format`

## License

Proprietary
