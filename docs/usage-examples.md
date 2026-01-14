# Usage Examples

This document contains common usage patterns and code examples for the project.

## 🌙 Dark Mode

The project has built-in dark mode support with `next-themes`:

```tsx
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
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

## 🎨 Icon Generation

The project uses SVGR to automatically generate React components from SVG files:

1. Add SVG file to `public/icons/`
2. Run the command:

```bash
pnpm generate-icons
```

3. Icons will be generated to `components/atoms/icons/`

### Configuration

- Auto replace `#000` with `currentColor` for theming
- Generate TypeScript components with memo
- Export all icons from `index.tsx`
