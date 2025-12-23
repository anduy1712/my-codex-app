# Contributing Guide

Welcome! This guide will help you follow our coding standards.

## 🎯 Core Rules

### 1. No Hardcoded Strings ❌

All user-facing text must be in `texts/` folder.

```tsx
// ❌ BAD
<button>Save</button>

// ✅ GOOD
import { common } from "@/texts";
<button>{common.actions.save}</button>
```

**Adding new text:**

```ts
// texts/common.ts or create new file
export const common = {
  yourFeature: {
    title: "Your Title",
    action: (name: string) => `Hello ${name}`, // dynamic text
  },
} as const;
```

See [texts/README.md](./texts/README.md) for details.

---

### 2. No Hardcoded URLs ❌

All routes must use `PATHS` from `configs/paths.ts`.

```tsx
// ✅ GOOD
import { PATHS } from "@/configs/paths";

// ❌ BAD
<Link href="/app/dashboard">Dashboard</Link>;
router.push("/auth/login");

<Link href={PATHS.app.dashboard.getHref()}>Dashboard</Link>;
router.push(PATHS.auth.login.getHref());
```

**Adding new route:**

```ts
// configs/paths.ts
export const PATHS = {
  yourFeature: {
    getHref: () => "/your-feature",
    detail: {
      getHref: (id: string) => `/your-feature/${id}`,
    },
  },
} as const;
```

---

### 3. Component Structure 📁

Follow Atomic Design:

```
components/
  ├── atoms/       → Basic elements (Button, Input)
  ├── molecules/   → Simple combinations (SearchBar, Card)
  └── organisms/   → Complex components (Header, Form)
```

See [docs/component-structure.md](./docs/component-structure.md).

---

### 4. Naming Conventions 📝

- **Files**: `kebab-case` (e.g., `user-profile.tsx`)
- **Components**: `PascalCase` (e.g., `UserProfile`)
- **Functions**: `camelCase` (e.g., `getUserData`)
- **Constants**: `UPPER_CASE` (e.g., `PATHS`, `API_URL`)

See [docs/naming-function.md](./docs/naming-function.md) for details.

---

## ✅ Pre-commit Checklist

- [ ] No hardcoded strings (use `texts/`)
- [ ] No hardcoded URLs (use `PATHS`)
- [ ] No `any` types (use proper types or `unknown`)
- [ ] Files named in `kebab-case`
- [ ] ESLint passes: `pnpm lint`

---

## 🚀 Quick Start for New Developers

1. **Clone and setup:**

   ```bash
   git clone <repo-url>
   cd my-codex-app
   pnpm install
   pnpm dev
   ```

2. **Read this file** (you're doing it!)

3. **Install VS Code extensions:**

   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

4. **Start coding!**

---

## 🆘 Common Issues

### Issue: Pre-commit hook fails

```bash
# Check what's wrong
pnpm lint

# Fix issues, then commit again
```

### Issue: ESLint error "no-explicit-any"

```ts
// ❌ Don't use 'any'
const data: any = fetchData();

// ✅ Use proper type or 'unknown'
const data: User = fetchData();
const data: unknown = fetchData();
```

### Issue: File naming error

```bash
# ❌ Wrong
UserProfile.tsx

# ✅ Correct
user-profile.tsx
```

---

## 📖 Additional Resources

- [Text Management](./texts/README.md)
- [Component Structure](./docs/component-structure.md)
- [Naming Functions](./docs/naming-function.md)
- [Project Rules](./docs/rules.md)

---

## 💡 Tips

- **Check existing code first** - Search before creating new text/route
- **Ask if unsure** - Better to ask than guess
- **Code review is your friend** - Learn from feedback

---

**Questions?** Ask the team or check existing code for examples.
