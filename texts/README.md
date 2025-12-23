# Text Management

Centralized text storage for easy maintenance and future i18n support.

## Usage

```tsx
import { common, pages } from "@/texts";

// Static text
<button>{common.actions.save}</button>
<h1>{pages.home.title}</h1>

// Dynamic text (functions)
<p>{common.validation.minLength(8)}</p>
<p>{common.messages.confirmDelete("user")}</p>
```

## Available Texts

**common.actions**: `save`, `cancel`, `delete`, `edit`, `create`, `submit`, `back`, `next`, `confirm`, `close`

**common.messages**: `loading`, `error`, `success`, `noData`, `confirmDelete(item)`

**common.validation**: `required`, `invalidEmail`, `minLength(min)`, `maxLength(max)`

**pages.home**: `title`, `subtitle`, `description`

**pages.blog**: `title`, `subtitle`, `noPostsFound`, `readMore`, `postedOn(date)`

**pages.notFound**: `title`, `message`, `backToHome`

## Adding New Texts

### Add to existing file

```ts
// texts/common.ts
export const common = {
  actions: {
    save: "Save",
    download: "Download", // ← Add here
  },
} as const;
```

### Add dynamic text

```ts
export const common = {
  messages: {
    greeting: (name: string) => `Hello, ${name}!`, // ← Function
  },
} as const;
```

### Create new file for feature

```ts
// texts/auth.ts
export const auth = {
  login: { title: "Login", submit: "Sign In" },
  register: { title: "Register" },
} as const;

// texts/index.ts
export { auth } from "./auth"; // ← Export

// Use
import { auth } from "@/texts";
<h1>{auth.login.title}</h1>
```

## Best Practices

1. **Keep it flat**: Max 2-3 levels of nesting
2. **Use camelCase**: `common.actions.save` (not `COMMON.ACTIONS.SAVE`)
3. **Always `as const`**: For type inference
4. **Type function params**: `(name: string) => ...`
5. **Organize by domain**: `common`, `pages`, feature-specific files

## Future i18n

Structure is ready for localization:

```
texts/
  ├── en/ → common.ts, pages.ts
  └── vi/ → common.ts, pages.ts
```

Just update `index.ts` to switch locale. Don't implement until needed.
