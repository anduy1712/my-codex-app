# My Codex App

A modern, production-ready Next.js application built with TypeScript, featuring Atomic Design architecture, comprehensive state management, and developer-focused tooling.

## 📖 Overview

This project is a scalable Next.js starter template that implements best practices for building modern web applications. It provides a solid foundation with pre-configured state management (Zustand for client, TanStack Query for server), built-in dark mode support, automated code quality tools, and a well-structured component architecture following Atomic Design principles. The codebase emphasizes maintainability through enforced naming conventions, organized documentation, and automated workflows.

## 🚀 Tech Stack

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
- **Code Quality**:
  - ESLint & Prettier
  - Husky - Git hooks
  - lint-staged - Pre-commit linting
  - Commitlint - Conventional commits

## 📁 Project Structure

```
my-codex-app/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── components/        # App-specific components
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── provider.tsx       # App providers (React Query, Theme, etc.)
│   └── globals.css        # Global styles
├── components/            # Shared components (Atomic Design)
│   ├── atoms/            # Basic building blocks
│   │   ├── button/
│   │   └── icons/
│   ├── molecules/        # Simple component combinations
│   │   ├── error-fallback/
│   │   └── message-markdown/
│   └── organisms/        # Complex components
│       └── theme-switch/
├── features/             # Feature-based modules
├── hooks/                # Custom React hooks
├── libs/                 # Library configurations
│   └── react-query/
├── stores/               # Zustand stores
│   └── slices/
├── utils/                # Utility functions
├── configs/              # App configurations
├── docs/                 # Project documentation
│   ├── component-structure.md
│   ├── naming-function.md
│   └── rules.md
├── public/               # Static assets
│   ├── icons/           # SVG icons
│   └── images/
└── scripts/              # Build & automation scripts
```

## 📋 Prerequisites

- Node.js 20.x or higher
- pnpm 8.x or higher (recommended)

## 🛠️ Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd my-codex-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

| Script                | Description                              |
| --------------------- | ---------------------------------------- |
| `pnpm dev`            | Run development server with Turbopack    |
| `pnpm build`          | Build for production                     |
| `pnpm start`          | Start production server                  |
| `pnpm lint`           | Run linting checks                       |
| `pnpm lint-staged`    | Run linting on staged files              |
| `pnpm generate-icons` | Generate React components from SVG icons |

## 🎨 Atomic Design Pattern

The project uses Atomic Design methodology to organize components:

### **Atoms** (components/atoms/)

- Most basic components (button, icon, input, etc.)
- Cannot be broken down further
- Examples: `Button`, `Icon`, `Text`

### **Molecules** (components/molecules/)

- Combination of atoms
- Have a specific functionality
- Examples: `SearchBar`, `MessageMarkdown`, `ErrorFallback`

### **Organisms** (components/organisms/)

- Combination of molecules and atoms
- Form complex sections
- Examples: `ThemeSwitch`, `Header`, `Sidebar`

### Component Guidelines

Each component folder must have:

```
component-name/
├── index.ts              # Export component
├── component-name.tsx    # Component implementation
├── types.ts             # TypeScript types (if needed)
└── consts.ts            # Constants (if needed)
```

**Important Notes:**

- All components must have a `className` prop for custom styling
- Use `camelCase` for function names
- Use `PascalCase` for component names
- Use `UPPER_CASE` for constants

## 🎯 Code Guidelines

The project follows best practices defined in the `docs/` folder:

### 1. **Component Best Practices** (`docs/rules.md`)

- Keep props count <= 5
- Pass objects instead of primitives when dealing with related props
- Avoid negative conditionals
- Use default parameters
- Encapsulate conditionals

### 2. **Naming Conventions** (`docs/naming-function.md`)

- Use English for all code
- Follow A/HC/LC pattern: `prefix? + action + high context + low context?`
- Use standard action verbs: `get`, `set`, `reset`, `remove`, `delete`, `handle`
- Prefixes: `is`, `has`, `should`, `min/max`, `prev/next`

**Naming Examples:**

```typescript
// Good
const getUserMessages = () => {...}
const isEnabled = true
const hasProducts = products.length > 0
const shouldDisplayMessage = () => {...}

// Bad
const getUsrMsg = () => {...}
const enabled = true
const productsExist = products.length > 0
```

### 3. **Component Structure** (`docs/component-structure.md`)

- Follow Atomic Design
- Each component in its own folder
- Required `className` prop

## 🎨 Icon Generation

The project uses SVGR to automatically generate React components from SVG files:

1. Add SVG file to `public/icons/`
2. Run the command:

```bash
pnpm generate-icons
```

3. Icons will be generated to `components/atoms/icons/`

**Configuration:**

- Auto replace `#000` with `currentColor` for theming
- Generate TypeScript components with memo
- Export all icons from `index.tsx`

## 🔧 Git Hooks

The project uses Husky and lint-staged to maintain code quality:

### Pre-commit

- Automatically format code with Prettier
- Run ESLint on staged files
- Only commit when all checks pass

### Commit Message

- Uses [Conventional Commits](https://www.conventionalcommits.org/)
- Format: `type(scope?): subject`

**Examples:**

```bash
feat: add dark mode support
fix(auth): resolve login redirect issue
docs: update README with new scripts
style(button): improve hover states
refactor(api): simplify error handling
```

**Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Styling changes
- `refactor` - Code refactoring
- `test` - Tests
- `chore` - Maintenance

## 🌙 Dark Mode

The project has built-in dark mode support with `next-themes`:

```tsx
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
  );
}
```

## 🗄️ State Management

### Client State (Zustand)

```typescript
// stores/slices/example/example-store.ts
import { create } from "zustand";

interface ExampleStore {
  count: number;
  increment: () => void;
}

export const useExampleStore = create<ExampleStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### Server State (TanStack Query)

```typescript
import { useQuery } from "@tanstack/react-query";

function Component() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
  });
}
```

## 🎨 Styling

### TailwindCSS with Variants

```typescript
import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded px-4 py-2 font-medium",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-200 text-gray-800",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
});

// Usage
<button className={button({ color: "primary", size: "lg" })}>Click me</button>;
```

### Custom className

All components accept `className` prop:

```typescript
<Button className="mt-4 hover:scale-105" />
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Manual Build

```bash
pnpm build
pnpm start
```

Build output in `.next/` folder

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [TanStack Query Documentation](https://tanstack.com/query)

## 📖 Internal Documentation

- [Component Structure](./docs/component-structure.md)
- [Naming Conventions](./docs/naming-function.md)
- [Code Rules & Best Practices](./docs/rules.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feat/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feat/amazing-feature`
5. Open Pull Request

**Note:** Ensure code passes all lint checks and follows naming conventions.

## 📝 License

Private project.

---

**Built with ❤️ using Next.js and TypeScript**
