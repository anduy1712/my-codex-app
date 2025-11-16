## Component Structure (Atomic Design)

- Components are organized into **Atoms**, **Molecules**, and **Organisms**.
- Each component resides in its own folder with the following structure:
  - `types.ts`: Type definitions for the component.
  - `[component-name].tsx`: Component implementation.
  - `index.ts`: Export the component.
- All components must include a `className` prop for custom styling.

Note: kebab-case for component names to avoid case-insensitive issues 
Next.js uses this by default, and Angular includes it in its style guide. Kebab-case can save you and your team some headaches.
ref: [Kent C. Dodds](https://x.com/kentcdodds/status/1249870276688371713)