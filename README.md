# My Codex App

A modern, production-ready Next.js application built with TypeScript, featuring Atomic Design architecture, comprehensive state management, and developer-focused tooling.

## Tech Stack

- **Framework**: [Next.js 15.3.4](https://nextjs.org) (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.x
- **Styling**: [TailwindCSS 4](https://tailwindcss.com)
- **State Management**:
  - [Zustand](https://github.com/pmndrs/zustand) - Client state
  - [TanStack Query](https://tanstack.com/query) - Server state
- **UI/UX**:
  - [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
  - [sonner](https://sonner.emilkowal.ski/) - Toast notifications
  - [react-error-boundary](https://github.com/bvaughn/react-error-boundary) - Error handling
- **Utilities**:
  - [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Class name management
  - [tailwind-variants](https://www.tailwind-variants.org/) - Component variants
  - [usehooks-ts](https://usehooks-ts.com/) - React hooks collection
  - [zod](https://zod.dev/) - Schema validation
- **Code Quality**: ESLint, Prettier, Husky, lint-staged, Commitlint

## Prerequisites

- Node.js 20.x or higher
- pnpm 8.x or higher (recommended)

## Quick Start

```bash
# Clone and install
git clone <repository-url>
cd my-codex-app
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
my-codex-app/
├── app/                    # Next.js App Router
│   ├── components/        # App-specific components
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── provider.tsx       # App providers
├── components/            # Shared components (Atomic Design)
│   ├── atoms/            # Basic building blocks
│   ├── molecules/        # Simple component combinations
│   └── organisms/        # Complex components
├── features/             # Feature-based modules
├── hooks/                # Custom React hooks
├── libs/                 # Library configurations
├── stores/               # Zustand stores
├── utils/                # Utility functions
├── configs/              # App configurations
├── docs/                 # Project documentation
└── scripts/              # Build & automation scripts
```

## Available Scripts

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `pnpm dev`            | Run development server with Turbopack    |
| `pnpm build`          | Build for production                     |
| `pnpm start`          | Start production server                  |
| `pnpm lint`           | Run linting checks                       |
| `pnpm generate-icons` | Generate React components from SVG icons |

## Documentation

| Document                                             | Description                                        |
| ---------------------------------------------------- | -------------------------------------------------- |
| [Component Structure](./docs/component-structure.md) | Atomic Design pattern & component guidelines       |
| [Naming Conventions](./docs/naming-function.md)      | Function & variable naming rules (A/HC/LC pattern) |
| [Code Guidelines](./docs/rules.md)                   | Best practices & coding standards                  |
| [Usage Examples](./docs/usage-examples.md)           | Dark mode, state management, styling examples      |
| [Contributing](./CONTRIBUTING.md)                    | Git workflow, commit conventions, setup guide      |

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Build

```bash
pnpm build
pnpm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [TanStack Query Documentation](https://tanstack.com/query)

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on:

- Development setup
- Git workflow & commit conventions
- Code review process

## License

Private project.

---

**Built with Next.js and TypeScript**
